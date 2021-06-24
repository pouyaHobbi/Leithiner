import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const H1 = styled.h1`
	margin: 0 0 3rem 3rem;
	text-transform: uppercase;
	border-bottom: 1px solid #3333;
	padding-bottom: 2rem;
	font-weight: unset;
	color: #333;
`
export const H2 = styled.h2`
	text-transform: uppercase;
	letter-spacing: 2px;
	padding-bottom: 1rem;
	font-weight: unset;
	text-align: center;
`

export const useStyles = makeStyles({
	buttonPrimary: {
		backgroundColor: '#23272b',
		color: '#eaeaea',
		margin: '3rem auto',
		width: '30%',
		display: 'flex',
		'&:hover': {
			color: '#fff',
			backgroundColor: '#1d2124',
		},
	},
})
