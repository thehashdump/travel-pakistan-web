import { useEffect, useState } from 'react';
import axios from '../../utils/axiosConfig';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import { Card } from './card/card';
import Styles from './destinationList.module.scss';

function DestinationList() {
	const [destinations, setDestinations] = useState([]);

	useEffect(() => {
		axios.get('all-destinations').then((res) => {
			setDestinations(res.data.destinations);
			console.log(res.data.destinations);
		}).catch((err) => {
			console.log(err);
		});
	}, []);
	return (
		<>
			{
				!destinations ? (
					<div>
						Loading...
					</div>
				) : (
					<div className={Styles.tourList}>
						<div className={Styles.top}>
							<Navbar />
							<div
								className={Styles.title}
							>
								The land of Pakistan boasts breathtaking natural wonders.
							</div>
						</div>
						<div className={Styles.main}>
							<div className={Styles.title}>
								Where will your wanderlust take you next?<br/>Choose your destination and find out.
							</div>
							<div className={Styles.list}>
								{
									destinations.map((destination) => (
										<Card
											destination={ destination }
										/>
									))
								}
							</div>
						</div>
						<Footer />
					</div>
				)
			}
		</>
	);
}

export { DestinationList };
