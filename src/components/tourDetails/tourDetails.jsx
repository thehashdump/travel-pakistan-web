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
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import Styles from './tourDetails.module.scss';

function TourDetails() {
	return (
		<div className={Styles.tourDetails}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.title}>
					6 Days Tour to Hunza & Naltar Valley
				</div>
			</div>
			<div className={Styles.main}>
				<div className={Styles.info}>
					<div className={Styles.left}>
						<Image
							src={require('../../assets/tourDetails1.png')}
							alt="tourDetails"
							className={Styles.image}
						/>
					</div>
					<div className={Styles.middle}>
						<Image
							src={require('../../assets/tourDetails1.png')}
							alt="tourDetails"
							className={Styles.image}
						/>
						<Image
							src={require('../../assets/tourDetails2.png')}
							alt="tourDetails"
							className={Styles.image}
						/>
						<Image
							src={require('../../assets/tourDetails3.png')}
							alt="tourDetails"
							className={Styles.image}
						/>
						<Image
							src={require('../../assets/tourDetails4.png')}
							alt="tourDetails"
							className={Styles.image}
						/>
					</div>
					<div className={Styles.right}>
						<div className={Styles.topInfo}>
							<span className={Styles.title}>6 Days Tour to Hunza & Naltar Valley</span>
							<div className={Styles.moreInfo}>
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
										<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
										<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
									</svg>
									Hunza Valley
								</span>
								<span>By Dream Trip Planners</span>
							</div>
						</div>
						<div className={Styles.map}>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51441.31704985877!2d74.6493444!3d36.31031065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e8a0927450692b%3A0x866b1b1181ca7cea!2sHunza%20Valley!5e0!3m2!1sen!2s!4v1675623071349!5m2!1sen!2s" width="100%" height="140" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
						<div className={Styles.bottomInfo}>
							<div className={Styles.tripInfo}>
								<div className={Styles.days}>
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
										<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
										<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
									</svg>
									6 Days
								</div>
								<div className={Styles.people}>
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-bus-front-fill" viewBox="0 0 16 16">
										<path d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.496 2.496 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A43.608 43.608 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1v2ZM3.552 3.22A43.306 43.306 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44.304 44.304 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994ZM8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.304 44.304 0 0 0 8 4Zm-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Z"/>
									</svg>
									1 to 22 people
								</div>
							</div>
							<div className={Styles.requirement}>
								<span className={Styles.heading}>Requirements</span>
								<ul>
									<li>Passport size copies (for foreigners)</li>
									<li>NOC (In case of foreign diplomats)</li>
									<li>National ID Card</li>
								</ul>
							</div>
							<div className={Styles.tags}>
								<div className={Styles.tag}>Sightseeing</div>
								<div className={Styles.tag}>Adventure</div>
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
										<p>
											Hunza valley tour takes you to the lush green mountainous valleys
											in the Gilgit-Baltistan region of Pakistan.
											Hunza is situated in the extreme northern part of Pakistan bordering
											with the Xinjiang region of China. Hunza Valley’s natural splendour and
											position on the Central Asian Silk Route has attracted travellers,
											merchants, and mountaineers for centuries.
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
													<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
												</svg>
												Location
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
											</svg>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className={Styles.route}>
											<div><span>Pick-up: </span> ISLAMABAD</div>
											<div><span>Route: </span> Islamabad - NARAN - CHILAS - KARIMABAD -
											EAGLE'S NEST - KHUNJERAB PASS - FAIRY MEADOWS - Islamabad</div>
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
													<path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
													<path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
												</svg>
												Timings
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
											</svg>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className={Styles.duration}>
											<div><span>Departure: </span> 10:00 PM</div>
											<div><span>Duration: </span>5 days</div>
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
													<path d="M5 8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5V8.5Z"/>
													<path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435Zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134Z"/>
												</svg>
												TINERARY
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
											</svg>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className={Styles.tinerary}>
											<div><span>Day 1: </span>Islamabad To Naran</div>
											<div>Pickup from Islamabad and Departure to Naran Sightseeing:
											Balakot, Kuwai, Kaghan, Naran Stay: Rose Valley Naran or Same</div>
											<div><span>Day 2: </span>Naran to Hunza</div>
											<div>Departure for Hunza Sightseeing: Lulusar lake, Babusar Top, Chilas,
											3M junction, Rakaposhi View Point, Hunza Stay: Baig Hotel Hunza or Same</div>
											<div><span>Day 3: </span>Hunza to Pak China Border</div>
											<div>Departure for Pakchina Border Sightseeing: Aatabad Lake,
											Passu Cones, Khunjerab Pass Stay : Baig Hotel Hunza or Same</div>
											<div><span>Day 4: </span>Hunza to Naran</div>
											<div>Sightseeing to Altit Fort, Baltit Fort
											Departure to Naran Stay: Rose Valley Naran</div>
											<div><span>Day 5: </span>Naran to Islamabad</div>
											<div>Departure to Islamabad</div>
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
													<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
													<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
												</svg>
												Inclusion and Exclusion
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
											</svg>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className={Styles.inclusionAndExclusion}>
											<div className={Styles.inclusion}>
												<span>Inclusive Services</span>
												<ul>
													<li>Private Transport</li>
													<li>Fuel</li>
													<li>Hotel Accommodation</li>
													<li>Daily Breakfast</li>
													<li>Driver Food and Accommodation</li>
													<li>All Tolls and Taxes</li>
												</ul>
											</div>
											<div className={Styles.exclusion}>
												<span>Exclusive Services</span>
												<ul>
													<li>Air Tickets</li>
													<li>Meals</li>
													<li>Personal nature expenses</li>
													<li>Fort tickets</li>
													<li>Any extra charges in case of flight cancellation.</li>
													<li>Any sunk cost (hotel, transport advance etc)</li>
													<li>Natural Disaster / Land Sliding</li>
													<li>Rescue cost</li>
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
													<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
													<path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
												</svg>
												Description
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
											</svg>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p>
										Hunza is probably Pakistan's most visited valley, by the tourists.
										It is a fairy tale land surrounded by beautiful rugged & snow capped mountains.
										Only at a distance of 100 Kms. from Gilgit Hunza is a small town
										on Karakorum Highway. At the altitude of 7000 - 800 feet it is the first main
										town or stop if you are entering Pakistan from China. The central
										Hunza known as Karimabad is basically a town of just 6 villages. The first main
										villages as you come from Gilgit on the main Karakorum Highway is Aliabad.
										There there are spectacular views of  Rakaposhi mountain (7788 meters),
										PTDC Motel Hunza and other small hotels are located on the main Karakorum
										highway here. Just above Aliabad on the hill are Altit and Baltit villages
										the heart of Hunza. There is a very interesting Bazaar and two Forts in Altit
										& Baltit Villages. The Baltit fort has recently been restored and converted
										into a guided museum. Hunza is undoubtly the Shangri-la of James Hilton's novel
										The Lost Horizon. It is probably the most Photogenic point in the world.
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
													<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
												</svg>
												Travel Tips
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
											</svg>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className={Styles.tips}>
											<span>Recommended Gear:</span>
											<ul>
												<li>Day Bag / Rucksack</li>
												<li>Trekking boots or Joggers</li>
												<li>Warm Jacket & Trouser</li>
												<li>Rain Coat</li>
												<li>Warm Socks</li>
												<li>Trekking Stick</li>
												<li>Warm Gloves</li>
												<li>Woolen Cap</li>
												<li>Sandals/ Teva</li>
												<li>Basic first aid/basic medicine</li>
												<li>Water bottle (normal 1.5 L bottle)</li>
												<li>Sun glasses & Sun Block cream,</li>
												<li>Tissue roll , Tooth Brush, Toothpaste, soap, shampoo</li>
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
													<path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
													<path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
													<path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
												</svg>
												Policy
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
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
									23 Nov, 22
								</div>
								<div className={Styles.passengers}>
									<span>Passengers</span>
									<label>Adults</label>
									<input type="number" min="1" placeholder='above 8 years'/>
									<label>Childern</label>
									<input type="number" min="0" placeholder='Children between 3 to 8 yrs'/>
									<label>Infants</label>
									<input type="number" min="0" placeholder='Children below 2 yrs'/>
								</div>
								<div className={Styles.pickup}>
									<span>Pickup Location</span>
									<select>
										<option value="islamabad">Islamabad</option>
									</select>
								</div>
								<div className={Styles.price}>
									PKR 27,000 <span>per person</span>
								</div>
								<button className={Styles.button}>Continue</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export { TourDetails };
