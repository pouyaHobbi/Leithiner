import React from 'react'
import styled from 'styled-components'
import { H1, H2 } from './../globalStyles/globalStyle'

const OFFERS = [
	{
		label: 'Chat',
		text: 'You can chat with your friends.',
	},
	{
		label: 'Teach',
		text: 'You can teach your knowledge and share it.',
	},
	{
		label: 'Online-course',
		text: 'You can see videos around the world.',
	},
	{
		label: 'Exam',
		text: 'You can compute your skill.',
	},
]

const Root = styled.div`
	width: 90%;
	margin: 0 auto;
`
const Text = styled.h4`
	font-weight: bold;
	text-align: center;
	color: #333;
`
const OffersRoot = styled.div`
	display: flex;
	justify-content: center;
`
const OfferList = styled.div`
	margin-right: 1rem;
`
const renderOffers = () => {
	return OFFERS.map((offer) => {
		return (
			<OfferList>
				<H2> {offer.label} </H2>
				<Text> {offer.text} </Text>
			</OfferList>
		)
	})
}

export const Offer = () => {
	return (
		<Root>
			<H1> OUR OFFER </H1>
			<OffersRoot>{renderOffers()}</OffersRoot>
		</Root>
	)
}

export default Offer
