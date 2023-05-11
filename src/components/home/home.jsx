import { Footer } from '../footer';
import { CarousalComponent } from './carousal';
import { Guide } from './guide';
import { HeroSection } from './heroSection';
import Styles from './home.module.scss';

function Home() {
	return (
		<div className={Styles.home}>
			<HeroSection />
			<CarousalComponent title="Top Tours"/>
			<Guide />
			<CarousalComponent title="Top Tour Organizers"/>
			<Footer />
		</div>
	);
}

export { Home };
