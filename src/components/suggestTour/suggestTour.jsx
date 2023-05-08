import { useState } from 'react';
import axios from '../../utils/axiosConfig';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import { Card } from './card';
import Styles from './suggestTour.module.scss';

function SuggestTour() {
	const [tour, setTour] = useState({});
	const [showTour, setShowTour] = useState(false);
	const [destination, setDestination] = useState('Hunza');
	const [days, setDays] = useState(1);
	const [budget, setBudget] = useState(15000);

	const handleFetchTour = () => {
		axios.get(`suggest-me-tour?destination=${destination}&days=${days}&budget=${budget}`).then((response) => {
			setTour(response.data.tours[0]);
			console.log(response.data.tours[0]);
			setShowTour(true);
		}).catch((error) => {
			console.log(error);
		});
	};

	return (
		<div className={Styles.tourList}>
			<div className={Styles.top}>
				<Navbar />
				<div
					className={Styles.title}
				>
					Experience Pakistan's vibrant culture on our colorful tours.
				</div>
			</div>
			<div className={Styles.main}>
				<div className={Styles.title}>
					Find Your Dream Destination<br/> Let Us Help You Plan Your Tour
				</div>
				<div className={Styles.bottom}>
					<div className={Styles.left}>
						{
							!showTour ? (
								<form className={Styles.form}>
									<div className={Styles.formItem}>
										<label htmlFor="destination">Preferred Destination</label>
										<input
											type="text"
											className="input"
											name="destination"
											value={destination}
											onChange={(e) => {
												setDestination(e.target.value);
											}}
										/>
									</div>
									<div className={Styles.formItem}>
										<label htmlFor="days">Days</label>
										<input
											type="number"
											className="input"
											name="days"
											min={0}
											max={30}
											value={days}
											onChange={(e) => {
												setDays(e.target.value);
											}}
										/>
									</div>
									<div className={Styles.formItem}>
										<label htmlFor="budget">Budget (Rs)</label>
										<input
											type="number"
											className="input"
											name="budget"
											min={0}
											value={ budget }
											onChange={(e) => {
												setBudget(e.target.value);
											}}
										/>
									</div>
									<div className={Styles.formItem}>
										<div
											className={Styles.submitButton}
											onClick={() => {
												handleFetchTour();
											}}
										>
											Suggest Me A Tour
										</div>
									</div>
								</form>
							) : (
								<>
									{
										tour && (
											<Card
												tour={tour}
											/>
										)
									}
								</>
							)
						}
					</div>
					<div className={Styles.right}>
						<img src={require('../../assets/suggestTour.png')} alt="tour illustration" />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export { SuggestTour };
