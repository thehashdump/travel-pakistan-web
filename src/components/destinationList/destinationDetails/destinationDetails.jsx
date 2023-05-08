/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-extraneous-dependencies */
import { Image } from 'react-bootstrap';

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Footer } from '../../footer';
import { Navbar } from '../../navbar';
import Styles from './destinationDetails.module.scss';
import axios from '../../../utils/axiosConfig';

function DestinationDetails() {
	const { id } = useParams();
	const [destination, setDestination] = useState(null);
	const [mapUrl, setMapUrl] = useState('');
	
	useEffect(() => {
		axios.get(`all-destinations/${id}`).then((res) => {
			setDestination(res.data.destination);
			const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${res.data.destination.location}&key=AIzaSyCWUpPUvuTND5WDcivr45AKV5JoIFaZub0`;
			fetch(apiUrl).then((response) => response.json()).then((data) => {
				setMapUrl(`https://www.google.com/maps/embed/v1/view?key=AIzaSyCWUpPUvuTND5WDcivr45AKV5JoIFaZub0&center=${data.results[0].geometry.location.lat},${data.results[0].geometry.location.lng}&zoom=12`);
			});
		}).catch((err) => {
			console.log(err);
		});
	}, [id]);

	return (
		<>
			{
				!destination ? (
					<div>
						Loading...
					</div>
				) : (
					<div className={Styles.tourDetails}>
						<div className={Styles.top}>
							<Navbar />
							<div className={Styles.title}>
								Explore the breathtaking {destination.location}.
							</div>
						</div>
						<div className={Styles.main}>
							<div className={Styles.info}>
								<div className={Styles.left}>
									<Image
										src={destination.images[0]}
										alt="tourDetails"
										className={Styles.image}
									/>
									<div className={Styles.bottom}>
										<Image
											src={destination.images[1]}
											alt="tourDetails"
											className={Styles.image}
										/>
										<Image
											src={destination.images[2]}
											alt="tourDetails"
											className={Styles.image}
										/>
										<Image
											src={destination.images[3]}
											alt="tourDetails"
											className={Styles.image}
										/>
										<Image
											src={destination.images[4]}
											alt="tourDetails"
											className={Styles.image}
										/>
									</div>
								</div>
								<div className={Styles.right}>
									<div className={Styles.topInfo}>
										<span className={Styles.title}>{destination.location}</span>
										<div className={Styles.moreInfo}>
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
													<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
													<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
												</svg>
												{destination.destination}
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
												<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
													<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
												</svg>
												{destination.hiddenPlaces.length}+ Hidden Places
											</div>
											<div className={Styles.people}>
												<Image src={require('../../../assets/festival.png')} alt="image" width={14} height={14} />
												Cultural Festivals
											</div>
											<div className={Styles.people}>
												<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-person-hearts" viewBox="0 0 16 16">
													<path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
												</svg>
												Friendly People
											</div>
										</div>
										<div className={Styles.requirement}>
											<span className={Styles.heading}>Tips to visit:</span>
											<span className={Styles.requirementList}>
												Keep the following tips in mind while visiting the {
													destination.location}:
											</span>
											<ul>
												{
													destination.tips.map((tip, index) => (
														<li key={index}>{tip}</li>
													))
												}
											</ul>
										</div>
										<div className={Styles.tags}>
											{
												destination.tags.map((tag, index) => (
													<span key={index} className={Styles.tag}>{tag}</span>
												))
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
															<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-globe2" viewBox="0 0 16 16">
																<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
															</svg>
															Overview
														</div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
														</svg>
													</AccordionItemButton>
												</AccordionItemHeading>
												<AccordionItemPanel>
													<p style={{ textAlign: 'justify' }}>
														{destination.overview}
													</p>
												</AccordionItemPanel>
											</AccordionItem>
											<AccordionItem>
												<AccordionItemHeading>
													<AccordionItemButton
														className={Styles.item}
													>
														<div className={Styles.title}>
															<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
																<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
															</svg>
															Places to Visit
														</div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
														</svg>
													</AccordionItemButton>
												</AccordionItemHeading>
												<AccordionItemPanel>
													<p className={Styles.route}>
														{
															destination.viewPoints.map((place) => (
																<div>
																	<span>{place.name}: </span>
																	{place.description}
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
															<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-egg-fried" viewBox="0 0 16 16">
																<path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
																<path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
															</svg>
															Cultural Cousine
														</div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
														</svg>
													</AccordionItemButton>
												</AccordionItemHeading>
												<AccordionItemPanel>
													<p className={Styles.duration}>
														{
															destination.culturalCusine.map((cusine) => (
																<div>
																	<span>{cusine.name}: </span>
																	{cusine.description}
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
															<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-flower1" viewBox="0 0 16 16">
																<path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
															</svg>
															Cultural Traditions
														</div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
														</svg>
													</AccordionItemButton>
												</AccordionItemHeading>
												<AccordionItemPanel>
													<p className={Styles.tinerary}>
														{
															destination.culturalTraditions.map((tradition) => (
																<div>
																	<span>{tradition.name}: </span>{tradition.description}
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
															<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-activity" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
															</svg>
															Activities
														</div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
														</svg>
													</AccordionItemButton>
												</AccordionItemHeading>
												<AccordionItemPanel>
													<p className={Styles.tinerary}>
														{
															destination.activities.map((activity) => (
																<div>
																	<span>{activity.name}: </span>{activity.description}
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
															<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-map" viewBox="0 0 16 16">
																<path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
															</svg>
															Hidden Beauty
														</div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
														</svg>
													</AccordionItemButton>
												</AccordionItemHeading>
												<AccordionItemPanel>
													<p className={Styles.tinerary}>
														{
															destination.hiddenPlaces.map((place) => (
																<div>
																	<span>{place.name}: </span>{place.description}
																</div>
															))
														}
													</p>
												</AccordionItemPanel>
											</AccordionItem>
										</Accordion>
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

export { DestinationDetails };
