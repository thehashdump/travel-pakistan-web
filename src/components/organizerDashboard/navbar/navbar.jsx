import { Image } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import Styles from './navbar.module.scss';

function Navbar({ setActiveTab }) {
	const { id } = useParams();
	const [showBurgerMenue, setShowBurgerMenue] = useState(false);
	const [showDropDownMenue, setShowDropDownMenue] = useState(false);
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

	const [isMobile, setIsMobile] = useState(window.innerWidth < 785);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 785);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			{	!isMobile ? (
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
									src={require('../../../assets/Travel-Pakistan-Logo.png')}
									alt="Logo"
									className={Styles.navbarImage}
								/>
							</div>
							<span className={Styles.name}>Travel Pakistan</span>
						</div>
						<div
							className={Styles.profile}
							onClick={() => {
								setShowDropDownMenue(!showDropDownMenue);
							}}
						>
							<Image
								src={require('../../../assets/profile-1.jpg')}
								alt="Profile"
								className={Styles.profileImage}
							/>
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
								src={require('../../../assets/Travel-Pakistan-Logo.png')}
								alt="Logo"
								className={Styles.logoimg}
								onClick={() => {
									window.location.href = '/';
								}}
							/>
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
								setShowBurgerMenue(false);
								window.location.href = '/';
							}}
						>
							HOME
						</span>
						<span
							className={Styles.link}
							onClick={() => {
								setShowBurgerMenue(false);
								window.location.href = `/organizer-profile/${id}`;
							}}
						>
							PROFILE
						</span>
						<span
							className={Styles.link}
							onClick={() => {
								setShowBurgerMenue(false);
								setActiveTab('dashboard');
							}}
						>
							DASHBOARD
						</span>
						<span
							className={Styles.link}
							onClick={() => {
								setShowBurgerMenue(false);
								setActiveTab('tours');
							}}
						>
							TOURS
						</span>
						<span
							className={Styles.link}
							onClick={() => {
								setShowBurgerMenue(false);
								setActiveTab('private tours');
							}}
						>
							PRIVATE TOURS
						</span>
						<span
							className={Styles.link}
							onClick={() => {
								setShowBurgerMenue(false);
								setActiveTab('reviews');
							}}
						>
							REVIEWS
						</span>
						<span
							className={Styles.link}
							onClick={() => {
								setShowBurgerMenue(false);
								setActiveTab('purchased tickets');
							}}
						>
							PURCHASED TOURS
						</span>
						<button
							className={Styles.button}
							onClick={() => {
								localStorage.removeItem('token');
								window.location.href = '/login';
							} }
						>LOGOUT</button>
					</div>
				</div></>
			)}
			{
				showDropDownMenue && (
					<div
						className={Styles.dropDownMenue}
					>
						<div className={Styles.dropDownMenueLinks}>
							<span
								className={Styles.dropDownMenueLink}
								onClick={() => {
									window.location.href = '/';
								}}
							>HOME</span>
							<span
								className={Styles.dropDownMenueLink}
								onClick={() => {
									window.location.href = `/organizer-profile/${id}`;
								}}
							>PROFILE</span>
						</div>
					</div>
				)
			}
		</>
	);
}

export { Navbar };
