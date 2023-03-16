import { Navbar } from '../../navbar';
import { SearchBar } from '../../searchBar';
// import { DestinationCard } from './destinationCard/destinationCard';
import Styles from './heroSection.module.scss';

function HeroSection() {
	return (
		<div className={Styles.heroSection}>
			<div>
				<Navbar />
			</div>
			<div className={Styles.main}>
				<div className={Styles.heading}>
					<span>Leave the world behind,</span>
					<span>let us lead the way.</span>
				</div>
			</div>
			<div className={Styles.searchBarContainer}>
				<SearchBar />
			</div>
		</div>
	);
}

export { HeroSection };
