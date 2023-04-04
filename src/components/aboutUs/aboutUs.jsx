import { Navbar } from '../navbar';
import { Footer } from '../footer';
import Styles from './aboutUs.module.scss';

function AboutUs() {
	return (
		<div className={Styles.aboutUs}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.divTop}>
          About Us
				</div>
			</div>

			<Footer />
		</div>
	);
}

export { AboutUs };
