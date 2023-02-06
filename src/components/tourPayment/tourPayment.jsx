import { Image } from 'react-bootstrap';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { BillCard } from '../bookTour/billCard/billCard';
import Styles from './tourPayment.module.scss';

function TourPayment() {
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
						<div className={Styles.detailcontainer}>
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
								<div className={Styles.email}>
									<span>Email Address</span>
									<input type="email" required />
								</div>
								<div className={Styles.cnic}>
									<span>CNIC</span>
									<input required />
								</div>
							</div>
						</div>
						<button className={Styles.continue}>Confirm</button>
					</div>
				</div>
				<div className={Styles.bill}>
					<BillCard />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export { TourPayment };
