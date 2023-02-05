import { Image } from 'react-bootstrap';
import { useState } from 'react';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { BillCard } from './billCard';
import Styles from './bookTour.module.scss';

function BookTour() {
	const [selectedGender, setSelectedGender] = useState(null);

	const handleClick = (gender) => {
		setSelectedGender(gender);
	};
	return (
		<div className={Styles.tourDetails}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.divTop}>
					<span>6 Days Tour to Hunza & Naltar Valley</span>
				</div>
			</div>
			<div className={Styles.main}>
				<div className={Styles.booking}>
					<div className={Styles.bookingcontent}>
						<span>Review Your Booking</span>
						<div className={Styles.tourinfo}>
							<div className={Styles.tourcontent}>
								<span className={Styles.tourtitle}>
                  6 Days Tour to Hunza & Naltar Valley | 23 NOV, 2022
								</span>
								<div className={Styles.tourlocation}>
									<span className={Styles.location}>
										<Image src={require('../../assets/location-1.png')} />
                    Hunza Valley
									</span>
								</div>
								<span className={Styles.agencyname}>
                  By Dream Trip Planners
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
                Enter Traveler Details |{' '}
								<span className={Styles.signin}>SIGN IN</span>
								<span className={Styles.subtext}>to book faster</span>
							</span>
						</div>
						<div className={Styles.detailcontainer}>
							<div className={Styles.wrapper}>
								<span>Passenger: Adult (Primary Contact)</span>
								<div className={Styles.names}>
									<div className={Styles.firstname}>
										<span>First Name</span>
										<input required />
									</div>
									<div className={Styles.lastname}>
										<span>Last Name</span>
										<input required />
									</div>
								</div>
								<div className={Styles.contact}>
									<div className={Styles.gender}>
										<span>Gender</span>
										<div>
											<button
												style={{
													backgroundColor:
                            selectedGender === 'Male' ? '#1E1D4C' : 'white',
													color: selectedGender === 'Male' ? 'white' : '#1E1D4C',
												}}
												onClick={() => handleClick('Male')}
											>
                        Male
											</button>
											<button
												style={{
													backgroundColor:
                            selectedGender === 'Female' ? '#1E1D4C' : 'white',
													color: selectedGender === 'Female' ? 'white' : '#1E1D4C',
												}}
												onClick={() => handleClick('Female')}
											>
                        Female
											</button>
										</div>
									</div>
									<div className={Styles.contactnumber}>
										<span>Contact Number</span>
										<input required />
									</div>
								</div>
								<div className={Styles.email}>
									<span>Email Address</span>
									<input type='email' required/>
								</div>
								<div className={Styles.cnic}>
									<span>CNIC</span>
									<input required/>
								</div>
							</div>
						</div>
						<button className={Styles.continue}>Continue</button>
					</div>
				</div>
				<div className={Styles.bill}>
					<BillCard/>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export { BookTour };
