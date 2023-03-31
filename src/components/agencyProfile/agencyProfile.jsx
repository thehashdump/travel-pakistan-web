import { Navbar } from '../navbar';
import { Footer } from '../footer';
import Styles from './agencyProfile.module.scss';

function AgencyProfile() {
	return (
		<div className={Styles.agencyProfile}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.divTop}>
					<span>Your Travel Partner</span>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export { AgencyProfile };
