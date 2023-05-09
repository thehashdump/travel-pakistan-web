/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Image } from 'react-bootstrap';
import axios from '../../utils/axiosConfig';
import Styles from './signIn.module.scss';

function SignIn() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn = () => {
		const data = {
			username,
			password
		};
		axios.post('sign-in', data).then((res) => {
			localStorage.setItem('user', JSON.stringify(res.data.user));
			window.location.href = '/';
		}).catch((err) => {
			console.log(err);
			toast.error('Invalid Credentials');
		});
	};

	return (
		<div className={Styles.SignIn}>
			<div className={Styles.image}>
				<div className={Styles.content}>
					<span className={Styles.heading}>Explore Pakistan With Us!</span>
					<br />
					<span className={Styles.subtext}>
						Its time to unfold the beauty of Pakistan!
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
						<span className={Styles.signinheading}>Sign in</span>
						<form>
							<input
								placeholder="Username"
								className={Styles.email}
								required
								onChange={(e) => { setUsername(e.target.value); }}
							/>
							<input
								type="password"
								placeholder="Password"
								className={Styles.password}
								required
								onChange={(e) => { setPassword(e.target.value); }}
							/>
							<button
								className={Styles.loginbtn}
								onClick={(e) => {
									e.preventDefault();
									handleSignIn(e);
								}}
							>Login</button>
							<div className={Styles.noaccount}>
								<span>
									Not have an account?
									<span
										className={Styles.redirectlink}
										onClick={(e) => {
											e.preventDefault();
											window.location.href = '/signup';
										}}
									>
										SignUp
									</span>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
			<ToastContainer
				position="bottom-center"
			/>
		</div>
	);
}

export { SignIn };
