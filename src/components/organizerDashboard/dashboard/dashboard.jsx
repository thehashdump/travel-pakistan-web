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
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Styles from './dashboard.module.scss';
import axios from '../../../utils/axiosConfig';

function Dashboard() {
	const { id } = useParams();
	const [dashboardData, setDashboardData] = useState([]);

	useEffect(() => {
		axios.get(`organizer-dashboard/${id}`).then((res) => {
			setDashboardData(res.data.dashboardData);
		}).catch((err) => {
			console.log(err);
		});
	}, [id]);
	console.log(dashboardData.tours);
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
						{dashboardData.totalTours}
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
						{dashboardData.ticketsSold}
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
						{dashboardData.ratings ? dashboardData.ratings : 0}
					</div>
				</div>
			</div>
			<div className={Styles.graph}>
				<ResponsiveContainer width="100%" height={250}>
					<LineChart data={dashboardData.tours} >
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey={'name'} interval={0}/>
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
