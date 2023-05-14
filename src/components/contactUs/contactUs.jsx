import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from '../../utils/axiosConfig';
import { Footer } from '../footer';
import { Navbar } from '../navbar';
import Styles from './contactUs.module.scss';

function ContactUs() {
	const [name, setName] = useState('Enter your name');
	const [email, setEmail] = useState('Enter your email address');
	const [query, setQuery] = useState('Go ahead! We are listening...');
	const handleQuerySubmit = () => {
		const data = {
			name,
			email,
			query
		};
		if (name === 'Enter your name' || email === 'Enter your email address' || query === 'Go ahead! We are listening...') {
			toast.error('Please fill all the fields');
			return;
		}
		axios.post('create-query', data).then(() => {
			toast.success('Query submitted successfully');
			setTimeout(() => {
				window.location.href = '/';
			}, 2000);
		}).catch(() => {
			toast.error('Something went wrong');
		});
	};
	return (
		<div className={Styles.contactUs}>
			<div className={Styles.top}>
				<Navbar />
			</div>
			<div className={Styles.contactForm}>
				<div className={Styles.form}>
					<span className={Styles.heading}>Get In Touch</span>
					<span className={Styles.subHeading}>
            We are here for you! How can we help?
					</span>
					<div className={Styles.input}>
						<input
							className={Styles.name}
							value={name}
							onFocus={() => setName('')}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							className={Styles.email}
							value={email}
							onFocus={() => setEmail('')}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<textarea
							className={Styles.message}
							value={query}
							onFocus={() => setQuery('')}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
					<button
						className={Styles.submit}
						onClick={handleQuerySubmit}
					>Submit</button>
				</div>
				<div className={Styles.location}>
					<div className={Styles.vectorImage}></div>
					<div className={Styles.locationDetails}>
						<div className={Styles.address}>
							<Image src={require('../../assets/locationMarker.png')} />
							<span>NUST, ISLAMABAD</span>
						</div>
						<div className={Styles.call}>
							<Image src={require('../../assets/contact1.png')} />
							<span>+92-324-4943615</span>
						</div>
						<div className={Styles.emailMsg}>
							<Image src={require('../../assets/email.png')} />
							<span>travel.pak@gmail.com</span>
						</div>
					</div>
				</div>
			</div>

			<Footer className={Styles.footer} />
			<ToastContainer
				position="bottom-center"
			/>
		</div>
	);
}

export { ContactUs };
