import { Image } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import Styles from './navbar.module.scss';

function Navbar() {
	const [showBurgerMenue, setShowBurgerMenue] = useState(false);
	const dropDownMenueRef = useRef(null);
	const navbarRef = useRef(null);
	useEffect(() => {
		if (isMobile) {
			if (showBurgerMenue === false) {
				dropDownMenueRef.current.style.display = 'none';
				navbarRef.current.style.backdropFilter = 'blur(0px)';
			} else {
				dropDownMenueRef.current.style.display = 'block';
				navbarRef.current.style.backdropFilter = 'blur(10px)';
			}
		}
	}, [showBurgerMenue]);

	const [isMobile, setIsMobile] = useState(window.innerWidth < 1150);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1150);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<>
			{!isMobile ? (
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
							>
								Home
							</span>
							<span
								className={Styles.navbarLink}
								onClick={() => {
									window.location.href = '/about';
								}}
							>
								About Us
							</span>
							<span
								className={Styles.navbarLink}
								onClick={() => {
									window.location.href = '/virtual-tour-guide';
								}}
							>
								Virtual Tour Guide
							</span>
							<span
								className={Styles.navbarLink}
								onClick={() => {
									window.location.href = '/contact';
								}}
							>
								Contact Us
							</span>
							<button
								className={Styles.loginButton}
								onClick={() => {
									window.location.href = '/signin';
								}}
							>Sign In</button>
						</div>
					</div>
				</div>
			) : (
				<><div
					className={Styles.mobileNavbar}
					ref={navbarRef}
				>
					<div className={Styles.wrapper}>
						<div className={Styles.logo}>
							<Image
								src={require('../../assets/Travel-Pakistan-Logo.png')}
								alt="Logo"
								className={Styles.logoimg} />
						</div>
						<svg onClick={() => setShowBurgerMenue(!showBurgerMenue)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-list" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
						</svg>
					</div>
				</div><div ref={dropDownMenueRef} id={Styles.linkContainer}>
					<div className={Styles.links}>
						<span
							className={Styles.link}
							onClick={() => {
								window.location.href = '/about';
							}}
						>
							About Us
						</span>
						<span
							className={Styles.link}
							onClick={() => {
								window.location.href = '/virtual-tour-guide';
							}}
						>Virtual Tour Guide</span>
						<span
							className={Styles.link}
							onClick={() => {
								window.location.href = '/contact';
							}}
						>Contact Us</span>
						<button
							className={Styles.button}
							onClick={() => {
								window.location.href = '/signin';
							} }
						>Sign In</button>
					</div>
				</div></>
			)}
		</>
	);
}

export { Navbar };
