/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import Styles from './myAccount.module.scss';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { PrivateResponse } from './privateResponse';
import axios from '../../utils/axiosConfig';
import { TourCard } from './tourCard';

function MyAccount() {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const tab = urlSearchParams.get('tab');
	const [activeTab, setActiveTab] = useState(tab || 'My Bookings');
	const user = JSON.parse(localStorage.getItem('user'));
	const [bookings, setBookings] = useState([]);
	const [completedTours, setCompletedTours] = useState([]);
	const [pendingRequests, setPendingRequests] = useState([]);
	const [responses, setResponses] = useState([]);

	useEffect(() => {
		axios.get(`purchased-tours/${user._id}`).then((res) => {
			setBookings(res.data.tours.filter((item) => item?.tour.active === true));
			setCompletedTours(res.data.tours.filter((item) => item.tour.active === false));
		}).catch((err) => {
			console.log(err);
		});
	}, [user._id]);

	useEffect(() => {
		axios.get(`private-tours/${user._id}`).then((res) => {
			setPendingRequests(res.data.privateTours.filter((item) => item?.status === 'pending'));
			setResponses(res.data.privateTours.filter((item) => item.bid.length > 0 && item?.status === 'pending'));
		}).catch((err) => {
			console.log(err);
		});
	}, [user._id]);
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};
	return (
		<div className={Styles.myAccount}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.divTop}>
					<span>Welcome, {user.username.toUpperCase()}</span>
				</div>
			</div>
			<div className={Styles.main}>
				<div className={Styles.account}>
					<div className={Styles.accountContent}>
						<div className={Styles.image}>
							<div className={Styles.profileImage}>
								<Image
									src={user.image}
									alt="Profile"
									className={Styles.image}
								/>
							</div>
						</div>
						<div className={Styles.accountInfo}>
							<div className={Styles.details}>
								<div className={Styles.name}>
									<span>{user.username.toUpperCase()}</span>
								</div>
							</div>
							<div className={Styles.stats}>
								<div className={Styles.booking}>
									<span className={Styles.text}>Booking</span>
									<span className={Styles.subtext}>{bookings.length}</span>
								</div>
								<div className={Styles.tours}>
									<span className={Styles.text}>Completed Tours</span>
									<span className={Styles.subtext}>{completedTours.length}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={Styles.container}>
					<div className={Styles.leftSidebar}>
						<ul>
							<li
								className={activeTab === 'My Bookings' ? Styles.active : ''}
								onClick={() => handleTabClick('My Bookings')}
							>
								My Bookings
							</li>
							<li
								className={activeTab === 'History' ? Styles.active : ''}
								onClick={() => handleTabClick('History')}
							>
								Completed Tours
							</li>
							<li
								className={
									activeTab === 'PrivateTourRequests' ? Styles.active : ''
								}
								onClick={() => handleTabClick('PrivateTourRequests')}
							>
								Private Tour Requests
							</li>
						</ul>
					</div>

					<div className={Styles.content}>
						{activeTab === 'My Bookings' && (
							<div className={Styles.bookings}>
								{
									bookings.map((item) => (
										<TourCard key={item._id} item={item} />
									))
								}
							</div>
						)}

						{activeTab === 'PrivateTourRequests' && (
							<div className={Styles.requests}>
								<PrivateResponse
									pendingRequests={pendingRequests}
									responses={responses}
								/>
							</div>
						)}

						{activeTab === 'History' && (
							<div className={Styles.history}>
								{
									completedTours.map((item) => (
										<TourCard key={item._id} item={item} />
									))
								}
							</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export { MyAccount };
