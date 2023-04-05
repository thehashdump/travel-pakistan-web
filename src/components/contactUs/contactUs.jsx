import { Image } from 'react-bootstrap';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import Styles from './contactUs.module.scss';

function ContactUs() {
	return (
		<div className={Styles.contactUs}>
			<div className={Styles.top}>
				<Navbar />
			</div>
			<div className={Styles.contactForm}>
				<div className={Styles.form}>
					<span className={Styles.heading}>Get In Touch</span>
					<span className={Styles.subHeading}>
            We are here for you! How can we help?
					</span>
					<div className={Styles.input}>
						<input className={Styles.name} placeholder="Enter your name" />
						<input
							className={Styles.email}
							placeholder="Enter your email address"
						/>
						<input
							className={Styles.contact}
							placeholder="Enter your Contact Number"
						/>
						<textarea
							className={Styles.message}
							placeholder="Go ahead! We are listening..."
						/>
					</div>
					<button className={Styles.submit}>Submit</button>
				</div>
				<div className={Styles.location}>
					<div className={Styles.vectorImage}></div>
					<div className={Styles.locationDetails}>
						<div className={Styles.address}>
							<Image src={require('../../assets/locationMarker.png')} />
							<span>NUST, ISLAMABAD</span>
						</div>
						<div className={Styles.call}>
							<Image src={require('../../assets/contact1.png')} />
							<span>+92-324-4943615</span>
						</div>
						<div className={Styles.emailMsg}>
							<Image src={require('../../assets/email.png')} />
							<span>travel.pak@gmail.com</span>
						</div>
					</div>
				</div>
			</div>

			<Footer className={Styles.footer} />
		</div>
	);
}

export { ContactUs };
