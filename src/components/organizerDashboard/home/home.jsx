import { useState } from 'react';
import { CreateTour } from '../createTour';
import { Dashboard } from '../dashboard';
import { Navbar } from '../navbar';
import { PrivateTours } from '../privateTours/privateTours';
import { PurchasedTickets } from '../purchasedTickets';
import { Reviews } from '../reviews';
import { Sidebar } from '../sidebar';
import { Tours } from '../tours';
import Styles from './home.module.scss';

function Home() {
	const tab = localStorage.getItem('activeTab');
	const [activeTab, setActiveTab] = useState(tab || 'dashboard');
	return (
		<div className={Styles.home}>
			<Navbar setActiveTab={setActiveTab}/>
			<div className={Styles.content}>
				<div className={Styles.sidebar} >
					<Sidebar setActiveTab={setActiveTab} />
				</div>
				<div className={Styles.mainContent}>
					{
						(activeTab === 'dashboard' && (
							<Dashboard />
						)) || (activeTab === 'tours' && (
							<Tours setActiveTab={setActiveTab} />
						)) || (activeTab === 'create tour' && (
							<CreateTour />
						)) || (activeTab === 'private tours' && (
							<PrivateTours />
						)) || (activeTab === 'reviews' && (
							<Reviews />
						)) || (activeTab === 'purchased tickets' && (
							<PurchasedTickets />
						))
					}
				</div>
			</div>
		</div>
	);
}

export { Home };
