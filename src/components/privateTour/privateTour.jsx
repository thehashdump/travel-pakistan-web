import { Image } from 'react-bootstrap';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import Styles from './privateTour.module.scss';

function PrivateTour() {
	return (
		<div className={Styles.privateTour}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.title}>Request a Custom Tour</div>
				<div className={Styles.stepContainer}>
					<div className={Styles.step1}>
						<div className={Styles.circle}>
							<Image src={require('../../assets/form.png')} />
						</div>
						<div className={Styles.step1Text}>
							<span>Step 1</span>
						</div>
						<div className={Styles.step1Desc}>
							<span>Fill out the tour<br/>
                            request form</span>
						</div>
					</div>
					<div className={Styles.step1}>
						<div className={Styles.circle}>
							<Image src={require('../../assets/reply.png')} />
						</div>
						<div className={Styles.step1Text}>
							<span>Step 2</span>
						</div>
						<div className={Styles.step1Desc}>
							<span>Organizers will respond<br/> to your request</span>
						</div>
					</div>
					<div className={Styles.step1}>
						<div className={Styles.circle}>
							<Image src={require('../../assets/card.png')} />
						</div>
						<div className={Styles.step1Text}>
							<span>Step 3</span>
						</div>
						<div className={Styles.step1Desc}>
							<span>Get your final plan<br/> and book</span>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export { PrivateTour };
