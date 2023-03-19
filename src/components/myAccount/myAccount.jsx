import { useState } from 'react';
import Styles from './myAccount.module.scss';
import { Navbar } from '../navbar';
import { Footer } from '../footer';

function MyAccount() {
	const [activeTab, setActiveTab] = useState('Activity Feed');

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};
	return (
		<div className={Styles.myAccount}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.divTop}>
					<span>Welcome, Syed Aitezaz Shah</span>
				</div>
			</div>
			<div className={Styles.main}>
				<div className={Styles.account}>
					<div className={Styles.accountContent}>
						<div className={Styles.image}>

						</div>
						<div className={Styles.accountInfo}>
							<div className={Styles.details}>
								<div className={Styles.name}>
									<span>Syed Aitezaz Imtiaz</span>
								</div>
								<div className={Styles.button}>
									<button className={Styles.edit}>Edit Profile</button>
								</div>
							</div>
							<div className={Styles.stats}>
								<div className={Styles.booking}>
									<span className={Styles.text}>Booking</span>
									<span className={Styles.subtext}>0</span>
								</div>
								<div className={Styles.tours}>
									<span className={Styles.text}>Tours</span>
									<span className={Styles.subtext}>0</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={Styles.container}>
					<div className={Styles.leftSidebar}>
						<ul>
							<li
								className={activeTab === 'Activity Feed' ? Styles.active : ''}
								onClick={() => handleTabClick('Activity Feed')}
							>
                                Activity Feed
							</li>
							<li
								className={activeTab === 'My Bookings' ? Styles.active : ''}
								onClick={() => handleTabClick('My Bookings')}
							>
                                My Bookings
							</li>
							<li
								className={activeTab === 'Private Tour Requests' ? Styles.active : ''}
								onClick={() => handleTabClick('Private Tour Requests')}
							>
                                Private Tour Requests
							</li>
							<li
								className={activeTab === 'History' ? Styles.active : ''}
								onClick={() => handleTabClick('History')}
							>
                                History
							</li>
						</ul>
					</div>

				</div>
			</div>
			<Footer />
		</div>
	);
}

export { MyAccount };
