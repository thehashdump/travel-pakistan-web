// eslint-disable-next-line import/no-extraneous-dependencies
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from 'recharts';
import { Image } from 'react-bootstrap';
import Styles from './dashboard.module.scss';

function Dashboard() {
	const data = [
		{ name: 'Kashmir', ticketsSold: 150 },
		{ name: 'Naran', ticketsSold: 250 },
		{ name: 'Gilgit', ticketsSold: 100 },
		{ name: 'Kumrat', ticketsSold: 300 },
		{ name: 'Swat', ticketsSold: 200 },
	];
	return (
		<div className={Styles.dashboard}>
			<div className={Styles.header}>
				<div className={Styles.title}>
					Dashboard
				</div>
			</div>
			<div className={Styles.widgets}>
				<div className={Styles.widget}>
					<div className={Styles.icon}>
						<Image
							src={require('../../../assets/tickets.png')}
							alt="Total Tours"
						/>
					</div>
					<div className={Styles.title}>
						Total Tours
					</div>
					<div className={Styles.value}>
						10
					</div>
				</div>
				<div className={Styles.widget}>
					<div className={Styles.icon}>
						<Image
							src={require('../../../assets/tickets.png')}
							alt="Total Tours"
						/>
					</div>
					<div className={Styles.title}>
						Tickets Sold
					</div>
					<div className={Styles.value}>
						100
					</div>
				</div>
				<div className={Styles.widget}>
					<div className={Styles.icon}>
						<Image
							src={require('../../../assets/star.png')}
							alt="Total Tours"
						/>
					</div>
					<div className={Styles.title}>
						Ratings
					</div>
					<div className={Styles.value}>
						4.5
					</div>
				</div>
			</div>
			<div className={Styles.graph}>
				<ResponsiveContainer width="100%" height={250}>
					<LineChart data={data} >
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend label={{ value: 'Number of Tickets' }}/>
						<Line type="monotone" dataKey="ticketsSold" stroke="#8884d8" name="Tickets Sold for Different Destinations" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export { Dashboard };
