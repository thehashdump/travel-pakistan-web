// import { Footer } from '../footer';
import { Navbar } from '../navbar';
import Styles from './travelDetails.module.scss';

function TravelDetails() {
	return (
		<div className={Styles.tourDetails}>
			<div className={Styles.top}>
				<Navbar />
				<div>
					<span>6 Days Tour to Hunza & Naltar Valley</span>
				</div>
			</div>
			<div className={Styles.main}>
				<div className={Styles.booking}>

				</div>
				<div className={Styles.bill}>

				</div>
			</div>
		</div>
	);
}

export { TravelDetails };
