import { Image } from 'react-bootstrap';
import Styles from './card.module.scss';

function Card() {
	return (
		<div className={Styles.card}
			onClick={() => {
				window.location.href = '/tours/6-days-tour-to-hunza-naltar-valley';
			}}
		>
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
								Islamabad - Hunza Valley
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
							5 Days
						</div>
						<div className={Styles.people}>
							<Image src={require('../../../assets/bus.png')} alt="image" width={14} height={14} />
							50 people going
						</div>
						<div className={Styles.people}>
							<Image src={require('../../../assets/tickets.png')} alt="image" width={14} height={14} />
							100 tickets left
						</div>
					</div>
					<div className={Styles.tags}>
						<div className={Styles.tag}>
							<Image src={require('../../../assets/tour-icon.png')} alt="image" width={18} height={18} />
							Sightseeing
						</div>
						<div className={Styles.tag}>
							<Image src={require('../../../assets/camera.png')} alt="image" width={18} height={18} />
							Photography
						</div>
						<div className={Styles.tag}>
							<Image src={require('../../../assets/fuel.png')} alt="image" width={18} height={18} />
							Fuel
						</div>
						<div className={Styles.tag}>
							<Image src={require('../../../assets/food.png')} alt="image" width={18} height={18} />
							Food
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Card };
