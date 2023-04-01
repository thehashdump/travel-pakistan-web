import { FaStar } from 'react-icons/fa';
import { ReviewCard } from './reviewCard/reviewCard';
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
					<textarea
						className={Styles.textArea}
						placeholder="Share your experience with us :)"
					></textarea>
					<div className={Styles.btn}>
						<button className={Styles.postBtn}>Post Review</button>
					</div>

					<hr />
					<ReviewCard
						image="1"
						name="Malkova Latina"
						date="Oct, 2022"
						review="A very informative tour of the City of Islamabad,
             and how it came to be the capital of Pakistan.
             We particularly enjoyed the tour of Shah Faisal Masjid,
              and the extra effort our guide went to in
               capturing amazing pictures of us whilst
            there."
					/>
					<ReviewCard
						image="2"
						name="Mr. Raxtin"
						date="Apr, 2022"
						review="A very informative tour of the City of Islamabad,
             and how it came to be the capital of Pakistan.
             We particularly enjoyed the tour of Shah Faisal Masjid,
              and the extra effort our guide went to in
               capturing amazing pictures of us whilst
            there."
					/>
					<ReviewCard
						image="3"
						name="Frank Disk"
						date="Jan, 2022"
						review="A very informative tour of the City of Islamabad,
             and how it came to be the capital of Pakistan.
             We particularly enjoyed the tour of Shah Faisal Masjid,
              and the extra effort our guide went to in
               capturing amazing pictures of us whilst
            there."
					/>
				</div>
				<div className={Styles.button}>
					<button className={Styles.more}>
						<span>View More</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export { ReviewSection };
