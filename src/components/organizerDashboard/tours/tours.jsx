/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import {
	Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination
} from '@material-ui/core';
import { useParams } from 'react-router';
import Styles from './tours.module.scss';
import axios from '../../../utils/axiosConfig';

function Tours({ setActiveTab }) {
	const { id } = useParams();
	const [tours, setTours] = useState([]);
	const [active, setActive] = useState(1);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [displayTours, setDisplayTours] = useState([]);

	useEffect(() => {
		axios.get(`/tours/${id}`).then((response) => {
			setTours(response.data.tours);

			setDisplayTours(response.data.tours.filter((tour) => tour.active));
		}).catch((error) => {
			console.log(error);
		});
	}, [id]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleActiveToursClick = () => {
		setDisplayTours(tours.filter((tour) => tour.active));
	};

	const handleCompletedToursClick = () => {
		setDisplayTours(tours.filter((tour) => !tour.active));
	};

	return (
		<div className={Styles.tours}>
			<div className={Styles.header}>
				<div className={Styles.title}>
					Tours
				</div>
			</div>
			<div className={Styles.tabs}>
				<div className={Styles.tabsContainer}>
					<div
						className={`${active === 1 ? Styles.activeTab : Styles.tab}`}
						onClick={() => {
							setActive(1);
							handleActiveToursClick();
						}}
					>
						Active Tours
					</div>
					<div
						className={`${active === 2 ? Styles.activeTab : Styles.tab}`}
						onClick={() => {
							setActive(2);
							handleCompletedToursClick();
						}}
					>
						Completed Tours
					</div>
				</div>
				<div
					className={Styles.createTour}
					onClick={() => {
						setActiveTab('create tour');
					}}
				>
					<span>+</span> Create Tour
				</div>

			</div>
			<div className={Styles.toursContainer}>
				{
					<TableContainer component={Paper} >
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>Destination</TableCell>
									<TableCell>Duration (Days)</TableCell>
									<TableCell>Capacity</TableCell>
									<TableCell>Tickets Purchased</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{displayTours.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((tour) => (
										<TableRow>
											<TableCell>{tour.name}</TableCell>
											<TableCell>{tour.destination}</TableCell>
											<TableCell>{tour.durationDays}</TableCell>
											<TableCell>{tour.capacity}</TableCell>
											<TableCell>{tour.ticketsPurchased}</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
						<TablePagination
							rowsPerPageOptions={[5]}
							component="div"
							count={displayTours.length}
							rowsPerPage={rowsPerPage}
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</TableContainer>
				}
			</div>
		</div>
	);
}

export { Tours };
