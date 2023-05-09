/* eslint-disable import/no-extraneous-dependencies */
import { Image } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from '../../utils/axiosConfig';
import Styles from './signUp.module.scss';

function SignUp() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [cnic, setCnic] = useState('');
	const [error, setError] = useState({});

	const handleEmailChange = (e) => {
		const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
		if (!emailRegex.test(e.target.value)) {
			setError({ ...error, email: 'Invalid Email' });
		} else {
			setError({ ...error, email: '' });
		}
		setEmail(e.target.value);
	};

	const handlePhoneChange = (e) => {
		const phoneRegex = /^[0-9]{11}$/;
		if (!phoneRegex.test(e.target.value)) {
			setError({ ...error, phone: 'Invalid Phone Number' });
		} else {
			setError({ ...error, phone: '' });
		}
		setPhone(e.target.value);
	};

	const handleCnicChange = (e) => {
		const cnicRegex = /^[0-9]{13}$/;
		if (!cnicRegex.test(e.target.value)) {
			setError({ ...error, cnic: 'Invalid CNIC' });
		} else {
			setError({ ...error, cnic: '' });
		}
		setCnic(e.target.value);
	};

	const handleSignUp = () => {
		const data = {
			username,
			email,
			password,
			address,
			phone,
			cnic
		};
		axios
			.post('sign-up', data)
			.then((res) => {
				console.log(res);
				window.location.href = '/signin';
			})
			.catch((err) => {
				console.log(err);
				if (err.response.data.duplicate_username) {
					toast.error('User already exists');
				} else {
					toast.error('Error Signing Up');
				}
			});
	};

	return (
		<div className={Styles.SignIn}>
			<div className={Styles.image}>
				<div className={Styles.content}>
					<span className={Styles.heading}>Unveil Pakistan's beauty</span>
					<br />
					<span className={Styles.subtext}>
						Explore the beauty of Pakistan by maximizing your travel experience
						with Top Rated Tour Providers at affordable rates
					</span>
				</div>
			</div>
			<div className={Styles.form}>
				<div className={Styles.formcontent}>
					<div className={Styles.logo}>
						<Image
							src={require('../../assets/Travel-Pakistan-Logo.png')}
							alt="Logo"
							className={Styles.logoimg}
						/>
					</div>
					<div>
						<span className={Styles.signinheading}>Create an account</span>
						<form>
							<input
								placeholder="Username"
								className={Styles.name}
								required
								onChange={(e) => setUsername(e.target.value)}
							/>
							<input
								placeholder="Email Address"
								className={Styles.email}
								required
								onChange={handleEmailChange}
							/>
							{
								error.email && <span className={Styles.error}>{error.email}</span>
							}
							<input
								type="password"
								placeholder="Password"
								className={Styles.password}
								required
								onChange={(e) => setPassword(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Phone Number"
								className={Styles.name}
								required
								onChange={handlePhoneChange}
							/>
							{
								error.phone && <span className={Styles.error}>{error.phone}</span>
							}
							<input
								type="text"
								placeholder="Address"
								className={Styles.name}
								required
								onChange={(e) => setAddress(e.target.value)}
							/>
							<input
								type="text"
								placeholder="CNIC"
								className={Styles.name}
								required
								onChange={handleCnicChange}
							/>
							{
								error.cnic && <span className={Styles.error}>{error.cnic}</span>
							}
							<button
								className={Styles.loginbtn}
								onClick={(e) => {
									e.preventDefault();
									handleSignUp();
								}}
							>Sign up</button>
							<div className={Styles.noaccount}>
								<span>
									Existing User?
									<span
										className={Styles.redirectlink}
										onClick={(e) => {
											e.preventDefault();
											window.location.href = '/signin';
										}}
									>
										Login
									</span>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer
				position='bottom-center'
			/>
		</div>
	);
}

export { SignUp };
