import { useState } from 'react';
import { CreateTour } from '../createTour';
import { Dashboard } from '../dashboard';
import { Navbar } from '../navbar';
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
							<h1>Private Tours</h1>
						)) || (activeTab === 'reviews' && (
							<h1>Reviews</h1>
						)) || (activeTab === 'chat' && (
							<h1>Chat</h1>
						))
					}
				</div>
			</div>
		</div>
	);
}

export { Home };
