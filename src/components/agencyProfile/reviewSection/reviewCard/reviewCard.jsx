import moment from 'moment';
import { Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import Styles from './reviewCard.module.scss';

function ReviewCard({ review }) {
	console.log(review);
	return (
		<div className={Styles.mainContainer}>
			<div className={Styles.profile}>
				<Image src={review.user.image}
					className={Styles.profileImg}/>
			</div>
			<div className={Styles.content}>
				<div className={Styles.name}>
					<span className={Styles.name}>{review.user.username.toUpperCase()}</span>
				</div>
				<div className={Styles.rating}>
					{
						[...Array(review.rating)].map(() => (
							<FaStar size={20} className={Styles.starActive} />
						))
					}
				</div>
				<div className={Styles.date}>
					<span className={Styles.date}>{
						moment(review.createdAt).format('MMMM Do YYYY')
					}</span>
				</div>
				<div className={Styles.review}>
					{review.comment}
				</div>
			</div>
		</div>
	);
}

export { ReviewCard };
