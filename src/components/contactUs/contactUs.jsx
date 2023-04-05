import { Footer } from '../footer';
import { Navbar } from '../navbar';
import Styles from './contactUs.module.scss';

function ContactUs() {
	return (
		<div className={Styles.contactUs}>
			<div className={Styles.top}>
				<Navbar />

			</div>

			<Footer />
		</div>
	);
}

export { ContactUs };
