/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import Styles from './privateResponse.module.scss';
import { RequestCard } from './requestCard';
import { TourResponse } from './tourResponse';

function PrivateResponse({ pendingRequests, responses }) {
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
				{
					pendingRequests.map((item) => (
						<RequestCard
							key={item._id}
							pendingRequest={item}
						/>
					))
				}
			</div>
			<div
				className={`${Styles.responses} ${
					activeTab === 'responses' ? Styles.active : ''
				}`}
			>
				<TourResponse responses={responses}/>
			</div>
		</div>
	);
}

export { PrivateResponse };
