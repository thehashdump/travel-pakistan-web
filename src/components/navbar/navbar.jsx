import { Image } from 'react-bootstrap';
import Styles from './navbar.module.scss';

function Navbar() {
	return (
		<div className={Styles.navbar}>
			<div className={Styles.navbarContainer}>
				<div
					className={Styles.logo}
					onClick={() => {
						window.location.href = '/';
					}}
				>
					<div className={Styles.navbarLogo}>
						<Image
							src={require('../../assets/Travel-Pakistan-Logo.png')}
							alt="Logo"
							className={Styles.navbarImage}
						/>
					</div>
					<span className={Styles.name}>Travel Pakistan</span>
				</div>
				<div className={Styles.navbarLinks}>
					<span
						className={Styles.navbarLink}
						onClick={() => {
							window.location.href = '/';
						}}
					>Home</span>
					<span className={Styles.navbarLink}>About Us</span>
					<span className={Styles.navbarLink}>Virtual Tour Guide</span>
					<span className={Styles.navbarLink}>Contact Us</span>
					<button
						className={Styles.loginButton}
						onClick={() => {
							window.location.href = '/signin';
						}}
					>Sign In</button>
				</div>
			</div>
		</div>
	);
}

export { Navbar };
