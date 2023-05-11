/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import axios from '../../../utils/axiosConfig';
import { ReviewCard } from './reviewCard/reviewCard';
import Styles from './reviewSection.module.scss';

function ReviewSection({
	reviews, agency, agencyId, showPostReview
}) {
	const user = JSON.parse(localStorage.getItem('user'));
	const [showMoreReviews, setShowMoreReviews] = useState(false);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');

	const handlePostReview = () => {
		const data = {
			organizer: agencyId,
			user: user._id,
			rating,
			comment,
		};
		console.log(data);
		axios.post('create-review', data).then(() => {
			toast.success('Review posted successfully');
			setRating(0);
			setComment('');
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		}).catch(() => {
			toast.error('Something went wrong');
		});
	};

	const handleViewMoreClick = () => {
		setShowMoreReviews(true);
	};
	const handleRating = (value) => {
		setRating(value);
	};
	return (
		<div className={Styles.mainContainer}>
			<div className={Styles.ratings}>
				<span className={Styles.heading}>
					{
						showPostReview && user ? 'Post a Review' : `What people think about ${agency}?`
					}
				</span>
				<div className={Styles.rating}>
					{
						(showPostReview && user) && (
							<>
								<span className={Styles.point}>{rating || '0'}</span>{' '}
								{
									[...Array(5)].map((star, index) => {
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
									})
								}
							</>
						)
					}
					{/* display the selected rating */}
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
					{
						showPostReview && user && (
							<>
								<textarea
									className={Styles.textArea}
									placeholder="Share your experience with us :)"
									onChange={(e) => setComment(e.target.value)}
								></textarea>
								<div className={Styles.btn}>
									<button
										className={Styles.postBtn}
										onClick={handlePostReview}
									>Post Review</button>
								</div>
								<hr />
							</>
						)
					}
					<div
						className={`${Styles.reviewList} ${
							showMoreReviews ? Styles.scrollable : ''
						}`}
					>
						{
							showMoreReviews === false ? reviews.slice(0, 3).map((review, index) => (
								<ReviewCard
									key={index}
									review={review}
								/>
							)) : reviews.map((review, index) => (
								<ReviewCard
									key={index}
									review={review}
								/>
							))
						}
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
			<ToastContainer
				position="bottom-center"
			/>
		</div>
	);
}

export { ReviewSection };
