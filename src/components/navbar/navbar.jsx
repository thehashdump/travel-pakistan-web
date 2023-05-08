/* eslint-disable no-underscore-dangle */
import { Image } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import Styles from './navbar.module.scss';

function Navbar() {
	const user = JSON.parse(localStorage.getItem('user'));
	const [showProfile,] = useState(!!user);
	const [showBurgerMenue, setShowBurgerMenue] = useState(false);
	const [showProfileDropDown, setShowProfileDropDown] = useState(false);
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
				<>
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
									HOME
								</span>
								<span
									className={Styles.navbarLink}
									onClick={() => {
										window.location.href = '/about';
									}}
								>
									ABOUT
								</span>
								<span
									className={Styles.navbarLink}
									onClick={() => {
										window.location.href = '/virtual-tour-guide';
									}}
								>
									VIRTUAL TOUR GUIDE
								</span>
								<span
									className={Styles.navbarLink}
									onClick={() => {
										window.location.href = '/contact';
									}}
								>
									CONTACT
								</span>
								{
									!showProfile ? (
										<button
											className={Styles.loginButton}
											onClick={() => {
												window.location.href = '/signin';
											}}
										>SIGN IN</button>
									) : (
										<div
											className={Styles.profile}
											onClick={() => {
												setShowProfileDropDown(!showProfileDropDown);
											}}
										>
											<Image
												src={user.image}
												alt="Profile"
												className={Styles.profileImage}
											/>
										</div>
									)
								}
							</div>

						</div>
					</div>
					{
						showProfileDropDown && (
							<div className={Styles.profileDropDown}>
								<span
									className={Styles.profileDropDownLink}
									onClick={() => {
										window.location.href = `/account/${user._id}`;
									}}
								>
									PROFILE
								</span>
								{
									user.role === 'organizer' ? (
										<span
											className={Styles.profileDropDownLink}
											onClick={() => {
												window.location.href = `/dashboard/${user.organizerId}`;
											}}
										>
											DASHBOARD
										</span>
									) : (
										<span
											className={Styles.profileDropDownLink}
											onClick={() => {
												window.location.href = '/organizer-registration';
											}}
										>
											CREATE AGENCY
										</span>
									)
								}
								<span
									className={Styles.profileDropDownLink}
									onClick={() => {
										window.location.href = '/suggest-me-a-tour';
									}}
								>
									SUGGEST ME TOUR
								</span>
								<span
									className={Styles.profileDropDownLink}
									onClick={() => {
										window.location.href = '/private-tour-request';
									}}
								>
									PRIVATE TOUR
								</span>
								<span
									className={Styles.profileDropDownLink}
									onClick={() => {
										localStorage.removeItem('user');
										window.location.href = '/';
									}}
								>
									LOGOUT
								</span>
							</div>
						)
					}
				</>
			) : (
				<>
					<div
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
									window.location.href = '/';
								}}
							>
								HOME
							</span>
							<span
								className={Styles.link}
								onClick={() => {
									window.location.href = '/about';
								}}
							>
								ABOUT US
							</span>
							<span
								className={Styles.link}
								onClick={() => {
									window.location.href = '/virtual-tour-guide';
								}}
							>VIRTUAL TOUR GUIDE</span>
							<span
								className={Styles.link}
								onClick={() => {
									window.location.href = '/contact';
								}}
							>CONTACT US</span>
							{
								!showProfile ? (
									<button
										className={Styles.button}
										onClick={() => {
											window.location.href = '/signin';
										} }
									>SIGN IN</button>
								) : (
									<>
										{
											user.role === 'organizer' && (
												<>
													<span
														className={Styles.link}
														onClick={() => {
															window.location.href = `/account/${user._id}`;
														}}
													>PROFILE</span>
													<span
														className={Styles.link}
														onClick={() => {
															window.location.href = `/dashboard/${user.organizerId}`;
														}}
													>
														DASHBOARD
													</span>
													<span
														className={Styles.link}
														onClick={() => {
															window.location.href = '/suggest-me-a-tour';
														}}
													>SUGGEST ME TOUR</span>
													<span
														className={Styles.link}
														onClick={() => {
															window.location.href = '/';
														}}
													>PRIVATE TOUR</span>
												</>
											)
										}
										<span
											className={Styles.link}
											onClick={() => {
												localStorage.removeItem('user');
												window.location.href = '/';
											}}
										>
											LOGOUT
										</span>
									</>
								)
							}
						</div>
					</div>
				</>
			)}
		</>
	);
}

export { Navbar };
