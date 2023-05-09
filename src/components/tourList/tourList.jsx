/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import axios from '../../utils/axiosConfig';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import { SearchBar } from '../searchBar';
import { Card } from './card/card';
import Styles from './tourList.module.scss';

function TourList() {
	const params = new URLSearchParams(window.location.search);
	const [source,] = useState(params.get('pickup'));
	const [destination,] = useState(params.get('destination'));
	const [people,] = useState(params.get('people'));
	const [days,] = useState(params.get('days'));
	const [tours, setTours] = useState([]);
	useEffect(() => {
		axios.get(`search-tours?pickup=${source}&destination=${destination}&people=${people}&days=${days}`).then((res) => {
			setTours(res.data.tours);
		}).catch((err) => {
			console.log(err);
		});
	}, [source, destination, people, days]);

	return (
		<div className={Styles.tourList}>
			<div className={Styles.top}>
				<Navbar />
				<span className={Styles.title}>Discover new horizons with our tours.</span>
				<SearchBar />
			</div>
			<div className={Styles.main}>
				<div className={Styles.filterBox}>
					<div className={Styles.filterTop}>
						<span>Destination: <span>{tours.length} places found</span></span>
						<span>Filter By:</span>
					</div>
					<div className={Styles.middle}>
						<span>Price Range</span>
						<div className={Styles.range}>
							<input type="range" min="0" max="100" />
							<div className={Styles.rangeInfo}>
								<span>PKR 0</span>
								<span>PKR 2,00,000</span>
							</div>
						</div>
					</div>
					<div className={Styles.bottom}>
						<span>Duration</span>
						<div className={Styles.checkBox}>
							<input name="action" type="radio" />
							<span>Less than 6 hours</span>
						</div>
						<div className={Styles.checkBox}>
							<input name="action" type="radio" />
							<span>12 to 18 hours</span>
						</div>
						<div className={Styles.checkBox}>
							<input name="action" type="radio" />
							<span>24-48 hours</span>
						</div>
						<div className={Styles.checkBox}>
							<input name="action" type="radio"/>
							<span>More than 48 hours</span>
						</div>
						<button className={Styles.resetButton}>Reset Filters</button>
					</div>
				</div>
				<div className={Styles.list}>
					{
						tours.length === 0 && (
							<div className={Styles.noTours}>
								<span>NO TOURS FOUND</span>
							</div>
						)
					}
					{
						tours.map((tour) => (
							<Card
								key={tour._id}
								id={tour._id}
								name={tour.name}
								price={tour.price.adults}
								duration={tour.durationDays}
								source={source}
								destination={tour.destination}
								image={tour.images[0]}
								organizer={tour.organizer.name}
								peopleGoing={tour.ticketsPurchased}
								ticketLeft={tour.capacity - tour.ticketsPurchased}
								tags={tour.tags}
							/>
						))
					}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export { TourList };
