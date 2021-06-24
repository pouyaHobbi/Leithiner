import React from 'react'
import { useRouter } from 'next/router'
// Style
import { makeStyles } from '@material-ui/core/styles'
// Material
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import PersonIcon from '@material-ui/icons/Person'
import TheatersIcon from '@material-ui/icons/Theaters'
import IconButton from '@material-ui/core/IconButton'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness2Icon from '@material-ui/icons/Brightness2'

const useStyles = makeStyles((theme) => ({
	appBar: {
		background: ' #303030 ',
	},
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		cursor: 'pointer',
	},
	button: {
		color: 'rgba(255, 255, 255, 0.5)',
		textAlign: 'center',
		'&:hover': {
			color: 'rgba(255,255,255,.75)',
		},
	},
	brightness2Icon: {
		color: '#eaeaea',
		transform : "rotate(30deg)"
	},
}))

export const NavBar = ({ darkMode, setDarkMode }) => {
	const classes = useStyles()
	const router = useRouter()

	const logoClickHandler = () => {
		router.push('/', null, { shallow: true })
	}
	const loginBtnHandler = (e) => {
		router.push('/login', null, { shallow: true })
	}
	const courseBtnHandler = (e) => {
		router.push('/courses', null, { shallow: true })
	}
	const handleDarkMode = (e) => {
		e.preventDefault()
		setDarkMode(!darkMode)
	}
	return (
		<AppBar className={classes.appBar} position='static'>
			<Toolbar>
				<>
					<IconButton
						aria-label='delete'
						size='medium'
						onClick={handleDarkMode}
						className={classes.darkModeButton}
					>
						{darkMode ? (
							<WbSunnyIcon fontSize='inherit' />
						) : (
							<Brightness2Icon className={classes.brightness2Icon} />
						)}
					</IconButton>
					<Typography
						onClick={logoClickHandler}
						variant='h6'
						className={classes.title}
					>
						Leithiner
					</Typography>
				</>
				<Button onClick={courseBtnHandler} className={classes.button}>
					<TheatersIcon /> Online-Course
				</Button>
				<Button onClick={loginBtnHandler} className={classes.button}>
					<PersonIcon /> Login
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar
