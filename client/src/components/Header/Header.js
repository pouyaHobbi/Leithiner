import React from 'react'
import Image from 'next/image'

// styles
import styled from 'styled-components'

const Root = styled.div`
	width: 90%;
	margin: 2rem auto;
	position: relative; 
`
const Span = styled.span`
	position: absolute;
	z-index: 1;
	color: #eaeaea;
	font-weight: bolder;
	text-transform: capitalize;
	font-style: italic;
	font-size: 2rem;
	top: 30%;
	left: 50%;
	transform: translate(-50%, 0);
`

export const Header = () => {
	return (
		<Root>
			<Span>Join us for learning very well</Span>
			<Image
				layout='responsive'
				width={500}
				height={200}
				alt='Join us'
				src='/images/header.jpg'
			/>
		</Root>
	)
}

export default Header
