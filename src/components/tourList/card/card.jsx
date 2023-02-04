import { Image } from 'react-bootstrap';
import Styles from './card.module.scss';

function Card() {
	return (
		<div className={Styles.card}>
			<div className={Styles.cardImage}>
				<Image
					src={require('../../../assets/tourListCard1.png')}
					alt="tour image"
					className={Styles.image}
				/>
			</div>
			<div className={Styles.cardInfo}>
				<div className={Styles.top}>
					<div className={Styles.left}>
						<span className={Styles.title}>6 Days Tour to Hunza & Naltar Valley</span>
						<div className={Styles.moreInfo}>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
									<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
									<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
								</svg>
								Hunza Valley
							</span>
							<span>By Dream Trip Planners</span>
						</div>
					</div>
					<div className={Styles.right}>
						<div className={Styles.price}>
							<span>Starting from</span>
							<span className={Styles.priceText}>PKR <span>27,000</span></span>
							<span>Per Person</span>
						</div>
					</div>
				</div>
				<div className={Styles.bottom}>
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
					<div className={Styles.tags}>
						<div className={Styles.tag}>Sightseeing</div>
						<div className={Styles.tag}>Adventure</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Card };
