import { CarousalComponent } from './carousal';
import { HeroSection } from './heroSection';
import Styles from './home.module.scss';
import { ServicesSection } from './servicesSection';

function Home() {
	return (
		<div className={Styles.home}>
			<HeroSection />
			<ServicesSection />
			<CarousalComponent title="Top Destinations"/>
			<CarousalComponent title="Top Tour Organizers"/>
		</div>
	);
}

export { Home };
