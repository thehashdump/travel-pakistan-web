// import { Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import Styles from './reviewSection.module.scss';

function ReviewSection() {
	return (
		<div className={Styles.mainContainer}>
			<div className={Styles.ratings}>
				<span className={Styles.heading}>Reviews</span>
				<div className={Styles.rating}>
					<span className={Styles.point}>5.0</span>
					<FaStar size={30} className={Styles.starActive} />
					<FaStar size={30} className={Styles.starActive} />
					<FaStar size={30} className={Styles.starActive} />

					<FaStar size={30} className={Styles.starActive} />
					<FaStar size={30} className={Styles.starActive} />
					<span className={Styles.count}>(22)</span>
				</div>
				<div className={Styles.ratingParams}>
					<div className={Styles.ratingName}>
						<div className={Styles.excellent}>
							<span className={Styles.point}>Excellent</span>
						</div>
						<div className={Styles.veryGood}>
							<span className={Styles.point}>V.Good</span>
						</div>
						<div className={Styles.good}>
							<span className={Styles.point}>Good</span>
						</div>
						<div className={Styles.poor}>
							<span className={Styles.point}>Poor</span>
						</div>
						<div className={Styles.terrible}>
							<span className={Styles.point}>Terrible</span>
						</div>
					</div>
					<div className={Styles.ratingStars}>
						<div className="starExc">
							<FaStar size={20} className={Styles.starActive} />
							<FaStar size={20} className={Styles.starActive} />
							<FaStar size={20} className={Styles.starActive} />
							<FaStar size={20} className={Styles.starActive} />
							<FaStar size={20} className={Styles.starActive} />
						</div>
						<div className="starExc">
							<FaStar size={20} className={Styles.starActive} />
							<FaStar size={20} className={Styles.starActive} />
							<FaStar size={20} className={Styles.starActive} />
							<FaStar size={20} className={Styles.starActive} />

						</div>
						<div className="starExc">
							<FaStar size={20} className={Styles.starActive} />
							<FaStar size={20} className={Styles.starActive} />
							<FaStar size={20} className={Styles.starActive} />

						</div>
						<div className="starExc">
							<FaStar size={20} className={Styles.starActive} />
							<FaStar size={20} className={Styles.starActive} />

						</div>
						<div className="starExc">
							<FaStar size={20} className={Styles.starActive} />
						</div>
					</div>
				</div>
			</div>
			<div className={Styles.reviews}>
				<div className={Styles.postReview}>
					<textarea className={Styles.textArea} placeholder='Share your experience with us :)'></textarea>
					<button className={Styles.postBtn}>Post Review</button>
					<hr/>
				</div>
			</div>
		</div>
	);
}

export { ReviewSection };
