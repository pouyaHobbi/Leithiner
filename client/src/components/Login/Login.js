import React, { useState } from 'react'
// Material
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import EmailIcon from '@material-ui/icons/Email'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import LockIcon from '@material-ui/icons/Lock'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
// Another
import { useStyles } from './../globalStyles/globalStyle'
import styled from 'styled-components'

const FIELDS = [
	{
		id: 'email',
		label: 'Email',
	},
	{
		id: 'password',
		label: 'Password',
	},
]

const useStyle = makeStyles({
	forgotPassButton: {
		background: '#c82333',
		color: '#eaeaea',
		width: '100%',
		marginTop: '3rem',
		'&:hover': {
			background: '#bd2130',
		},
	},
	typography: {
		marginBottom: '2rem',
		textAlign: 'center',
		fontStyle: 'italic',
		color: '#333',
	},
	formControl: {
		marginBottom: '1rem',
	},
	notHaveAcc: {
		marginBottom: '1rem',
		cursor: 'pointer',
	},
})
const Root = styled.div`
	width: 70%;
	margin: 5rem auto;
`
export const Login = () => {
	const globalStyles = useStyles()
	const classes = useStyle()

	const [values, setValues] = useState({
		email: '',
		password: '',
		showPassword: false,
	})
	const handleChange = (e) => {
		const { value, name } = e.target
		setValues((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword })
	}

	const renderFields = () => {
		return FIELDS.map((field) => {
			return (
				<FormControl
					className={classes.formControl}
					key={field.id}
					fullWidth
					variant='outlined'
				>
					<InputLabel htmlFor='outlined-adornment-amount'>
						{field.label}
					</InputLabel>
					<OutlinedInput
						type={
							field.id === 'email'
								? 'text'
								: values.showPassword
								? 'text'
								: 'password'
						}
						id='outlined-adornment-amount'
						name={field.id}
						value={field.id === 'email' ? values.email : values.password}
						onChange={handleChange}
						endAdornment={
							field.id === 'password' && (
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										onClick={handleClickShowPassword}
									>
										{values.showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							)
						}
						startAdornment={
							<InputAdornment position='start'>
								{field.id === 'email' ? <EmailIcon /> : <LockIcon />}
							</InputAdornment>
						}
						labelWidth={60}
					/>
				</FormControl>
			)
		})
	}
	return (
		<Root>
			<Typography className={classes.typography} variant='h4'>
				Sign in with your email and password
			</Typography>
			{renderFields()}
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Button
						style={{ width: '100%' }}
						variant='contained'
						className={globalStyles.buttonPrimary}
					>
						Login
					</Button>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Button
						style={{}}
						variant='contained'
						className={classes.forgotPassButton}
					>
						Forgot password
					</Button>
				</Grid>
			</Grid>

			<Typography className={classes.notHaveAcc} variant='h6'>
				No have an account ? Create one?
			</Typography>
		</Root>
	)
}

export default Login
