import { Card } from './card';
import Styles from './carousal.module.scss';

function CarousalComponent({ title }) {
	// const destinationsData = [
	// 	{
	// 		image: 'topDestinationCard1.png',
	// 		destination: 'Neelum Valley1',
	// 		price: 'Rs. 20,000',
	// 		tripDetails: '4 Days Trip',
	// 	},
	// 	{
	// 		image: 'topDestinationCard1.png',
	// 		destination: 'Neelum Valley2',
	// 		price: 'Rs. 20,000',
	// 		tripDetails: '4 Days Trip',
	// 	},
	// 	{
	// 		image: 'topDestinationCard1.png',
	// 		destination: 'Neelum Valley3',
	// 		price: 'Rs. 20,000',
	// 		tripDetails: '4 Days Trip',
	// 	},
	// 	{
	// 		image: 'topDestinationCard1.png',
	// 		destination: 'Neelum Valley3',
	// 		price: 'Rs. 20,000',
	// 		tripDetails: '4 Days Trip',
	// 	},
	// 	{
	// 		image: 'topDestinationCard1.png',
	// 		destination: 'Neelum Valley3',
	// 		price: 'Rs. 20,000',
	// 		tripDetails: '4 Days Trip',
	// 	},
	// ];

	return (
		<div className={Styles.carousal}>
			<div className={Styles.title}>
				{title}
			</div>
			<div className={Styles.carousalContainer}>
				{
					title === 'Top Destinations' ? (
						<>
							<Card
								image=	{'topDestinationCard1.png'}
								destination={'Neelum Valley1'}
								price = {'Rs. 20,000'}
								tripDetails= {'4 Days Trip'}
							/>
							<Card
								image=	{'topDestinationCard1.png'}
								destination={'Neelum Valley1'}
								price = {'Rs. 20,000'}
								tripDetails= {'4 Days Trip'}
							/>
							<Card
								image=	{'topDestinationCard1.png'}
								destination={'Neelum Valley1'}
								price = {'Rs. 20,000'}
								tripDetails= {'4 Days Trip'}
							/>
						</>
					) : (
						<>
							<Card
								image="topOrganizerCard1.png"
								organizer="NorthX"
								rating = "4.9(300+)"
								tripDetails="Trips Completed: 730+"
							/>
							<Card
								image="topOrganizerCard1.png"
								organizer="NorthX"
								rating = "4.9(300+)"
								tripDetails="Trips Completed: 730+"
							/>
							<Card
								image="topOrganizerCard1.png"
								organizer="NorthX"
								rating = "4.9(300+)"
								tripDetails="Trips Completed: 730+"
							/>
						</>
					)
				}
			</div>
		</div>
	);
}

export { CarousalComponent };
