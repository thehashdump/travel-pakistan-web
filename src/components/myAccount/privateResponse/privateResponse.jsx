/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import Styles from './privateResponse.module.scss';

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
				<div className={Styles.createTour}>
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
						<span className={Styles.subheading}>Kumrat valley</span>
					</div>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Duration:</span>
						<span className={Styles.subheading}>5 Days</span>
					</div>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Budget:</span>
						<span className={Styles.subheading}>PKR 67,000</span>
					</div>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>No. of Travelers:</span>
						<span className={Styles.subheading}>2</span>
					</div>
				</div>
				<div className={Styles.firstRow}>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Route:</span>
						<span className={Styles.subheading}>
              Lahore - Islambad - Murree - Kashmir - Kumrat Valley
						</span>
					</div>
				</div>
				<div className={Styles.firstRow}>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Departure Date: </span>
						<span className={Styles.subheading}>7-5-2023</span>
					</div>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>Departure Time:</span>
						<span className={Styles.subheading}>7:00pm</span>
					</div>
					<div className={Styles.requestContent}>
						<span className={Styles.heading}>PickUp Location:</span>
						<span className={Styles.subheading}>Lahore</span>
					</div>
				</div>
				<div className={Styles.firstRow}>
					<div className={Styles.requestDesc}>
						<span className={Styles.heading}>Description:</span>
						<span className={Styles.subheading}>
              The trip should be smooth and free from any hidden charges,
              Transporation vehicle should be neat and clean
						</span>
					</div>
				</div>
			</div>
			<div
				className={`${Styles.responses} ${
					activeTab === 'responses' ? Styles.active : ''
				}`}
			>
        Bye Bye
			</div>
		</div>
	);
}

export { PrivateResponse };
