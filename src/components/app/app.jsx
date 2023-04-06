import { Routes, Route } from 'react-router-dom';
import { Home } from '../home';
import { TourDetails } from '../tourDetails';
import { TourList } from '../tourList';
import { SignIn } from '../signIn';
import { SignUp } from '../SignUp';
import { BookTour } from '../bookTour';
import { TourPayment } from '../tourPayment';
import { MyAccount } from '../myAccount';
import Styles from './app.module.scss';
import { DestinationList } from '../destinationList/destinationList';
import { DestinationDetails } from '../destinationList/destinationDetails';
import { SuggestTour } from '../suggestTour/suggestTour';

function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tours" element={<TourList />} />
					<Route path="/virtual-tour-guide" element={<DestinationList />} />
					<Route path="/virtual-tour-guide/:destination" element={<DestinationDetails />} />
					<Route path="/tour" element={<TourDetails />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/booktour" element={<BookTour />} />
					<Route path="/payment" element={<TourPayment />} />
					<Route path="/suggest-me-a-tour" element={<SuggestTour />} />
					<Route path="/account" element={<MyAccount />} />

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
