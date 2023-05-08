import moment from 'moment';
import React from 'react';
import Styles from './requestCard.module.scss';

function RequestCard({ pendingRequest }) {
	return (
		<div className={Styles.activeRequests}>
			<div className={Styles.firstRow}>
				<div className={Styles.requestContent}>
					<span className={Styles.heading}>Destination:</span>
					<span className={Styles.subheading}>{pendingRequest.destination}</span>
				</div>
				<div className={Styles.requestContent}>
					<span className={Styles.heading}>Duration:</span>
					<span className={Styles.subheading}>{pendingRequest.durationDays}</span>
				</div>
				<div className={Styles.requestContent}>
					<span className={Styles.heading}>Budget:</span>
					<span className={Styles.subheading}>{pendingRequest.budget}</span>
				</div>
				<div className={Styles.requestContent}>
					<span className={Styles.heading}>No. of Travelers:</span>
					<span className={Styles.subheading}>{pendingRequest.travelers}</span>
				</div>
			</div>
			<div className={Styles.firstRow}>
				<div className={Styles.requestContent}>
					<span className={Styles.heading}>Route:</span>
					<span className={Styles.subheading}>
						{pendingRequest.route.join(' -> ')}
					</span>
				</div>
			</div>
			<div className={Styles.firstRow}>
				<div className={Styles.requestContent}>
					<span className={Styles.heading}>Departure Date: </span>
					<span className={Styles.subheading}>
						{moment(pendingRequest.departureDate).format('DD-MM-YYYY')}
					</span>
				</div>
				<div className={Styles.requestContent}>
					<span className={Styles.heading}>Departure Time:</span>
					<span className={Styles.subheading}>{pendingRequest.departureTime}</span>
				</div>
				<div className={Styles.requestContent}>
					<span className={Styles.heading}>PickUp Location:</span>
					<span className={Styles.subheading}>{pendingRequest.departureLocation}</span>
				</div>
			</div>
			<div className={Styles.firstRow}>
				<div className={Styles.requestDesc}>
					<span className={Styles.heading}>Description:</span>
					<span className={Styles.subheading}>
						{pendingRequest.description}
					</span>
				</div>
			</div>
		</div>
	);
}

export { RequestCard };
