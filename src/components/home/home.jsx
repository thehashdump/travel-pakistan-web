import { Footer } from '../footer';
import { CarousalComponent } from './carousal';
import { Guide } from './guide';
import { HeroSection } from './heroSection';
import Styles from './home.module.scss';
import { ServicesSection } from './servicesSection';
import { Testimonials } from './testimonials';

function Home() {
	return (
		<div className={Styles.home}>
			<HeroSection />
			<ServicesSection />
			<CarousalComponent title="Top Destinations"/>
			<Guide />
			<Testimonials />
			<CarousalComponent title="Top Tour Organizers"/>
			<Footer />
		</div>
	);
}

export { Home };
