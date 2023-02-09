import { Image } from 'react-bootstrap';
import React from 'react';
import Styles from './infoCard.module.scss';

const information = [
	{
		image: require('../../../assets/wallet.png'),
		alt: 'wallet',
		heading: 'Lowest price guaranteed',
		text: "Find it cheaper? We'll refund the difference",
	},
	{
		image: require('../../../assets/lock.png'),
		alt: 'lock',
		heading: 'Privacy Protection',
		text: 'We use SSL encryption to keep your data secure',
	},
	{
		image: require('../../../assets/headphones.png'),
		alt: 'headphones',
		heading: '24/7 Support',
		text: 'Get the answers you need, when you need them',
	},
	{
		image: require('../../../assets/call.png'),
		alt: 'call',
		heading: 'Give us a call',
		text: 'Give us a call at 0324-4943615',
	},
];
function InfoCard() {
	return (
		<div className={Styles.cardContainer}>
			<div className={Styles.cardContent}>
				<span className={Styles.heading}>Book with Confidence</span>
				<hr />
				<div className={Styles.information}>
					{information.map((info) => (
						<div className={Styles.containerContent} key={info.alt}>
							<Image
								src={info.image}
								className={Styles.cardImage}
								alt={info.alt}
							/>
							<div className={Styles.miniInfo}>
								<span className={Styles.heading}>{info.heading}</span>
								<span className={Styles.text}>
									{info.text.split('\n').map((item, key) => {
										return (
											<React.Fragment key={key}>
												{item}
												<br />
											</React.Fragment>
										);
									})}
								</span>
							</div>
							<br />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export { InfoCard };
