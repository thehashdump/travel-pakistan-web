import { Image } from 'react-bootstrap';
import Styles from './agencyCard.module.scss';

function AgencyCard({
	image, tourTitle, agency, duration, hours, description, policy, price
}) {
	return (
		<div className={Styles.card}>
			<div className={Styles.imageContainer}>
				<Image src={require(`../../../assets/card-${image}.png`)} className={Styles.mainImage}/>
			</div>
			<div className={Styles.content}>
				<span className={Styles.heading}>{tourTitle}</span>
				<span className={Styles.agencyName}>by {agency}</span>
				<div className={Styles.details}>
					<div className={Styles.leftContent}>
						<span>{duration}</span>
						<span>{hours}</span>
						<span>{description}</span>
						<div className={Styles.cancellation}>
							<Image src={require('../../../assets/cancellation.png')}/>
							<span>{policy}</span>
						</div>

					</div>
					<div className={Styles.rightContent}>
						<div className={Styles.priceContent}>
							<span>Starting from</span>
							<span className={Styles.price}>PKR {price}</span>
							<span>per adult</span>

						</div>
						<button className={Styles.reserve}><span>Reserve</span></button>

					</div>
				</div>
			</div>
		</div>

	);
}

export { AgencyCard };
