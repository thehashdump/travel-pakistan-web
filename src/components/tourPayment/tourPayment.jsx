/* eslint-disable import/no-extraneous-dependencies */
import { Image } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { BillCard } from '../bookTour/billCard/billCard';
import { InfoCard } from './infoCard/infoCard';
import Styles from './tourPayment.module.scss';
import axios from '../../utils/axiosConfig';

function TourPayment() {
	const location = useLocation();
	const { payment, tour, tickets } = location.state;

	const handlePaymet = () => {
		axios.post('purchase-tour', payment).then(() => {
			toast.success('Tour Purchased Successfully');
			setTimeout(() => {
				window.location.href = '/';
			}, 2000);
		}).catch((err) => {
			console.log(err);
		});
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
						<span>Payment Details</span>
						<div className={Styles.secureMsg}>
							<Image
								src={require('../../assets/lock.png')}
								className={Styles.lock}
								alt="lock"
							/>
							<span className={Styles.encryptionMsg}>
                This form is encrypted and your information is always guaranteed
                secure.
							</span>
						</div>
						<form className={Styles.detailcontainer}>
							<div className={Styles.wrapper}>
								<div>
									<form className={Styles.Radio}>
										<div className={Styles.radioDiv}>
											<input type="radio" name="credit-card" />
											<label>Credit Card</label>
											<Image
												src={require('../../assets/visa.png')}
												className={Styles.cardImage}
												alt="visa"
											/>
											<Image
												src={require('../../assets/mastercard.png')}
												className={Styles.cardImage}
												alt="mastercard"
											/>
											<br />
										</div>
										<div className={Styles.radioDiv}>
											<input type="radio" name="credit-card" />
											<label>Debit Card</label>
											<Image
												src={require('../../assets/visa.png')}
												className={Styles.cardImage}
												alt="visa"
											/>
											<Image
												src={require('../../assets/mastercard.png')}
												className={Styles.cardImage}
												alt="mastercard"
											/>
											<Image
												src={require('../../assets/unionpay.png')}
												className={Styles.cardImage}
												alt="unionpay"
											/>

											<br />
										</div>
									</form>
								</div>

								<div className={Styles.cardDetails}>
									<div className={Styles.cardHolder}>
										<span>
											CardHolder Name<span className={Styles.asterik}>*</span>
										</span>
										<input required />
									</div>

									<div className={Styles.cardNumber}>
										<span>
											Credit/Debit Card Number
											<span className={Styles.asterik}>*</span>
										</span>
										<input required />
									</div>
								</div>
								<div className={Styles.expiryDate}>
									<div className={Styles.left}>
										<span>
											Expiration Date<span className={Styles.asterik}>*</span>
										</span>
										<div className={Styles.Options}>
											<select className={Styles.selectMonth}>
												<option>Month</option>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
												<option>6</option>
												<option>7</option>
												<option>8</option>
												<option>9</option>
												<option>10</option>
												<option>11</option>
												<option>12</option>
											</select>
											<select className={Styles.selectMonth}>
												<option>Year</option>
												<option>2023</option>
												<option>2024</option>
												<option>2025</option>
												<option>2026</option>
												<option>2027</option>
												<option>2028</option>
											</select>

										</div>
									</div>

									<div className={Styles.cvc}>
										<span>CVC Code <span className={Styles.asterik}>*</span></span>
										<input required/>
									</div>
								</div>
								<div className={Styles.countryInfo}>
									<div className={Styles.country}>
										<span>Country<span className={Styles.asterik}>*</span></span>
										<select className={Styles.selectCountry}>
											<option>Pakistan</option>
										</select>
									</div>
									<div className={Styles.country}>
										<span>Zip Code<span className={Styles.asterik}>*</span></span>
										<input required/>
									</div>
								</div>

							</div>
						</form>
						<button
							className={Styles.continue}
							onClick={() => {
								handlePaymet();
							}}
						>Confirm</button>
					</div>
				</div>
				<div className={Styles.bill}>
					<BillCard
						tour={tour}
						tickets={tickets}
					/>
					<InfoCard/>

				</div>
			</div>
			<Footer />
			<ToastContainer
				position="bottom-center"
			/>
		</div>
	);
}

export { TourPayment };
