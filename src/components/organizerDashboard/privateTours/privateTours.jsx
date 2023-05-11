/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import {
	Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Button
} from '@material-ui/core';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import Styles from './privateTours.module.scss';
import axios from '../../../utils/axiosConfig';

function PrivateTours() {
	const user = JSON.parse(localStorage.getItem('user'));
	const [showPopup, setShowPopup] = useState(false);
	const [bid, setBid] = useState(0);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [id, setId] = useState('');
	const [privateTour, setPrivateTour] = useState({});
	const [privateTourRequests, setPrivateTourRequests] = useState([]);

	const handleBiding = () => {
		const data = {
			price: bid,
			tourId: id,
			organizer: user.organizerId
		};
		axios.post('/bid-private-tour', data).then(() => {
			toast.success('Bid successfully placed');
		}).catch((error) => {
			console.log(error);
		});
	};

	useEffect(() => {
		axios.get('/private-tours').then((response) => {
			setPrivateTourRequests(response.data.privateTours);
		}).catch((error) => {
			console.log(error);
		});
	}, []);

	useEffect(() => {
		setPrivateTour(privateTourRequests.find((tour) => tour._id === id));
		console.log(privateTourRequests.find((tour) => tour._id === id));
	}, [id, privateTourRequests]);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<>
			<div className={Styles.tours}>
				<div className={Styles.header}>
					<div className={Styles.title}>
						Private Tour Requests
					</div>
				</div>
				<div className={Styles.toursContainer}>
					{
						<TableContainer component={Paper} >
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>User Name</TableCell>
										<TableCell>Destination</TableCell>
										<TableCell>Duration (Days)</TableCell>
										<TableCell>Travelers</TableCell>
										<TableCell>Location</TableCell>
										<TableCell>Date</TableCell>
										<TableCell>Budget</TableCell>
										<TableCell>Action</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{privateTourRequests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((tour) => (
											<TableRow>
												<TableCell>{tour.user.username}</TableCell>
												<TableCell>{tour.destination}</TableCell>
												<TableCell>{tour.durationDays}</TableCell>
												<TableCell>{tour.travelers}</TableCell>
												<TableCell>{tour.departureLocation}</TableCell>
												<TableCell>{moment(tour.departureDate).format('MM-DD-YYYY')}</TableCell>
												<TableCell>{tour.budget}</TableCell>
												<TableCell>
													<Button
														variant="contained"
														color="secondary"
														onClick={() => {
															setShowPopup(true);
															setId(tour._id);
														}}
													>
														BID
													</Button>
												</TableCell>
											</TableRow>
										))}
								</TableBody>
							</Table>
							<TablePagination
								rowsPerPageOptions={[5, 10, 15]}
								component="div"
								count={privateTourRequests.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
							/>
						</TableContainer>
					}
				</div>
			</div>
			{
				showPopup && privateTour && (
					<div className={Styles.popup}>
						<div className={Styles.popupInner}>
							<div className={Styles.popupTitle}>
									Details Of Private Tour Request
							</div>
							<div className={Styles.popupContent}>
								<div className={Styles.tourDetails}>
									<div className={Styles.heading}>
										User's Name:
									</div>
									<div className={Styles.value}>
										{privateTour.user.username}
									</div>
								</div>
								<div className={Styles.tourDetails}>
									<div className={Styles.heading}>
										Destination:
									</div>
									<div className={Styles.value}>
										{privateTour.destination}
									</div>
								</div>
								<div className={Styles.tourDetails} style={{ flexDirection: 'column', gap: '0rem' }}>
									<div className={Styles.heading}>
										Description:
									</div>
									<div className={Styles.value}>
										{privateTour.description}
									</div>
								</div>
								<div className={Styles.tourDetails}>
									<div className={Styles.heading}>
										Route:
									</div>
									<div className={Styles.value}>
										{
											privateTour.route.map((route, index) => (
												<span>
													{index !== 0 && <> -&gt; </> }
													{route}
												</span>
											))
										}
									</div>
								</div>
								<div className={Styles.tourDetails}>
									<div className={Styles.heading}>
										Duration:
									</div>
									<div className={Styles.value}>
										{privateTour.durationDays} Days
									</div>
								</div>
								<div className={Styles.tourDetails}>
									<div className={Styles.heading}>
										Travelers:
									</div>
									<div className={Styles.value}>
										{privateTour.travelers}
									</div>
								</div>
								<div className={Styles.tourDetails}>
									<div className={Styles.heading}>
										Location:
									</div>
									<div className={Styles.value}>
										{privateTour.departureLocation}
									</div>
								</div>
								<div className={Styles.tourDetails}>
									<div className={Styles.heading}>
										Date:
									</div>
									<div className={Styles.value}>
										{moment(privateTour.departureDate).format('MM-DD-YYYY')}
									</div>
								</div>
								<div className={Styles.tourDetails}>
									<div className={Styles.heading}>
										Time:
									</div>
									<div className={Styles.value}>
										{privateTour.departureTime}
									</div>
								</div>
								<div className={Styles.tourDetails}>
									<div className={Styles.heading}>
										Budget:
									</div>
									<div className={Styles.value}>
										{privateTour.budget}
									</div>
								</div>
								<div className={Styles.bidContainer}>
									<div className={Styles.title}>
										Enter your bid amount
									</div>
									<input
										type="number"
										value={bid}
										min={0}
										onChange={(e) => setBid(e.target.value)}
										className={Styles.bidInput}
									/>
									<button
										type="submit"
										className={Styles.bidButton}
										onClick={() => {
											setShowPopup(false);
											handleBiding();
										}}
									>
										BID
									</button>
								</div>
							</div>
							<div className={Styles.closePopup}>
								<button
									type="button"
									onClick={() => setShowPopup(false)}
									className={Styles.closeButton}
								>
									CLOSE
								</button>
							</div>
						</div>
					</div>
				)
			}
			<ToastContainer
				position="bottom-center"
			/>
		</>
	);
}

export { PrivateTours };
