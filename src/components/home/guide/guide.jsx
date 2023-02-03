import { Image } from 'react-bootstrap';
import Styles from './guide.module.scss';

function Guide() {
	return (
		<div className={Styles.guide}>
			<div className={Styles.content}>
				<div className={Styles.title}>
					Book your next trip in 3 easy steps
				</div>
				<div className={Styles.steps}>
					<div className={Styles.step}>
						<div className={Styles.left}>
							<Image src={require('../../../assets/guideStep1.png')} alt="step1" />
						</div>
						<div className={Styles.right}>
							<div className={Styles.stepTitle}>
								Choose Destination
							</div>
							<div className={Styles.stepDescription}>
								Choose your destination from our wide range of destinations
							</div>
						</div>
					</div>
					<div className={Styles.step}>
						<div className={Styles.left}>
							<Image src={require('../../../assets/guideStep2.png')} alt="step1" />
						</div>
						<div className={Styles.right}>
							<div className={Styles.stepTitle}>
								Make Payment
							</div>
							<div className={Styles.stepDescription}>
								Make Secure Payment Online and make your journey hassle free
							</div>
						</div>
					</div>
					<div className={Styles.step}>
						<div className={Styles.left}>
							<Image src={require('../../../assets/guideStep3.png')} alt="step1" />
						</div>
						<div className={Styles.right}>
							<div className={Styles.stepTitle}>
								Reach Pick-up Point  on Selected Date
							</div>
							<div className={Styles.stepDescription}>
								Reach on time to enjoy the quality travel experience with top agencies
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={Styles.cardContainer}>
				<div className={Styles.card}>
					<div className={Styles.cardImage}>
						<Image src={require('../../../assets/guideCard.jpg')} alt="card image" />
					</div>
					<div className={Styles.cardContent}>
						<div className={Styles.cardTitle}>
							Trip To Islamabad
						</div>
						<div className={Styles.cardDescription}>
							20  Nov | by Ez Travel
						</div>
						<div className={Styles.icons}>
							<div className={Styles.icon}>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
								</svg>
							</div>
							<div className={Styles.icon}>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-cursor" viewBox="0 0 16 16">
									<path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
								</svg>
							</div>
							<div className={Styles.icon}>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-calendar2-check" viewBox="0 0 16 16">
									<path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
									<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
									<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
								</svg>
							</div>
						</div>
						<div className={Styles.bottom}>
							<div className={Styles.tripDetails}>
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
									<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
								</svg>
								24 people going
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="4152CA" class="bi bi-heart" viewBox="0 0 16 16">
								<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Guide };
