/* eslint-disable no-underscore-dangle */
import { Image } from 'react-bootstrap';
import Styles from './card.module.scss';

function Card({
	destination
}) {
	return (
		<>
			{
				destination && (
					<div
						className={Styles.card}
						onClick={() => {
							window.location.href = `/virtual-tour-guide/${destination._id}`;
						}}
					>
						<Image
							src={destination.images[0]}
							alt={'view image'}
							className={Styles.image}
						/>
						<div className={Styles.content}>
							<div className={Styles.top}>
								<div className={Styles.left}>
									{destination.destination}
								</div>
							</div>
							<div className={Styles.tripDetails}>
								Tourists Visited: {destination.touristCount}+
							</div>
						</div>
					</div>
				)
			}
		</>
	);
}

export { Card };
