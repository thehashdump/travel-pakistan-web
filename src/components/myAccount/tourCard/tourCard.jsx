/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unsafe-optional-chaining */
import React from 'react';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import { Image } from 'react-bootstrap';
import Styles from './tourCard.module.scss';
import axios from '../../../utils/axiosConfig';

function TourCard({ item }) {
	const handleCancel = () => {
		axios.post('cancel-booking', item).then(() => {
			toast.success('Booking Cancelled Successfully');
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		}).catch((err) => {
			toast.error(err.response.data.message);
		});
	};
	return (
		<>
			{
				!item ? (
					<div>Loading...</div>
				) : (
					<div className={Styles.tour}>
						<div className={Styles.tourImage}>
							<Image
								src={item.tour.images[0]}
								alt="Tour"
								className={Styles.image}
							/>
						</div>
						<div className={Styles.tourInfo}>
							<div className={Styles.firstRow}>
								<div className={Styles.requestContent}>
									<span className={Styles.heading}>Name:</span>
									<span className={`${Styles.subheading} ${Styles.name}`}>{item.tour.name}</span>
								</div>
								<div className={Styles.requestContent}>
									<span className={Styles.heading}>Destination:</span>
									<span className={Styles.subheading}>{item.tour.destination}</span>
								</div>
								<div className={Styles.requestContent}>
									<span className={Styles.heading}>Travellers:</span>
									<span
										className={Styles.subheading}
									>
										{parseInt(item.travellers.adults, 10) + parseInt(item.travellers.children, 10)}
									</span>
								</div>
								<div className={Styles.requestContent}>
									<span className={Styles.heading}>Amount:</span>
									<span className={Styles.subheading}>{item.amount}</span>
								</div>
							</div>
							<div className={Styles.firstRow}>
								<div className={Styles.requestContent}>
									<span className={Styles.heading}>Route:</span>
									<span className={Styles.subheading}>
										{
											item.tour.route.map((route, index) => (
												<span key={index}>
													{route}
													{index !== item.tour.route.length - 1 ? ' -> ' : ''}
												</span>
											))
										}
									</span>
								</div>
							</div>
							<div className={Styles.firstRow}>
								<div className={Styles.requestContent}>
									<span className={Styles.heading}>Departure Date: </span>
									<span className={Styles.subheading}>
										{moment(item.tour.departureDate).format('DD MMM YYYY')}
									</span>
								</div>
								<div className={Styles.requestContent}>
									<span className={Styles.heading}>Departure Time:</span>
									<span className={Styles.subheading}>{item.tour.departureTime}</span>
								</div>
								<div className={Styles.requestContent}>
									<span className={Styles.heading}>PickUp Location:</span>
									<span className={Styles.subheading}>{item.pickup}</span>
								</div>
								<div className={Styles.requestContent}>
									<span className={Styles.heading}>Duration:</span>
									<span className={Styles.subheading}>{item.tour.durationDays}</span>
								</div>
							</div>
							<div className={Styles.firstRow}>
								<div className={Styles.requestDesc}>
									<span className={Styles.heading}>Description:</span>
									<div className={Styles.bottom}>
										<span className={`${Styles.subheading} ${Styles.description}`}>
											{item.tour.overview}
										</span>
										{
											item.tour.active ? (
												<button
													type="button"
													className={Styles.cancel}
													onClick= {handleCancel}
												>
													CANCEL
												</button>
											) : null
										}
									</div>
								</div>
							</div>
						</div>
						<ToastContainer
							position="bottom-center"
						/>
					</div>
				)
			}
		</>
	);
}

export { TourCard };
