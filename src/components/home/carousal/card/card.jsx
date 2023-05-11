import { Image } from 'react-bootstrap';
import Styles from './card.module.scss';

function Card({
	id,
	organizer,
	destination,
	image,
	price,
	rating,
	tripDetails
}) {
	return (
		<div
			className={Styles.card}
			onClick={() => {
				// eslint-disable-next-line no-unused-expressions
				destination
					? (window.location.href = `/tours/${id}`)
					: window.location.href = `/organizer-profile/${id}`;
			}}
		>
			<Image
				src= {image}
				alt={'view image'}
				className={Styles.image}
			/>
			<div className={Styles.content}>
				<div className={Styles.top}>
					<div className={Styles.left}>
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
