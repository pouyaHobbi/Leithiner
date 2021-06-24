import React from 'react'
import { useRouter } from 'next/router'

import styled from 'styled-components'
import { H1, H2 } from './../globalStyles/globalStyle'
// Material
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyle = makeStyles({
	typography: {
		width: '80%',
		margin: '0 auto',
		border: '1px solid #333',
		borderRadius: '4px',
		padding: '3rem',
		color: '#333',
		textAlign: 'center',
		lineHeight: '1.9rem',
	},
	button: {
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

export const UsersVideo = () => {
	const router = useRouter()
	const classes = useStyle()
	const handleClick = () => {
		router.push('/courses', null, { shallow: true })
	}
	return (
		<div>
			<H1> Let's see Leithiner user's video </H1>
			<Typography className={classes.typography} variant='h6'>
				Nostrum natus assumenda placeat pariatur accusamus quo distinctio illum
				aspernatur totam ducimus, molestias, neque sapiente accusantium esse sed
				qui corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Rem numquam ut consequuntur accusamus repellat id non, quibusdam enim
				fugit officia quas ratione, deserunt voluptate iste eligendi cupiditate
				commodi amet sint. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Ex hic aliquid molestias? Molestias illo sit, quos odit culpa
				assumenda facilis placeat reprehenderit iure doloribus, animi harum
				veritatis earum adipisci rerum. Lorem ipsum, dolor sit amet consectetur
				adipisicing elit. Consequatur quo dolores excepturi mollitia Lorem ipsum
				dolor sit amet consectetur, adipisicing elit. Nostrum natus assumenda
				placeat pariatur accusamus quo distinctio illum aspernatur totam
				ducimus, molestias, neque sapiente accusantium esse sed qui corrupti.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam ut
				consequuntur accusamus repellat id non, quibusdam enim fugit officia
				quas ratione, deserunt voluptate iste eligendi cupiditate commodi amet
				sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic
				aliquid molestias? Molestias illo sit, quos odit culpa assumenda facilis
				placeat reprehenderit iure doloribus, animi harum veritatis earum
				adipisci rerum. Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Consequatur quo dolores excepturi mollitia Lorem ipsum dolor sit
				amet consectetur, adipisicing elit. Nostrum natus assumenda placeat
				pariatur accusamus quo distinctio illum aspernatur totam ducimus,
				molestias, neque sapiente accusantium esse sed qui corrupti. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Rem numquam ut consequuntur
				accusamus repellat id non, quibusdam enim fugit officia quas ratione,
				deserunt voluptate iste eligendi cupiditate commodi amet sint. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Ex hic aliquid
				molestias? Molestias illo sit, quos odit culpa assumenda facilis placeat
				reprehenderit iure doloribus, animi harum veritatis earum adipisci
				rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Consequatur quo dolores excepturi mollitia
			</Typography>
			<Button
				onClick={handleClick}
				className={classes.button}
				variant='contained'
			>
				Online-Course
			</Button>
		</div>
	)
}

export default UsersVideo
