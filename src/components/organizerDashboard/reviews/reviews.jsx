/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import {
	Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination
} from '@material-ui/core';
import Styles from './reviews.module.scss';
import axios from '../../../utils/axiosConfig';

function Reviews() {
	const user = JSON.parse(localStorage.getItem('user'));
	const [showPopup, setShowPopup] = useState(false);
	const [reply, setReply] = useState('');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		axios.get(`/reviews/${user.organizerId}`).then((response) => {
			setReviews(response.data.reviews);
		}).catch((error) => {
			console.log(error);
		});
	}, []);

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
						Reviews and Ratings
					</div>
				</div>
				<div className={Styles.reviewsContainer}>
					{
						<TableContainer component={Paper} >
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>User Name</TableCell>
										<TableCell>Ratings</TableCell>
										<TableCell>Review</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{reviews.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map((review) => (
											<TableRow>
												<TableCell>{review.user.username}</TableCell>
												<TableCell>{review.rating}</TableCell>
												<TableCell>{review.comment}</TableCell>
												{/* <TableCell>
													<Button
														variant="contained"
														color="secondary"
														onClick={() => setShowPopup(true)}
													>
														Reply
													</Button>
												</TableCell> */}
											</TableRow>
										))}
								</TableBody>
							</Table>
							<TablePagination
								rowsPerPageOptions={[5, 10, 15]}
								component="div"
								count={reviews.length}
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
				showPopup && (
					<div className={Styles.popup}>
						<div className={Styles.popupInner}>
							<div className={Styles.popupTitle}>
									Review Details
							</div>
							<div className={Styles.popupContent}>
								<div className={Styles.reviewDetails}>
									<div className={Styles.heading}>
										User's Name:
									</div>
									<div className={Styles.value}>
										{reviews[0].user}
									</div>
								</div>
								<div className={Styles.reviewDetails}>
									<div className={Styles.heading}>
										Ratings:
									</div>
									<div className={Styles.value}>
										{reviews[0].rating}
									</div>
								</div>
								<div className={Styles.reviewDetails} style={{ flexDirection: 'column', gap: '0rem' }}>
									<div className={Styles.heading}>
										Review:
									</div>
									<div className={Styles.value}>
										{reviews[0].comment}
									</div>
								</div>
								<div className={Styles.replyContainer}>
									<div className={Styles.title}>
										Enter your reply below:
									</div>
									<input
										type="text"
										value={reply}
										onChange={(e) => setReply(e.target.value)}
										className={Styles.replyInput}
									/>
									<button
										type="submit"
										className={Styles.replyButton}
										onClick={() => setShowPopup(false)}
									>
										REPLY
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
		</>
	);
}

export { Reviews };
