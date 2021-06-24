import React, { useState } from 'react'
import styled from 'styled-components'
// Material
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'

const FIRSTCOLUMN = [
	'Leithiner For Learning ',
	'Teaching on leithiner',
	'Contact us',
]
const useStyle = makeStyles({
	formControl: {
		width: '100%',
	},
})
const Root = styled.div`
	display: flex;
	justify-content: space-around;
	width: 90%;
	margin: 0 auto;
	border-top: 1px solid #333;
`
const UL = styled.ul`
	list-style: none;
`
const LI = styled.li`
	cursor: pointer;
`

const SecondListRoot = styled.div`
	display: flex;
	align-items: center;
`
const ThirdListRoot = styled.div`
	display: flex;
	align-items: center;
	width: 20%;
`

const renderFirstCol = () => {
	return FIRSTCOLUMN.map((text) => {
		return (
			<UL key={text}>
				<LI> {text} </LI>
			</UL>
		)
	})
}

export const Footer = () => {
	const [age, setAge] = useState('English')
	const classes = useStyle()

	const handleChange = (event) => {
		setAge(event.target.value)
	}

	return (
		<Root>
			<div> {renderFirstCol()} </div>
			<SecondListRoot>
				<UL>
					<LI> Privacy and Policy </LI>
				</UL>
			</SecondListRoot>
			<ThirdListRoot>
				<FormControl className={classes.formControl}>
					<InputLabel id='demo-simple-select-label'>Age</InputLabel>
					<Select
						autoWidth
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={age}
						onChange={handleChange}
					>
						<MenuItem value='English'> English </MenuItem>
						<MenuItem value='Persian'>Persian</MenuItem>
					</Select>
				</FormControl>
			</ThirdListRoot>
		</Root>
	)
}

export default Footer
