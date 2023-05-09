/* eslint-disable no-underscore-dangle */
import { Image } from 'react-bootstrap';
import Styles from './agencyCard.module.scss';

function AgencyCard({ tour, agency, showButton }) {
	return (
		<>
			{
				(!tour) ? (<div>Loading...</div>)
					: (
						<div className={Styles.card}>
							<div className={Styles.imageContainer}>
								<Image src={tour.images[0]} className={Styles.mainImage}/>
							</div>
							<div className={Styles.content}>
								<div className={Styles.top}>
									<span className={Styles.heading}>{tour.name}</span>
									<span className={Styles.agencyName}>by {agency}</span>
								</div>
								<div className={Styles.details}>
									<div className={Styles.leftContent}>
										<span>Duration: {tour.durationDays} Days</span>
										<span>{tour.description}</span>
									</div>
									<div className={Styles.rightContent}>
										<div className={Styles.priceContent}>
											<span>Starting from</span>
											<span className={Styles.price}>PKR {tour.price.adults}</span>
											<span>per adult</span>
										</div>
										{
											showButton && (
												<button
													className={Styles.reserve}
													onClick={() => {
														window.location.href = `/tours/${tour._id}`;
													}}
												>
													<span>Explore</span>
												</button>
											)
										}

									</div>
								</div>
							</div>
						</div>
					)

			}
		</>

	);
}

export { AgencyCard };
