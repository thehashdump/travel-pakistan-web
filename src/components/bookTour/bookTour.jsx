/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Image } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { BillCard } from './billCard';
import Styles from './bookTour.module.scss';

function BookTour() {
	const location = useLocation();
	const user = JSON.parse(localStorage.getItem('user'));
	const { tour, tickets, pickup } = location.state;
	const [name, setName] = useState(user ? user.username : '');
	const [contact, setContact] = useState(user ? user.phone : '');
	const [email, setEmail] = useState(user ? user.email : '');
	const [cnic, setCnic] = useState(user ? user.cnic : '');
	const [amount, setAmount] = useState(0);
	const [payment, setPayment] = useState(null);

	useEffect(() => {
		if (user) {
			setPayment({
				tour: tour._id,
				purchasedBy: user._id,
				amount,
				pickup,
				travellers: {
					adults: tickets.adults,
					children: tickets.children,
				},
			});
		} else if (
			name !== '' && contact !== '' && email !== '' && cnic !== '') {
			setPayment({
				tour: tour._id,
				amount,
				pickup,
				travellers: {
					adults: tickets.adults,
					children: tickets.children,
				},
				user: {
					name,
					contact,
					email,
					cnic,
				}
			});
		}
	}, [user, name, contact, email, cnic, amount,
		tour._id, pickup, tickets.adults, tickets.children]);

	return (
		<div className={Styles.tourDetails}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.divTop}>
					{tour.name}
				</div>
			</div>
			<div className={Styles.main}>
				<div className={Styles.booking}>
					<div className={Styles.bookingcontent}>
						<span>Review Your Booking</span>
						<div className={Styles.tourinfo}>
							<div className={Styles.tourcontent}>
								<span className={Styles.tourtitle}>
									{tour.name} | {moment(tour.startDate).format('DD MMM YYYY')}
								</span>
								<div className={Styles.tourlocation}>
									<span className={Styles.location}>
										<Image src={require('../../assets/location-1.png')} />
										{tour.destination}
									</span>
								</div>
								<span className={Styles.agencyname}>
									By {tour.agencyName}
								</span>
							</div>
						</div>
						<div className={Styles.coupan}>
							<div className={Styles.coupancontent}>
								<span>Enter Coupon Code</span>
								<input placeholder="Coupan Code" />
								<button>Apply Now</button>
							</div>
						</div>
						<div className={Styles.detailheading}>
							<span>
								Enter Traveler Details
								{
									!user ? (
										<><span className={Styles.signup}> |{' '}SIGN IN</span>
											<span className={Styles.subtext}>to book faster</span></>
									) : null
								}
							</span>
						</div>
						<div className={Styles.detailcontainer}>
							<div className={Styles.wrapper}>
								<span>Passenger: Adult (Primary Contact)</span>
								<div className={Styles.names}>
									<div className={Styles.firstname}>
										<span>Name</span>
										<input
											required
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
								</div>
								<div className={Styles.contact}>
									<div className={Styles.contactnumber}>
										<span>Contact Number</span>
										<input
											required
											value={contact}
											onChange={(e) => setContact(e.target.value)}
										/>
									</div>
								</div>
								<div className={Styles.email}>
									<span>Email Address</span>
									<input
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className={Styles.cnic}>
									<span>CNIC</span>
									<input
										required
										value={cnic}
										onChange={(e) => setCnic(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<Link
							to={payment ? '/payment' : '#'} state={{ tour, payment, tickets }}
						>
							{
								!payment ? (
									<button className={Styles.continue} disabled>
										Continue
									</button>
								) : (
									<button className={Styles.continue}>Continue</button>
								)
							}
						</Link>
						{
							!payment ? (
								<p>Enter the user details</p>
							) : null
						}
					</div>
				</div>
				<div className={Styles.bill}>
					<BillCard
						tour={tour}
						tickets={tickets}
						setAmount={setAmount}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export { BookTour };
