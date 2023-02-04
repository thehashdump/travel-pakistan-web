import { Image } from 'react-bootstrap';
import Styles from './card.module.scss';

function Card({
	organizer,
	destination,
	image,
	price,
	rating,
	tripDetails
}) {
	return (
		<div className={Styles.card}>
			<Image
				src={require(`../../../../assets/${image}`)}
				alt={'view image'}
				className={Styles.image}
			/>
			<div className={Styles.content}>
				<div className={Styles.top}>
					<div>
						{destination || organizer}
					</div>
					<div>
						{price || rating}
					</div>
				</div>
				<div className={Styles.tripDetails}>
					{tripDetails}
				</div>
			</div>
		</div>
	);
}

export { Card };
