/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import axios from '../../../utils/axiosConfig';
import { Card } from './card';
import Styles from './carousal.module.scss';

function CarousalComponent({ title }) {
	const [topTours, setTopTours] = useState([]);
	const [topOrganizers, setTopOrganizers] = useState([]);
	useEffect(() => {
		axios.get('top-tours').then((res) => {
			setTopTours(res.data.tours);
			console.log(topTours);
		});
		axios.get('top-organizers').then((res) => {
			setTopOrganizers(res.data.organizers);
			console.log(topOrganizers);
		});
	}, []);

	return (
		<div className={Styles.carousal}>
			<div className={Styles.title}>
				{title}
			</div>
			<div className={Styles.carousalContainer}>
				{
					title === 'Top Tours' ? (
						<>

							{
								topTours.map((tour) => (
									<Card
										image=	{tour.images[0]}
										destination={tour.name}
										price = {`Rs ${tour.price.adults}`}
										tripDetails= {`${tour.durationDays} Days Trip`}
										id={tour._id}
									/>
								))
							}
						</>
					) : (
						<>
							{
								topOrganizers.map((item) => (
									<Card
										id={item._id}
										image= {item.organizer.displayPicture}
										organizer= {item.organizer.name}
										rating = {item.avgRating}
										tripDetails= {`Trips Completed: ${item.organizer.tripsCompleted}`}
									/>
								))
							}
						</>
					)
				}
			</div>
		</div>
	);
}

export { CarousalComponent };
