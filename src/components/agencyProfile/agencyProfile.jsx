import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { AgencyCard } from './agencyCard/agencyCard';
import { ReviewSection } from './reviewSection/reviewSection';
import Styles from './agencyProfile.module.scss';

function AgencyProfile() {
	const [rating, setRating] = useState(5);

	const handleStarClick = (value) => {
		setRating(value);
	};
	return (
		<div className={Styles.agencyProfile}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.divTop}>
					<span>Your Travel Partner</span>
				</div>
			</div>
			<div className={Styles.main}>
				<div className={Styles.agencyIntro}>
					<span className={Styles.agencyName}>NorthX</span>
					<div className={Styles.services}>
						<div className={Styles.rating}>
							{[...Array(5)].map((star, index) => {
								const value = index + 1;
								return (
									<span
										key={value}
										className={
											value <= rating ? Styles.starActive : Styles.star
										}
										onClick={() => handleStarClick(value)}
									>
										<FaStar size={18} />
									</span>
								);
							})}
							<span className={Styles.starsCount}>(22)</span>
							<span className={Styles.writeReview}>Write a review</span>
						</div>
						<div className={Styles.listDiv}>
							<ul className={Styles.list}>
								<li>Day Trips</li>
								<li>Long Adventures</li>
								<li>Hiking</li>
								<li>Private Tours</li>
								<li>Weekend Trips</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={Styles.images}>
					<div className={Styles.imgContainer1}></div>

					<div className={Styles.imgContainer2}></div>

					<div className={Styles.imgContainer3}></div>

					<div className={Styles.imgContainer4}></div>
				</div>
				<div className={Styles.mainContainer}>
					<div className={Styles.about}>
						<div className={Styles.profileImg}></div>
						<div className={Styles.text}>
							<span className={Styles.heading}>About</span>
							<span className={Styles.intro}>
                We " NorthX " are expert in tourism services and fully
                understand & aware of your travel needs! From just airport
                transfer to Multi - days / Multi-destination packages, from Solo
                travelers to MICE groups, from budget package to exclusive trip,
                from historical Lahore city to Hussiani Bridge Hanza, anywhere,
                everywhere around Pakistan, We are ready to Plan Your Trips.
							</span>
							<div className={Styles.location}>
								<Image src={require('../../assets/location-1.png')} />
								<span>Islamabad, Pakistan</span>
							</div>
						</div>
					</div>
					<div className={Styles.cards}>
						<span class={Styles.heading1}>Tour and Tickets by NorthX</span>
						<AgencyCard
							image="1"
							tourTitle="Top Ten Wonders of Lahore Guided City Tour"
							agency="NorthX"
							duration="Full-Day Trip"
							hours="6+ hours"
							description="Explore, Learn, Shop, eat and enjoy on this
              wonderful guided day tour at Majestic Lahore."
							policy="Free Cancellation"
							price="8,000/-"
						/>
						<AgencyCard
							image="2"
							tourTitle="Top Ten Wonders of Islamabad Guided City Tour"
							agency="NorthX"
							duration="Full-Day Trip"
							hours="6+ hours"
							description="Explore, Learn, Shop, eat and enjoy on this
              wonderful guided day tour at Majestic Lahore."
							policy="Free Cancellation"
							price="13,000/-"
						/>
						<AgencyCard
							image="3"
							tourTitle="Top Ten Wonders of Karachi Guided City Tour"
							agency="NorthX"
							duration="Full-Day Trip"
							hours="6+ hours"
							description="Explore, Learn, Shop, eat and enjoy on this
              wonderful guided day tour at Majestic Lahore."
							policy="Free Cancellation"
							price="16,000/-"
						/>
						<div className={Styles.button}>
							<button className={Styles.more}>
								<span>See more</span>
							</button>
						</div>

					</div>
				</div>
				<ReviewSection/>
			</div>
			<Footer />
		</div>
	);
}

export { AgencyProfile };
