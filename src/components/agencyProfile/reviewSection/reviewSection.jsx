import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ReviewCard } from './reviewCard/reviewCard';
import Styles from './reviewSection.module.scss';

function ReviewSection() {
	const [showMoreReviews, setShowMoreReviews] = useState(false);

	const handleViewMoreClick = () => {
		setShowMoreReviews(true);
	};
	const [rating, setRating] = useState(0);
	const handleRating = (value) => {
		setRating(value);
	};
	return (
		<div className={Styles.mainContainer}>
			<div className={Styles.ratings}>
				<span className={Styles.heading}>Rate NorthX</span>
				<div className={Styles.rating}>
					<span className={Styles.point}>{rating || '0.0'}</span>{' '}
					{/* display the selected rating */}
					{[...Array(5)].map((star, index) => {
						const value = index + 1.0;
						return (
							<FaStar
								key={value}
								size={25}
								className={
									value <= rating ? Styles.starActive : Styles.starInactive
								}
								onClick={() => handleRating(value)}
							/>
						);
					})}
				</div>
				<div className={Styles.ratingParams}>
					<div className={Styles.ratingName}>
						<div className={Styles.excellent}>
							<span className={Styles.point}>Terrible</span>
						</div>
						<div className={Styles.veryGood}>
							<span className={Styles.point}>Poor</span>
						</div>
						<div className={Styles.good}>
							<span className={Styles.point}>Good</span>
						</div>
						<div className={Styles.poor}>
							<span className={Styles.point}>V. Good</span>
						</div>
						<div className={Styles.terrible}>
							<span className={Styles.point}>Excellent</span>
						</div>
					</div>
					<div className={Styles.ratingStars}>
						{[...Array(5)].map((star, index) => {
							const value = index + 1;
							return (
								<div className="starExc" key={value}>
									{[...Array(value)].map((star, index) => (
										<FaStar
											key={index}
											size={20}
											className={Styles.starActive}
										/>
									))}
								</div>
							);
						})}
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
					<div
						className={`${Styles.reviewList} ${
							showMoreReviews ? Styles.scrollable : ''
						}`}
					>
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
						{showMoreReviews && (
							<>
								<ReviewCard
									image="1"
									name="John Doe"
									date="Dec, 2021"
									review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non mauris ac dolor semper bibendum. Etiam lacinia finibus augue, ut bibendum eros luctus eu. Quisque pellentesque ex sit amet ligula hendrerit feugiat."
								/>
								<ReviewCard
									image="2"
									name="Jane Smith"
									date="Nov, 2021"
									review="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed imperdiet augue elit, sed hendrerit nulla elementum quis. Fusce in augue non tellus facilisis rutrum. Nam faucibus accumsan ante, ut pellentesque velit rutrum in. Donec ac est eget diam bibendum aliquet sit amet quis augue."
								/>

							</>
						)}
					</div>
				</div>
				{!showMoreReviews && (
					<div className={Styles.button}>
						<button className={Styles.more} onClick={handleViewMoreClick}>
							<span>View More</span>
						</button>

					</div>
				)}

			</div>
		</div>
	);
}

export { ReviewSection };
