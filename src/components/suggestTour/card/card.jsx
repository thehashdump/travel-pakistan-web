/* eslint-disable no-underscore-dangle */
import { Image } from 'react-bootstrap';
import Styles from './card.module.scss';

function Card({ tour }) {
	console.log(tour.images);
	return (
		<>
			{
				!tour ? <div>Loading...</div> : (
					<div
						className={Styles.card}
						onClick={() => {
							window.location.href = `/tours/${tour._id}`;
						}}
					>
						<Image
							src={tour.images[0]}
							alt={'view image'}
							className={Styles.image}
						/>
						<div className={Styles.content}>
							<div className={Styles.top}>
								<div className={Styles.left}>
									{tour.name}
								</div>
								<div className={Styles.right}>
									<span className={Styles.price}>{tour.price.adults}</span>
								</div>
							</div>
							<div className={Styles.tripDetails}>
								Tour: {tour.durationDays} days
							</div>
						</div>
					</div>
				)
			}
		</>
	);
}

export { Card };
