import { Routes, Route } from 'react-router-dom';
import { Home } from '../home';
import { TourList } from '../tourList';
import { SignIn } from '../signIn';
import { SignUp } from '../signUp';
import { TravelDetails } from '../travelDetails';
import Styles from './app.module.scss';

function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tours" element={<TourList />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/details" element={<TravelDetails />} />

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
