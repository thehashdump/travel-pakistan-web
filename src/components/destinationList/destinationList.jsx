import { Footer } from '../footer';
import { Navbar } from '../navbar';
import { Card } from './card/card';
import Styles from './destinationList.module.scss';

function DestinationList() {
	return (
		<div className={Styles.tourList}>
			<div className={Styles.top}>
				<Navbar />
				<div
					className={Styles.title}
				>
					The land of Pakistan boasts breathtaking natural wonders.
				</div>
			</div>
			<div className={Styles.main}>
				<div className={Styles.title}>
					Where will your wanderlust take you next?<br/>Choose your destination and find out.
				</div>
				<div className={Styles.list}>
					<Card
						image=	{'destination1.jpg'}
						destination={'Skurdu'}
						visitors = {'100000+'}
					/>
					<Card
						image=	{'destination2.jpg'}
						destination={'Fairy Meadows'}
						visitors = {'60000+'}
					/>
					<Card
						image=	{'destination3.jpg'}
						destination={'Kashmir Valley'}
						visitors = {'500000+'}
					/>
					<Card
						image=	{'destination4.jpg'}
						destination={'Kumrat Valley'}
						visitors = {'20000+'}
					/>
					<Card
						image=	{'destination5.jpg'}
						destination={'Swat Valley'}
						visitors = {'80000+'}
					/>
					<Card
						image=	{'destination6.jpg'}
						destination={'Islamabad'}
						visitors = {'100000+'}
					/>
					<Card
						image=	{'destination7.jpg'}
						destination={'Hunza Valley'}
						visitors = {'30000+'}
					/>
					<Card
						image=	{'destination8.jpg'}
						destination={'Kalash Valley'}
						visitors = {'10000+'}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export { DestinationList };
