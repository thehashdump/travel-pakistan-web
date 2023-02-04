import { Footer } from '../footer';
import { Navbar } from '../navbar';
import { SearchBar } from '../searchBar';
import Styles from './tourList.module.scss';

function TourList() {
	return (
		<div className={Styles.tourList}>
			<div className={Styles.top}>
				<Navbar />
				<SearchBar />
			</div>
			<div className={Styles.main}>
				<div className={Styles.filterBox}>
					<div className={Styles.top}>
						<span>Destination: 14 places found</span>
						<span>Filter By:</span>
					</div>
					<div className={Styles.middle}>
						<span>Price Range</span>
						<div className={Styles.range}>
							<input type="range" min="0" max="100" />
							<div className={Styles.rangeInfo}>
								<span>PKR 0</span>
								<span>PKR 2,00,000</span>
							</div>
						</div>
					</div>
					<div className={Styles.bottom}>
						<span>Duration</span>
						<div className={Styles.checkBox}>
							<input name="action" type="radio" />
							<span>Less than 6 hours</span>
						</div>
						<div className={Styles.checkBox}>
							<input name="action" type="radio" />
							<span>12 to 18 hours</span>
						</div>
						<div className={Styles.checkBox}>
							<input name="action" type="radio" />
							<span>24-48 hours</span>
						</div>
						<div className={Styles.checkBox}>
							<input name="action" type="radio"/>
							<span>More than 48 hours</span>
						</div>
						<button className={Styles.resetButton}>Reset Filters</button>
					</div>
				</div>
				<div className={Styles.list}>
					Tour list comes here
				</div>
			</div>
			<Footer />
		</div>
	);
}

export { TourList };
