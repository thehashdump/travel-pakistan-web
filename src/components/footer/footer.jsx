import { Image } from 'react-bootstrap';
import Styles from './footer.module.scss';

function Footer() {
	return (
		<div className={Styles.footer}>
			<div className={Styles.wrapper}>
				<div className={Styles.name}>
					<div className={Styles.top}>
						<div className={Styles.logo}>
							<Image
								src={require('../../assets/Travel-Pakistan-Logo.png')}
								alt="Travel Pakistan Logo"
							/>
						</div>
						<div className={Styles.title}>
							Travel Pakistan
						</div>
					</div>
					<div className={Styles.bottom}>
						Book your trip in minute, get full
						Control for much longer.
					</div>
				</div>
				<div className={Styles.top}>
					<div className={Styles.company}>
						<div className={Styles.title}>
							Company
						</div>
						<div className={Styles.links}>
							<div className={Styles.link}>
								About Us
							</div>
							<div className={Styles.link}>
								Contact Us
							</div>
						</div>
					</div>
					<div className={Styles.quickAccess}>
						<div className={Styles.title}>
							Quick Access
						</div>
						<div className={Styles.links}>
							<div className={Styles.link}>
								Virtual Tour Guide
							</div>
							<div className={Styles.link}>
								Recommend Me
							</div>
						</div>
					</div>
					<div className={Styles.more}>
						<div className={Styles.title}>
							More
						</div>
						<div className={Styles.links}>
							<div className={Styles.link}>
								Hotel Booking
							</div>
							<div className={Styles.link}>
								Restaurants
							</div>
							<div className={Styles.link}>
								Discussion Forum
							</div>
						</div>
					</div>
					<div className={Styles.socials}>
						<div className={Styles.icons}>
							<div className={Styles.icon}>
								<Image
									src={require('../../assets/facebook.png')}
									alt="Facebook"
								/>
								<Image
									src={require('../../assets/insta.png')}
									alt="Facebook"
								/>
								<Image
									src={require('../../assets/twitter.png')}
									alt="Facebook"
								/>
							</div>
						</div>
						<div className={Styles.content}>
							<div className={Styles.title}>
								Discover our app
							</div>
							<div className={Styles.buttons}>
								<Image
									src={require('../../assets/googlePlay.png')}
									alt="Google Play"
									className={Styles.button}
								/>
								<Image
									src={require('../../assets/apple.png')}
									alt="Apple Store"
									className={Styles.button}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={Styles.copyright}>
				All rights reserved. @Travel Pakistan
			</div>
		</div>
	);
}

export { Footer };
