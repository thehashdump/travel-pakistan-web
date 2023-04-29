/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import {
	Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button
} from '@material-ui/core';
import { tours } from './dummyData';
import Styles from './tours.module.scss';

function Tours({ setActiveTab }) {
	const [active, setActive] = useState(1);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [displayTours, setDisplayTours] = useState(tours.filter((tour) => tour.active));

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
									{
										active === 1
										&& <TableCell>Active</TableCell>
									}
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
											{
												active === 1
												&& (
													<TableCell>
														<Button variant="contained" color="primary">
															Edit
														</Button>
													</TableCell>
												)
											}
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
