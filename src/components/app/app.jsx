import { Routes } from 'react-router-dom';
import Styles from './app.module.scss';

function App() {
	return (
		<div>
			<Layout>
				<Routes>
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
