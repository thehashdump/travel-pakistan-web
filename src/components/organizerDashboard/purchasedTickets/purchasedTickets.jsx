/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import {
	Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination
} from '@material-ui/core';
import Styles from './purchasedTickets.module.scss';
import axios from '../../../utils/axiosConfig';

function PurchasedTickets() {
	const user = JSON.parse(localStorage.getItem('user'));
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [tickets, setTickets] = useState([]);

	useEffect(() => {
		axios.get(`/organizer-purchased-tickets/${user.organizerId}`).then((response) => {
			setTickets(response.data.purchasedTickets);
		}).catch((error) => {
			console.log(error);
		});
	}, [user]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<>
			<div className={Styles.reviews}>
				<div className={Styles.header}>
					<div className={Styles.title}>
						Purchased Tickets
					</div>
				</div>
				<div className={Styles.reviewsContainer}>
					{
						<TableContainer component={Paper} >
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>Tour Name</TableCell>
										<TableCell>Purchased By</TableCell>
										<TableCell>Tickets</TableCell>
										<TableCell>Phone</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((ticket) => (
											<TableRow>
												<TableCell>{ticket.tour.name}</TableCell>
												<TableCell>{
													ticket.purchasedBy ? ticket.purchasedBy.username
														: ticket.user.name
												}</TableCell>
												<TableCell>{parseInt(ticket.travellers.adults, 10)
													+ parseInt(ticket.travellers.children, 10)
												}</TableCell>
												<TableCell>{
													ticket.purchasedBy ? ticket.purchasedBy.phone
														: ticket.user.contact
												}</TableCell>
											</TableRow>
										))}
								</TableBody>
							</Table>
							<TablePagination
								rowsPerPageOptions={[5, 10, 15]}
								component="div"
								count={tickets.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</TableContainer>
					}
				</div>
			</div>
		</>
	);
}

export { PurchasedTickets };
