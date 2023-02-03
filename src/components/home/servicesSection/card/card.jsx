import { Image } from 'react-bootstrap';
import Styles from './card.module.scss';

function Card({ title, description, image }) {
	return (
		<div className={Styles.card}>
			<Image

				src={require(`../../../../assets/servicesSectionCard${image}.png`)}
				alt="icon"
				className={Styles.cardImage}
			/>
			<span className={Styles.title}>{title}</span>
			<p className={Styles.description}>{description}</p>
		</div>
	);
}

export { Card };
