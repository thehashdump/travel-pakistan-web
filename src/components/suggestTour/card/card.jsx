import { Image } from 'react-bootstrap';
import Styles from './card.module.scss';

function Card({
	image,
	destination,
	days,
	price
}) {
	return (
		<div className={Styles.card}>
			<Image
				src={require(`../../../assets/${image}`)}
				alt={'view image'}
				className={Styles.image}
			/>
			<div className={Styles.content}>
				<div className={Styles.top}>
					<div className={Styles.left}>
						{destination}
					</div>
					<div className={Styles.right}>
						<span className={Styles.price}>{price}</span>
					</div>
				</div>
				<div className={Styles.tripDetails}>
					Tour: {days} days
				</div>
			</div>
		</div>
	);
}

export { Card };
