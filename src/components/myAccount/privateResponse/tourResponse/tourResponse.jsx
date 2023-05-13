/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */

import { useState } from 'react';
import {
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	Button
} from '@material-ui/core';
import { toast, ToastContainer } from 'react-toastify';
import Styles from './tourResponse.module.scss';
import axios from '../../../../utils/axiosConfig';

function TourResponse({ responses }) {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleBookTour = (tour, organizer, price) => {
		const data = {
			tour,
			organizer,
			price
		};
		axios.post('book-private-tour', data).then(() => {
			toast.success('Tour Booked Successfully');
			setTimeout(() => {
				window.location.reload();
			}, 2000);
		}).catch(() => {
			toast.error('Error Booking Tour');
		});
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<div className={Styles.mainContainer}>
			<TableContainer>
				<Table className={Styles.table}>
					<TableHead>
						<TableRow>
							<TableCell>Destination</TableCell>
							<TableCell>Organizer Name</TableCell>
							<TableCell>Phone</TableCell>
							<TableCell>Bid Offer</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							responses.length === 0 ? (
								<TableRow>
									<TableCell colSpan={5} align="center">
										No Responses
									</TableCell>
								</TableRow>
							)	:	(
								responses
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

									.map((row) => (
										<>
											{
												row.bid.map((bid) => (
													<TableRow key={row._id}>
														<TableCell>{row.destination}</TableCell>
														<TableCell>{bid.organizer.name}</TableCell>
														<TableCell>{bid.organizer.phone}</TableCell>
														<TableCell>{bid.price}</TableCell>
														<TableCell>
															<Button
																variant="contained"
																color="primary"
																onClick={() => {
																	handleBookTour(row._id, bid.organizer._id, bid.price);
																}}
															>
																BOOK
															</Button>
														</TableCell>
													</TableRow>
												))
											}
										</>
									)))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={responses.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
			<ToastContainer
				position="bottom-center"
			/>
		</div>
	);
}

export { TourResponse };
