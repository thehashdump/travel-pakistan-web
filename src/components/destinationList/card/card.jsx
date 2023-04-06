import { Image } from 'react-bootstrap';
import Styles from './card.module.scss';

function Card({
	image,
	destination,
	visitors
}) {
	return (
		<div
			className={Styles.card}
			onClick={() => {
				window.location.href = '/virtual-tour-guide/hunza';
			}}
		>
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
				</div>
				<div className={Styles.tripDetails}>
					Tourists Visited: {visitors}
				</div>
			</div>
		</div>
	);
}

export { Card };
