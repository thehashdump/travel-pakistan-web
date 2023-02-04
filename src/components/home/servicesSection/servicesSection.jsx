import { Image } from 'react-bootstrap';
import { Card } from './card/card';
import Styles from './servicesSection.module.scss';

function ServicesSection() {
	return (
		<div className={Styles.servicesSection}>
			<Image
				src={require('../../../assets/servicesSectionBackground.png')}
				alt="Services Section"
				className={Styles.servicesSectionImage}
			/>
			<div className={Styles.title}>
				We Offer Best Services
			</div>
			<div className={Styles.cardsContainer}>
				<Card
					image="1"
					title="Affordable Rates"
					description="Buy Tour packages and Travel Amenities at the most affordable rate"
				/>
				<Card
					image="2"
					title="Best Tour Providers"
					description="We will connect you to the best Tour Providers of Pakistan"
				/>
				<Card
					image="3"
					title="50+ Destinations"
					description="Top 50+ Tourists Destinations are now just few clicks away. "
				/>
				<Card
					image="4"
					title="Private Tours"
					description="We make your dream tour request into memorable tour"
				/>
			</div>
		</div>
	);
}

export { ServicesSection };
