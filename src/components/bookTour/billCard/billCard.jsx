import { Image } from 'react-bootstrap';
import Styles from './billCard.module.scss';

function BillCard() {
	return (
		<div className={Styles.cardContainer}>
			<div className={Styles.cardContent}>
				<div className={Styles.tourInfo}>
					<div className={Styles.Image}></div>
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
              6 Days Tour to Hunza &<br /> Naltar Valley
						</span>
						<div className={Styles.tourlocation}>
							<span className={Styles.location}>
								<Image src={require('../../../assets/location-1.png')} />
                Hunza Valley
							</span>
						</div>
						<span className={Styles.agencyname}>By Dream Trip Planners</span>
					</div>
				</div>
				<hr />
				<div className={Styles.fareSummary}>
					<span>Fare Summary</span>
					<div>
						<span>Standard Package x1</span>
						<span className={Styles.price}>
							<span className={Styles.currency}>PKR</span>27,000
						</span>
					</div>
				</div>
				<hr />
				<div className={Styles.subTotal}>
					<div className={Styles.totalText}>
						<span className={Styles.Text}>Sub-Total</span>
						<span className={Styles.priceText}>PKR 27,000</span>
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
              PKR 270
							</span>
						</div>
					</div>
				</div>

			</div>
			<div className={Styles.totalAmount}>
				<span>Total Amount</span>
				<span>PKR 27,270</span>
			</div>
		</div>
	);
}

export { BillCard };
