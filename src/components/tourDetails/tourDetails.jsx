/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import moment from 'moment';
import axios from '../../utils/axiosConfig';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import Styles from './tourDetails.module.scss';

function TourDetails() {
	const { id } = useParams();
	const [tour, setTour] = useState(null);
	const [tickets, setTickets] = useState({ adults: 1, children: 0 });
	const [pickup, setPickup] = useState('');
	const [mapUrl, setMapUrl] = useState('');
	const [, setPosition] = useState(null);

	useEffect(() => {
		axios.get(`search-tours/${id}`).then((res) => {
			setTour(res.data.tour);
			const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${res.data.tour.destination}&key=AIzaSyCWUpPUvuTND5WDcivr45AKV5JoIFaZub0`;
			fetch(apiUrl).then((response) => response.json()).then((data) => {
				setPosition(data.results[0].geometry.location);
				console.log(data.results[0].geometry.location);
				setMapUrl(`https://www.google.com/maps/embed/v1/view?key=AIzaSyCWUpPUvuTND5WDcivr45AKV5JoIFaZub0&center=${data.results[0].geometry.location.lat},${data.results[0].geometry.location.lng}&zoom=15`);
			});
		}).catch((err) => {
			console.log(err);
		});
	}, [id]);
	return (
		<>
			{
				!tour ? <div>Loading...</div>
					: (
						<div className={Styles.tourDetails}>
							<div className={Styles.top}>
								<Navbar />
								<div className={Styles.title}>
									{tour.name}
								</div>
							</div>
							<div className={Styles.main}>
								<div className={Styles.info}>
									<div className={Styles.left}>
										<Image
											src={tour.images[0]}
											alt="tourDetails"
											className={Styles.image} />
										<div className={Styles.bottom}>
											<Image
												src={tour.images[1]}
												alt="tourDetails"
												className={Styles.image} />
											<Image
												src={tour.images[2]}
												alt="tourDetails"
												className={Styles.image} />
											<Image
												src={tour.images[3]}
												alt="tourDetails"
												className={Styles.image} />
											<Image
												src={tour.images[4]}
												alt="tourDetails"
												className={Styles.image} />
										</div>
									</div>
									<div className={Styles.right}>
										<div className={Styles.topInfo}>
											<span className={Styles.title}>{tour.name}</span>
											<div className={Styles.moreInfo}>
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
														<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
														<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
													</svg>
													{tour.departureLocation[0]} - {tour.destination}
												</span>
												<span
													className={Styles.organizer}
													onClick={() => {
														window.location.href = `/organizer-profile/${tour.agencyId}`;
													} }
												>
													By {tour.agencyName}
												</span>
											</div>
										</div>
										<div className={Styles.map}>
											<iframe
												src={mapUrl}
												width="100%"
												height="100%"
												style={{ border: 0 }}
												allowfullscreen=""
												loading="lazy"
												referrerpolicy="no-referrer-when-downgrade"
											></iframe>
										</div>
										<div className={Styles.bottomInfo}>
											<div className={Styles.tripInfo}>
												<div className={Styles.days}>
													<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
														<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
														<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
													</svg>
													{tour.durationDays} Days
												</div>
												<div className={Styles.people}>
													<Image src={require('../../assets/bus.png')} alt="image" width={14} height={14} />
													{tour.ticketsPurchased} people going
												</div>
												<div className={Styles.people}>
													<Image src={require('../../assets/tickets.png')} alt="image" width={14} height={14} />
													{tour.capacity - tour.ticketsPurchased} tickets left
												</div>
											</div>
											<div className={Styles.requirement}>
												<span className={Styles.heading}>Requirements</span>
												<ul>
													{
														tour.requirements.map((requirement, index) => {
															return (
																<li key={index}>{requirement}</li>
															);
														})
													}
												</ul>
											</div>
											<div className={Styles.tags}>
												{
													tour.tags.map((tag, index) => {
														return (
															<div className={Styles.tag} key={index}>
																{tag}
															</div>
														);
													})
												}
											</div>
										</div>
									</div>
								</div>
								<div className={Styles.details}>
									<div className={Styles.heading}>Details</div>
									<div className={Styles.content}>
										<div className={Styles.left}>
											<Accordion
												allowZeroExpanded
												className={Styles.steps}
											>
												<AccordionItem>
													<AccordionItemHeading>
														<AccordionItemButton
															className={Styles.item}
														>
															<div className={Styles.title}>
																<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-globe2" viewBox="0 0 16 16">
																	<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
																</svg>
																Overview
															</div>
															<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
															</svg>
														</AccordionItemButton>
													</AccordionItemHeading>
													<AccordionItemPanel>
														<p style={{ textAlign: 'justify' }}>
															{tour.overview}
														</p>
													</AccordionItemPanel>
												</AccordionItem>
												<AccordionItem>
													<AccordionItemHeading>
														<AccordionItemButton
															className={Styles.item}
														>
															<div className={Styles.title}>
																<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
																	<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
																</svg>
																Location
															</div>
															<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
															</svg>
														</AccordionItemButton>
													</AccordionItemHeading>
													<AccordionItemPanel>
														<p className={Styles.route}>
															<div><span>Pick-up: </span> {tour.departureLocation}</div>
															<div><span>Route:  </span>
																{tour.route.map((route, index) => {
																	return (
																		<> {route} {index !== tour.route.length - 1 ? '->' : ''}</>
																	);
																})}
															</div>
														</p>
													</AccordionItemPanel>
												</AccordionItem>
												<AccordionItem>
													<AccordionItemHeading>
														<AccordionItemButton
															className={Styles.item}
														>
															<div className={Styles.title}>
																<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-stopwatch" viewBox="0 0 16 16">
																	<path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
																	<path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
																</svg>
																Timings
															</div>
															<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
															</svg>
														</AccordionItemButton>
													</AccordionItemHeading>
													<AccordionItemPanel>
														<p className={Styles.duration}>
															<div><span>Departure: </span> {tour.departureTime}</div>
															<div><span>Duration: </span>{tour.durationDays} days</div>
														</p>
													</AccordionItemPanel>
												</AccordionItem>
												<AccordionItem>
													<AccordionItemHeading>
														<AccordionItemButton
															className={Styles.item}
														>
															<div className={Styles.title}>
																<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-sign-turn-right" viewBox="0 0 16 16">
																	<path d="M5 8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5V8.5Z" />
																	<path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435Zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134Z" />
																</svg>
																ITINERARY
															</div>
															<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
															</svg>
														</AccordionItemButton>
													</AccordionItemHeading>
													<AccordionItemPanel>
														<p className={Styles.tinerary}>
															{
																Object.entries(tour.itinerary).map(([day, activity]) => (
																	<div key={day}>
																		<span>{day}: </span>
																		{activity}
																	</div>
																))
															}
														</p>
													</AccordionItemPanel>
												</AccordionItem>
												<AccordionItem>
													<AccordionItemHeading>
														<AccordionItemButton
															className={Styles.item}
														>
															<div className={Styles.title}>
																<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-plus-circle" viewBox="0 0 16 16">
																	<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																	<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
																</svg>
																Inclusion and Exclusion
															</div>
															<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
															</svg>
														</AccordionItemButton>
													</AccordionItemHeading>
													<AccordionItemPanel>
														<p className={Styles.inclusionAndExclusion}>
															<div className={Styles.inclusion}>
																<span>Inclusive Services</span>
																<ul>
																	{
																		tour.inclusions.map((item) => (
																			<li>{item}</li>
																		))
																	}
																</ul>
															</div>
															<div className={Styles.exclusion}>
																<span>Exclusive Services</span>
																<ul>
																	{
																		tour.exclusions.map((item) => (
																			<li>{item}</li>
																		))
																	}
																</ul>
															</div>
														</p>
													</AccordionItemPanel>
												</AccordionItem>
												<AccordionItem>
													<AccordionItemHeading>
														<AccordionItemButton
															className={Styles.item}
														>
															<div className={Styles.title}>
																<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-card-text" viewBox="0 0 16 16">
																	<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
																	<path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
																</svg>
																Description
															</div>
															<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
															</svg>
														</AccordionItemButton>
													</AccordionItemHeading>
													<AccordionItemPanel>
														<p style={{ textAlign: 'justify' }}>
															{tour.description}
														</p>
													</AccordionItemPanel>
												</AccordionItem>
												<AccordionItem>
													<AccordionItemHeading>
														<AccordionItemButton
															className={Styles.item}
														>
															<div className={Styles.title}>
																<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-lightbulb" viewBox="0 0 16 16">
																	<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
																</svg>
																Travel Tips
															</div>
															<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
															</svg>
														</AccordionItemButton>
													</AccordionItemHeading>
													<AccordionItemPanel>
														<p className={Styles.tips}>
															<span>Recommended Gear:</span>
															<ul>
																{tour.tips.map((item, index) => (
																	<li key={index}>{item}</li>
																))}
															</ul>
														</p>
													</AccordionItemPanel>
												</AccordionItem>
												<AccordionItem>
													<AccordionItemHeading>
														<AccordionItemButton
															className={Styles.item}
														>
															<div className={Styles.title}>
																<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-journal-check" viewBox="0 0 16 16">
																	<path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
																	<path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
																	<path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
																</svg>
																Policy
															</div>
															<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
															</svg>
														</AccordionItemButton>
													</AccordionItemHeading>
													<AccordionItemPanel>
														<p className={Styles.policy}>
															<span>Cancellation</span>
															<ul>
																<li>The amount will be deducted for non-refundable advance paid
																	for Hotels and Transportation services.</li>
																<li>Any suck cost not mentioned above will be deducted.</li>
																<li>The refund amount will be processed in 7-10 working days.</li>
															</ul>
															<span>Refund</span>
															<ul>
																<li>Please refer to the "Cancellation Policy" section.</li>
															</ul>
															<span>Child Policy</span>
															<ul>
																<li>Children below 2 years count as an infant.</li>
																<li>Children Between 3 to 8 years children are counted as kids.</li>
																<li>Children above 8 years children are count as adults.</li>
															</ul>
														</p>
													</AccordionItemPanel>
												</AccordionItem>
											</Accordion>
										</div>
										<div className={Styles.right}>
											<div className={Styles.card}>
												<div className={Styles.date}>
													<span>Journey Date</span>
													{
														moment(tour.departureDate).format('DD MMM YYYY')
													}
												</div>
												<div className={Styles.passengers}>
													<span>Passengers</span>
													<label>Adults</label>
													<input
														type="number"
														min="1"
														placeholder='Above 8 years'
														value={tickets.adults}
														onChange={(e) => {
															setTickets({
																...tickets,
																adults: e.target.value,
															});
														}}
													/>
													<label>Childern</label>
													<input
														type="number"
														min="0"
														placeholder='Children between 3 to 8 yrs'
														value={tickets.children}
														onChange={(e) => {
															setTickets({
																...tickets,
																children: e.target.value,
															});
														}}
													/>
												</div>
												<div className={Styles.pickup}>
													<span>Pickup Location</span>
													<select
														value={pickup}
														onChange={(e) => {
															console.log('Selected value:', e.target.value);
															setPickup(e.target.value);
														}}
													>
														<option disabled value=''>Select Pickup Location</option>
														{
															tour.departureLocation.map((item, index) => (
																<option key={index} value={item}>{item}</option>
															))
														}
													</select>
												</div>
												<div className={Styles.price}>
													PKR {tour.price.adults} <span>per adult</span><br />
													PKR {tour.price.children} <span>per child</span>
												</div>
												<Link
													to='/booktour' state={{ tour, tickets, pickup }}
													className={Styles.link}
												>
													<button
														className={Styles.button}
													>Continue</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<Footer />
						</div>
					)
			}
		</>
	);
}

export { TourDetails };
