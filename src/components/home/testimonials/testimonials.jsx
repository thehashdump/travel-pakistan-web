import { Image } from 'react-bootstrap';
import Styles from './testimonials.module.scss';

function Testimonials() {
	return (
		<div className={Styles.testimonials}>
			<div className={Styles.left}>
				<div className={Styles.title}>
					Testimonials
				</div>
				<div className={Styles.heading}>
					What people say about Us.
				</div>
			</div>
			<div className={Styles.right}>
				<div className={Styles.image}>
					<Image
						src={require('../../../assets/testimonial.png')}
						alt="Testimonial"
					/>
				</div>
				<div className={Styles.testimonial}>
					<div className={Styles.text}>
						“It was a great experience on travel Pakistan.
						My first experience went well with travel Pakistan platform.
						I will definitely consider it for future as well.”
					</div>
					<div className={Styles.name}>
						John Doe
					</div>
					<div className={Styles.address}>
						New York, USA
					</div>
				</div>
			</div>
		</div>
	);
}

export { Testimonials };
