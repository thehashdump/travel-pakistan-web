import { Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import Styles from './reviewCard.module.scss';

function ReviewCard({
	image, name, date, review
}) {
	return (
		<div className={Styles.mainContainer}>
			<div className={Styles.profile}>
				<Image src={require(`../../../../assets/profile-${image}.jpg`)}
					className={Styles.profileImg}/>
			</div>
			<div className={Styles.content}>
				<div className={Styles.name}>
					<span className={Styles.name}>{name}</span>
				</div>
				<div className={Styles.rating}>
					<FaStar size={20} className={Styles.starActive} />
					<FaStar size={20} className={Styles.starActive} />
					<FaStar size={20} className={Styles.starActive} />
					<FaStar size={20} className={Styles.starActive} />
					<FaStar size={20} className={Styles.starActive} />
				</div>
				<div className={Styles.date}>
					<span className={Styles.date}>{date}</span>
				</div>
				<div className={Styles.review}>
					{review}
				</div>
			</div>
		</div>
	);
}

export { ReviewCard };
