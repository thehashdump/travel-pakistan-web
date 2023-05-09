import { Routes, Route } from 'react-router-dom';
import { Home } from '../home';
import { Home as Dashboard } from '../organizerDashboard/home';
import { TourDetails } from '../tourDetails';
import { TourList } from '../tourList';
import { SignIn } from '../signIn';
import { SignUp } from '../SignUp';
import { BookTour } from '../bookTour';
import { TourPayment } from '../tourPayment';
import { MyAccount } from '../myAccount';
import { AgencyProfile } from '../agencyProfile';
import Styles from './app.module.scss';
import { DestinationList } from '../destinationList/destinationList';
import { DestinationDetails } from '../destinationList/destinationDetails';
import { SuggestTour } from '../suggestTour/suggestTour';
import { PrivateTour } from '../privateTour/privateTour';
import { AboutUs } from '../aboutUs';
import { ContactUs } from '../contactUs';
import { OrganizerRegistration } from '../organizerRegistration';

function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tours" element={<TourList />} />
					<Route path="/virtual-tour-guide" element={<DestinationList />} />
					<Route
						path="/virtual-tour-guide/:id"
						element={<DestinationDetails />}
					/>
					<Route path="/tours/:id" element={<TourDetails />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/booktour" element={<BookTour />} />
					<Route path="/payment" element={<TourPayment />} />
					<Route path="/suggest-me-a-tour" element={<SuggestTour />} />
					<Route path="/account/:id" element={<MyAccount />} />
					<Route path="/organizer-profile/:id" element={<AgencyProfile />} />
					<Route path="/private-tour-request" element={<PrivateTour />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/contact" element={<ContactUs />} />
					<Route path="/dashboard/:id" element={<Dashboard />} />
					<Route path="/organizer-registration" element={<OrganizerRegistration />} />
				</Routes>
			</Layout>
		</div>
	);
}

const Layout = ({ children }) => (
	<div className={Styles.mainContainer}>
		<div className={Styles.contentContainer}>
			{children}
		</div>
	</div>
);

export { App };
