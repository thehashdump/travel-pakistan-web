/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import Styles from './privateResponse.module.scss';
import { TourResponse } from './tourResponse';

const content = {
	destination: 'Kumrat valley',
	duration: '5 Days',
	budget: 'PKR 67,000',
	num_travelers: 2,
	route: 'Lahore - Islamabad - Murree - Kashmir - Kumrat Valley',
	departure_date: '7-5-2023',
	departure_time: '7:00pm',
	pickup_location: 'Lahore',
	description:
    'The trip should be smooth and free from any hidden charges. Transportation vehicle should be neat and clean.'
};

function PrivateResponse() {
	const [activeTab, setActiveTab] = useState('activeRequests');

	function handleTabClick(tab) {
		setActiveTab(tab);
	}

	return (
		<div className={Styles.mainContainer}>
			<div className={Styles.tabsContainer}>
				<div className={Styles.tabs}>
					<div
						className={activeTab === 'activeRequests' ? Styles.activeTab : ''}
						onClick={() => handleTabClick('activeRequests')}
					>
            Active Requests
					</div>
					<div
						className={activeTab === 'responses' ? Styles.activeTab : ''}
						onClick={() => handleTabClick('responses')}
					>
            Responses
					</div>
				</div>
				<div className={Styles.createTour}
					onClick={() => {
						window.location.href = '/private-tour-request';
					}}>
					<span>+</span> Create Request
				</div>
			</div>
			<div
				className={`${Styles.activeRequests} ${
					activeTab === 'activeRequests' ? Styles.active : ''
				}`}
			>
				<div className={Styles.firstRow}>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Destination:</span>
						<span className={Styles.subheading}>{content.destination}</span>
					</div>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Duration:</span>
						<span className={Styles.subheading}>{content.duration}</span>
					</div>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Budget:</span>
						<span className={Styles.subheading}>{content.budget}</span>
					</div>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>No. of Travelers:</span>
						<span className={Styles.subheading}>{content.num_travelers}</span>
					</div>
				</div>
				<div className={Styles.firstRow}>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Route:</span>
						<span className={Styles.subheading}>
							{content.route}
						</span>
					</div>
				</div>
				<div className={Styles.firstRow}>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Departure Date: </span>
						<span className={Styles.subheading}>{content.departure_date}</span>
					</div>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Departure Time:</span>
						<span className={Styles.subheading}>{content.departure_time}</span>
					</div>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>PickUp Location:</span>
						<span className={Styles.subheading}>{content.pickup_location}</span>
					</div>
				</div>
				<div className={Styles.firstRow}>
					<div className={Styles.requestDesc}>
						<span className={Styles.heading}>Description:</span>
						<span className={Styles.subheading}>
							{content.description}
						</span>
					</div>
				</div>
			</div>
			<div
				className={`${Styles.responses} ${
					activeTab === 'responses' ? Styles.active : ''
				}`}
			>
				<TourResponse/>
			</div>
		</div>
	);
}

export { PrivateResponse };
