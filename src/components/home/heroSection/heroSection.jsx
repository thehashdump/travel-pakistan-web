import { Navbar } from '../../navbar';
import { SearchBar } from '../../searchBar';
import { DestinationCard } from './destinationCard/destinationCard';
import Styles from './heroSection.module.scss';

function HeroSection() {
	return (
		<div className={Styles.heroSection}>
			<Navbar />
			<div className={Styles.main}>
				<div className={Styles.top}>
					<span>MOUNTAINS | </span>
					<span>PLAINS | </span>
					<span>BEACHES</span>
				</div>
				<div className={Styles.heading}>
					<span>Spend your vacation</span>
					<span>with our activites</span>
				</div>
				<div className={Styles.bottom}>
					<span>Most Popular</span>
					<div className={Styles.cards}>
						<DestinationCard />
						<DestinationCard />
						<DestinationCard />
					</div>
				</div>
			</div>
			<div className={Styles.searchBarContainer}>
				<SearchBar />
			</div>
		</div>
	);
}

export { HeroSection };
