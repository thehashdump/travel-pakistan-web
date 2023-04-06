import { Image } from 'react-bootstrap';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import Styles from './privateTour.module.scss';

function PrivateTour() {
	return (
		<div className={Styles.privateTour}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.title}>Request a Custom Tour</div>
				<div className={Styles.stepContainer}>
					<div className={Styles.step1}>
						<div className={Styles.circle}>
							<Image src={require('../../assets/form.png')} />
						</div>
						<div className={Styles.step1Text}>
							<span>Step 1</span>
						</div>
						<div className={Styles.step1Desc}>
							<span>
                Fill out the tour
								<br />
                request form
							</span>
						</div>
					</div>
					<div className={Styles.step1}>
						<div className={Styles.circle}>
							<Image src={require('../../assets/reply.png')} />
						</div>
						<div className={Styles.step1Text}>
							<span>Step 2</span>
						</div>
						<div className={Styles.step1Desc}>
							<span>
                Organizers will respond
								<br /> to your request
							</span>
						</div>
					</div>
					<div className={Styles.step1}>
						<div className={Styles.circle}>
							<Image src={require('../../assets/card.png')} />
						</div>
						<div className={Styles.step1Text}>
							<span>Step 3</span>
						</div>
						<div className={Styles.step1Desc}>
							<span>
                Get your final plan
								<br /> and book
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className={Styles.requestTour}>
				<div className={Styles.callUs}>
					<div className={Styles.callUsText}>
						<span className={Styles.heading}>Not sure of your plans?</span>
						<br />
						<span className={Styles.subHeading}>
              Plan a tour as per your choice
						</span>
					</div>
					<div className={Styles.callUsButton}>
						<button className={Styles.button}>
							<span className={Styles.buttonText}>Call +92 324-4943615</span>
						</button>
					</div>
				</div>

				<div className={Styles.detailsForm}>
					<div className={Styles.heading}>
						<span className={Styles.Text}>Share Details</span>
						<span className={Styles.subText}>
              Let our experts build a tour for you
						</span>
					</div>
					<div className={Styles.forum}>
						<div className={Styles.options}>
							<span className={Styles.optHeading}>Where you want to go?</span>
							<select className={Styles.select}>
								<option value="1">Select Destination</option>
								<option value="2">Gilgit Baltistan</option>
								<option value="3">Karachi</option>
								<option value="4">Gawadar</option>
								<option value="5">Skardu</option>
								<option value="6">Lahore</option>
								<option value="7">Naran Kaghan</option>
								<option value="8">Swat</option>
								<option value="9">Murree</option>
								<option value="10">Islamabad</option>
								<option value="11">Peshawar</option>
								<option value="12">Multan</option>
								<option value="13">Quetta</option>
								<option value="14">Azad Kashmir</option>
								<option value="15">Other</option>
							</select>
						</div>
						<div className={Styles.multipleOptions}>
							<div className={Styles.specify}>
								<span className={Styles.heading1}>If other (specify)</span>
								<input
									type="text"
									placeholder="Enter Destination"
									className={Styles.destination}
								/>
							</div>
							<div className={Styles.days}>
								<span className={Styles.heading2}>Estimated Days</span>
								<input
									type="number"
									placeholder="No. of Days"
									className={Styles.daysInput}
								/>
							</div>
							<div className={Styles.budget}>
								<span className={Styles.heading3}>Budget (PKR)</span>
								<input
									type="text"
									placeholder="Enter Amount"
									className={Styles.amount}
								/>
							</div>
						</div>

						<div className={Styles.contact}>
							{/* <span className={Styles.heading4}>Additional Details</span> */}
							<div className={Styles.name}>
								<div className={Styles.firstname}>
									<span>Route</span>
									<input
										type="text"
										placeholder="Specify your trip route"
										className={Styles.firstnameInput}
									/>
								</div>
								<div className={Styles.lastname}>
									<span>No. of Travelers</span>
									<input
										type="number"
										placeholder="Number of Travelers"
										className={Styles.lastnameInput}
									/>
								</div>
							</div>
							<div className={Styles.contactInfo}>
								<div className={Styles.number}>
									<span>Departure Date</span>
									<input
										type="date"
										placeholder="Departure Date"
										className={Styles.numberInput}
									/>
								</div>
								<div className={Styles.email}>
									<span>Departure Time</span>
									<input
										type="time"
										placeholder="Enter Email Address"
										className={Styles.emailInput}
									/>
								</div>
								<div className={Styles.pickup}>
									<span>PickUp Location</span>
									<select className={Styles.select}>
										<option value="1">Select Pickup</option>
										<option value="2">Karachi</option>
										<option value="3">Lahore</option>
										<option value="4">Islamabad</option>
										<option value="5">Multan</option>
										<option value="6">Peshawar</option>

									</select>
								</div>
							</div>
							<div className={Styles.requirements}>
								<span className={Styles.heading5}>
									{' '}
                  Additional Requirements
								</span>
								<textarea
									className={Styles.textarea}
									placeholder="Share More Details"
								></textarea>
							</div>
						</div>
						<div className={Styles.submit}>
							<button className={Styles.submitButton}>
								<span className={Styles.submitText}>Request Plan</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export { PrivateTour };
