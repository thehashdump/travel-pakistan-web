/* eslint-disable no-unsafe-optional-chaining */
import { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import Styles from './billCard.module.scss';

function BillCard({ tour, tickets, setAmount }) {
	const price = (tour?.price?.adults * tickets?.adults)
	+ (tour?.price?.children * tickets?.children);
	const convenianceCharges = 270;

	useEffect(() => {
		if (setAmount) {
			setAmount(price + convenianceCharges);
		}
	}, [price, convenianceCharges, setAmount]);

	return (
		<>
			{
				!tour ? <div>Loading...</div> : (

					<div className={Styles.cardContainer}>
						<div className={Styles.cardContent}>
							<div className={Styles.tourInfo}>
								<div className={Styles.Image}>
									<Image
										src= {tour.images[0]}
										alt="tour image"
										className={Styles.img}
									/>
								</div>
								<div className={Styles.tourContent}>
									<div className={Styles.tourIcon}>
										<Image
											src={require('../../../assets/tour-icon.png')}
											alt="tour image"
											className={Styles.Icon}
										/>
										<span>Tour</span>
									</div>
									<span className={Styles.heading}>
										{tour.name}
									</span>
									<div className={Styles.tourlocation}>
										<span className={Styles.location}>
											<Image src={require('../../../assets/location-1.png')} />
											{tour.destination}
										</span>
									</div>
									<span className={Styles.agencyname}>By {tour.agencyName}</span>
								</div>
							</div>
							<hr />
							<div className={Styles.fareSummary}>
								<span>Fare Summary</span>
								<div>
									<span>Adults x{tickets.adults}</span>
									<span className={Styles.price}>
										<span className={Styles.currency}>PKR</span>{tour.price.adults}
									</span>
								</div>
								<div>
									<span>Children x{tickets.children}</span>
									<span className={Styles.price}>
										<span className={Styles.currency}>PKR</span>{tour.price.children}
									</span>
								</div>
							</div>
							<hr />
							<div className={Styles.subTotal}>
								<div className={Styles.totalText}>
									<span className={Styles.Text}>Sub-Total</span>
									<span className={Styles.priceText}>
										PKR {price}
									</span>
								</div>
								<div className={Styles.charges}>
									<span className={Styles.Text}>Conveniance Charges</span>
									<div>
										<span className={Styles.priceText}>
											<Image
												src={require('../../../assets/addition.png')}
												alt="addition sign"
												className={Styles.additionIcon}
											/>
												PKR {convenianceCharges}
										</span>
									</div>
								</div>
							</div>

						</div>
						<div className={Styles.totalAmount}>
							<span>Total Amount</span>
							<span>PKR {price + convenianceCharges}</span>
						</div>
					</div>
				)
			}
		</>
	);
}

export { BillCard };
