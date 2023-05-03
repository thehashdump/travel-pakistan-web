import TourForm from './tourForm/tourForm';
import Styles from './createTour.module.scss';

function CreateTour() {
	return (
		<div className={Styles.createTour}>
			<div className={Styles.header}>
				<div className={Styles.title}>
					Create Tour
				</div>
			</div>
			<div className={Styles.body}>
				<TourForm />
			</div>
		</div>
	);
}

export { CreateTour };
