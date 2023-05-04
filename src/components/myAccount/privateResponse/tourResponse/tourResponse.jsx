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
import Styles from './tourResponse.module.scss';

function TourResponse() {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [searchValue, setSearchValue] = useState('');
	const handleSearchInputChange = (event) => setSearchValue(event.target.value);

	const rows = [
		{
			srNo: 1,
			organizer: 'Explore Pakistan',
			rating: '4.3',
			bid: '47,500',
		},
		{
			srNo: 2,
			organizer: 'Trip It Pakistan',
			rating: '4.5',
			bid: '42,500',
		},
		{
			srNo: 3,
			organizer: 'Traverse Pakistan',
			rating: '4.7',
			bid: '37,500',
		},
		{
			srNo: 4,
			organizer: 'Destination PK',
			rating: '4.2',
			bid: '52,000',
		},
		{
			srNo: 5,
			organizer: 'Trekking Pakistan',
			rating: '4.4',
			bid: '32,000',
		},
	];

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<div className={Styles.mainContainer}>
			<div className={Styles.toggling}>
				<input
					type="text"
					placeholder="Search Organizer"
					value={searchValue}
					onChange={handleSearchInputChange}
					className={Styles.searchBar}
				/>
			</div>

			<TableContainer>
				<Table className={Styles.table}>
					<TableHead>
						<TableRow>
							<TableCell>Sr No.</TableCell>
							<TableCell>Organizer Name</TableCell>
							<TableCell>Rating</TableCell>
							<TableCell>Bid Offer</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows

							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.filter((row) => row.organizer.toLowerCase().includes(searchValue.toLowerCase()))
							.map((row) => (
								<TableRow key={row.srNo}>
									<TableCell>{row.srNo}</TableCell>
									<TableCell>{row.organizer}</TableCell>
									<TableCell>{row.rating}</TableCell>
									<TableCell>{row.bid}</TableCell>
									<TableCell>
										<Button variant="contained" color="primary">
                      BOOK
										</Button>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</div>
	);
}

export { TourResponse };
