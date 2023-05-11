import { useEffect } from 'react';
import Styles from './sidebar.module.scss';

function Sidebar({ setActiveTab }) {
	const handleActiveTabs = (e) => {
		localStorage.setItem('activeTab', e.target.innerText.toLowerCase());
	};

	useEffect(() => {
		const links = document.querySelectorAll(`.${Styles.link}`);
		if (!localStorage.getItem('activeTab')) {
			links[0].classList.add(`${Styles.active}`);
		}
		links.forEach((link) => {
			link.classList.remove(`${Styles.active}`);
			if (link.innerText.toLowerCase() === localStorage.getItem('activeTab')) {
				link.classList.add(`${Styles.active}`);
			}
		});
	});
	return (
		<div className={Styles.sidebar}>
			<div className={Styles.title}>
				ORGANIZER DASHBOARD
			</div>
			<div className={Styles.container}>
				<div className={Styles.links}>
					<div
						className={`${Styles.link}`}
						onClick = {
							(e) => {
								handleActiveTabs(e);
								setActiveTab('dashboard');
							}
						}
					>
						DASHBOARD
					</div>
					<div
						className={Styles.link}
						onClick = {
							(e) => {
								handleActiveTabs(e);
								setActiveTab('tours');
							}
						}
					>
						TOURS
					</div>
					<div
						className={Styles.link}
						onClick = {
							(e) => {
								handleActiveTabs(e);
								setActiveTab('private tours');
							}
						}
					>
						PRIVATE TOURS
					</div>
					<div
						className={Styles.link}
						onClick = {
							(e) => {
								handleActiveTabs(e);
								setActiveTab('reviews');
							}
						}
					>
						REVIEWS
					</div>
				</div>
				<div className={Styles.logout}
					onClick = {
						() => {
							localStorage.removeItem('user');
							localStorage.removeItem('activeTab');
							window.location.href = '/';
						}
					}
				>
					LOGOUT
				</div>
			</div>
		</div>
	);
}

export { Sidebar };
