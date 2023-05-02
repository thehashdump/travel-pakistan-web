import Styles from './organizerRegistration.module.scss';
import { RegistrationForm } from './registrationForm/registrationForm';
import { Navbar } from '../navbar';
import { Footer } from '../footer';

function OrganizerRegistration() {
	return (
		<div className={Styles.mainContainer}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.title}>
          Get discovered by millions of travelers - Register Now!
				</div>
			</div>
			<div className={Styles.form}>
				<RegistrationForm />
			</div>
			<Footer />
		</div>
	);
}

export { OrganizerRegistration };
