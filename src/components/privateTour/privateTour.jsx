import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from '../../utils/axiosConfig';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import Styles from './privateTour.module.scss';

function PrivateTour() {
	const { _id } = JSON.parse(localStorage.getItem('user'));
	const [destination, setDestination] = useState('');
	const [durationDays, setDurationDays] = useState(0);
	const [travelers, setTravelers] = useState(0);
	const [budget, setBudget] = useState(0);
	const [route, setRoute] = useState([]);
	const [departureDate, setDepartureDate] = useState('');
	const [departureTime, setDepartureTime] = useState('');
	const [departureLocation, setDepartureLocation] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmitRequest = () => {
		const data = {
			user: _id,
			destination,
			durationDays,
			travelers,
			budget,
			route,
			departureDate,
			departureTime,
			departureLocation,
			description,
		};
		console.log(data);
		axios.post('create-private-tour', data).then(() => {
			toast.success('Request created successfully');
			setTimeout(() => {
				window.location.href = `/account/${_id}?tab=PrivateTourRequests`;
			}, 4000);
		}).catch((err) => {
			console.log(err);
		});
	};
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
							<input
								type="text"
								placeholder="Enter Destination"
								className={Styles.destination}
								value={destination}
								onChange={(e) => setDestination(e.target.value)}
							/>
						</div>
						<div className={Styles.multipleOptions}>
							<div className={Styles.days}>
								<span className={Styles.heading2}>Estimated Days</span>
								<input
									type="number"
									placeholder="No. of Days"
									className={Styles.daysInput}
									value={durationDays}
									onChange={(e) => setDurationDays(e.target.value)}
								/>
							</div>
							<div className={Styles.lastname}>
								<span className={Styles.heading2}>No. of Travelers</span>
								<input
									type="number"
									placeholder="Number of Travelers"
									className={Styles.lastnameInput}
									value={travelers}
									onChange={(e) => setTravelers(e.target.value)}
								/>
							</div>
							<div className={Styles.budget}>
								<span className={Styles.heading2}>Budget (PKR)</span>
								<input
									type="text"
									placeholder="Enter Amount"
									className={Styles.amount}
									value={budget}
									onChange={(e) => setBudget(e.target.value)}
								/>
							</div>
						</div>

						<div className={Styles.contact}>
							<div className={Styles.name}>
								<span className={Styles.heading4}>Route</span>
								<input
									type="text"
									placeholder="Enter Route (comma separated)"
									className={Styles.route}
									value={route.join(',')}
									onChange={(e) => setRoute(e.target.value.split(','))}
								/>
							</div>
							<div className={Styles.contactInfo}>
								<div className={Styles.number}>
									<span>Departure Date</span>
									<input
										type="date"
										placeholder="Departure Date"
										className={Styles.numberInput}
										value={departureDate}
										onChange={(e) => setDepartureDate(e.target.value)}
									/>
								</div>
								<div className={Styles.email}>
									<span>Departure Time</span>
									<input
										type="time"
										placeholder="Enter Email Address"
										className={Styles.emailInput}
										value={departureTime}
										onChange={(e) => setDepartureTime(e.target.value)}
									/>
								</div>
								<div className={Styles.pickup}>
									<span>PickUp Location</span>
									<input
										type="text"
										placeholder="Enter Pickup Location"
										className={Styles.pickupInput}
										value={departureLocation}
										onChange={(e) => setDepartureLocation(e.target.value)}
									/>
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
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								></textarea>
							</div>
						</div>
						<div className={Styles.submit}>
							<button className={Styles.submitButton}
								onClick={handleSubmitRequest}
							>
								<span className={Styles.submitText}>Request Plan</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<ToastContainer
				position="bottom-center"
			/>
		</div>
	);
}

export { PrivateTour };
