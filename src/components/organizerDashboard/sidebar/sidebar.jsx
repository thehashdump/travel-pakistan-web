import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from '../../../utils/axiosConfig';
import Styles from './sidebar.module.scss';

function Sidebar({ setActiveTab }) {
	const { id } = useParams();
	const handleActiveTabs = (e) => {
		localStorage.setItem('activeTab', e.target.innerText.toLowerCase());
	};
	const [organizer, setOrganizer] = useState({});

	useEffect(() => {
		axios.get(`organizers/${id}`).then((res) => {
			setOrganizer(res.data.organizer);
		}).catch((err) => {
			console.log(err);
		});
	}, [id]);

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
			<div className={Styles.name}>
				{organizer.name} <br />
				<span className={Styles.tagline}>{organizer.tagline}</span>
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
					<div
						className={Styles.link}
						onClick = {
							(e) => {
								handleActiveTabs(e);
								setActiveTab('purchased tickets');
							}
						}
					>
						PURCHASED TICKETS
					</div>
				</div>
				<div className={Styles.logout}
					onClick = {
						() => {
							localStorage.removeItem('user');
							localStorage.setItem('activeTab', 'dashboard');
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
