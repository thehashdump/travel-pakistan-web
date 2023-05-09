/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Navbar } from '../navbar';
import axios from '../../utils/axiosConfig';
import { Footer } from '../footer';
import { AgencyCard } from './agencyCard/agencyCard';
import { ReviewSection } from './reviewSection/reviewSection';
import Styles from './agencyProfile.module.scss';

function AgencyProfile() {
	const { id } = useParams();
	const user = JSON.parse(localStorage.getItem('user'));
	const [agencyData, setAgencyData] = useState([]);
	const [tours, setTours] = useState([]);
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		axios.get(`organizers/${id}`).then((res) => {
			setAgencyData(res.data.organizer);
		}).catch((err) => {
			console.log(err);
		});
	}, [id]);

	useEffect(() => {
		axios.get(`tours/${id}`).then((res) => {
			setTours(res.data.tours);
		}).catch((err) => {
			console.log(err);
		});
	}, [id]);

	useEffect(() => {
		axios.get(`reviews/${id}`).then((res) => {
			setReviews(res.data.reviews);
		}).catch((err) => {
			console.log(err);
		});
	}, [id]);

	return (
		<>
			{
				(!agencyData && !tours) ? (<div>Loading...</div>)
					: (
						<div className={Styles.agencyProfile}>
							<div className={Styles.top}>
								<Navbar />
								<div className={Styles.divTop}>
									{
										user?.organizerId === id
											? <span>HELLOW, {agencyData.name?.toUpperCase()}</span>
											: <span>WELCOME TO {agencyData.name?.toUpperCase()}</span>
									}
								</div>
							</div>
							<div className={Styles.main}>
								<div className={Styles.agencyIntro}>
									<span className={Styles.agencyName}>{agencyData.name?.toUpperCase()}</span>
									<div className={Styles.services}>
										<div className={Styles.listDiv}>
											<ul className={Styles.list}>
												{
													agencyData.specialities?.map((service) => (
														<li key={service}>{service}</li>
													))
												}
											</ul>
										</div>
									</div>
								</div>

								<div className={Styles.images}>
									{
										agencyData.images?.map((image) => (
											<div className={Styles.imgContainer}>
												<Image
													src={image}
													alt="agency image"
													className={Styles.img}
												/>
											</div>
										))
									}
								</div>
								<div className={Styles.mainContainer}>
									<div className={Styles.about}>
										<div className={Styles.imgBox}>
											<div className={Styles.profileImg}>
												<Image
													src={agencyData.displayPicture}
													alt="profile image"
													className={Styles.img}
												/>
											</div>
										</div>
										<div className={Styles.text}>
											<span className={Styles.heading}>About</span>
											<span className={Styles.intro}>
												{agencyData.description}
											</span>
											<div className={Styles.location}>
												<Image src={require('../../assets/location-1.png')} />
												<span>{agencyData.address}</span>
											</div>
										</div>
									</div>
									<div className={Styles.cards}>
										<span className={Styles.heading1}>Tours by {agencyData.name}</span>
										{
											tours?.length === 0 && (
												<span className={Styles.noTours}>No tours available</span>
											)
										}
										{
											tours?.length > 0 && (
												tours?.map((tour) => (
													<AgencyCard
														key={tour._id}
														tour={tour}
														agency={agencyData.name}
														showButton={user?.organizerId !== id}
													/>
												))
											)
										}
									</div>
								</div>
								{
									reviews?.length > 0 && (
										<ReviewSection
											reviews={reviews}
											agency={agencyData.name}
											agencyId={agencyData._id}
											showPostReview={user?.organizerId !== id}
										/>
									)
								}
							</div>
							<Footer />
						</div>
					)
			}
		</>
	);
}

export { AgencyProfile };
