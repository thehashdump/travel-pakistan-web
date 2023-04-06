/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-extraneous-dependencies
import YouTube from 'react-youtube';
import { Image } from 'react-bootstrap';
import { useCallback } from 'react';
import { Navbar } from '../navbar';
import { Footer } from '../footer';
import Styles from './aboutUs.module.scss';

function AboutUs() {
	const videoId = 'gISekI_QWYw';
	const onReady = useCallback((event) => {
		const player = event.target;
		player.setLoop(true);
		player.playVideo();
	}, []);
	return (
		<div className={Styles.aboutUs}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.divTop}>About Us</div>
			</div>
			<div className={Styles.heading}>
				<span>Who Are We</span>
			</div>
			<div className={Styles.content}>
				<div className={Styles.text}>
					<span className={Styles.subtext}>
            Travel Pakistan main aims to promote the tourism industry of
            Pakistan by making the traveling necessities few taps away. We are
            trying to provide the affordable rates for everyone so that everyone
            around the world can avail quality travel experience. Travel
            Pakistan is one-stop solution that connect top travel agencies and
            potential stakeholders with travel lovers around the globe.
            Moreover, we always value our customers and questions them about
            their traveling experience and any suggestions.{' '}
					</span>
				</div>
				<div className={Styles.video}>
					<YouTube
						videoId={videoId}
						opts={{
							playerVars: {
								controls: 0,
							},
						}}
						onReady={onReady}
					/>
				</div>
			</div>
			<div className={Styles.stats}>
				<div className={Styles.founded}>
					<Image src={require('../../assets/founded.png')} sizes={200} />
					<span className={Styles.heading1}>Founded</span>
					<span className={Styles.heading2}>2023</span>
				</div>
				<div className={Styles.destinations}>
					<Image src={require('../../assets/destinations.png')} />
					<span className={Styles.heading1}>Destinations</span>
					<span className={Styles.heading2}>20+</span>
				</div>
				<div className={Styles.organizers}>
					<Image src={require('../../assets/organizers.png')} />
					<span className={Styles.heading1}>Organizers</span>
					<span className={Styles.heading2}>10+</span>
				</div>
			</div>
			<div className={Styles.moto}>
				<div className={Styles.vision}>
					<span className={Styles.heading}>Vision</span>
					<span className={Styles.subText}>
            Make adventure tourism accessible to all
					</span>
					<span className={Styles.desc}>
            Travel Pakistan vision is to democratize adventure tourism, remove
            barriers, and positively impact people and the planet. As our
            Adventure Booking Platform evolves, we strive to make curated travel
            experiences more sustainable and accessible to all, promoting
            diversity and a global mindset for future generations.
					</span>
				</div>
				<div className={Styles.mission}>
					<span className={Styles.heading}>Mission</span>
					<span className={Styles.subText}>
            Enrich the world through adventures
					</span>
					<span className={Styles.desc}>
            Travel Pakistan mission is to help travelers who want to get away
            for multiple days but don’t know where to go, what to see, or how to
            organize their trip. With our Adventure Booking Platform, we offer
            travelers the ability to easily book world-class, organized
            adventures whenever, wherever, and with whomever.
					</span>
				</div>
			</div>
			<div className={Styles.founders}>
				<div className={Styles.founder1}>
					<div className={Styles.profile}></div>
					<div className={Styles.name}>Uzair Khalid</div>
					<div className={Styles.desc}>Co-Founder</div>
				</div>
				<div className={Styles.founder2}>
					<div className={Styles.profile}></div>
					<div className={Styles.name}>Syed Aitezaz Imtiaz</div>
					<div className={Styles.desc}>Co-Founder</div>
				</div>
				<div className={Styles.founder3}>
					<div className={Styles.profile}></div>
					<div className={Styles.name}>Asim Latif</div>
					<div className={Styles.desc}>Co-Founder</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export { AboutUs };
