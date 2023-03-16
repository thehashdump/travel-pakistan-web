import { Image } from 'react-bootstrap';
import Styles from './signUp.module.scss';

function SignUp() {
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
							<input placeholder="Name" className={Styles.name} required />
							<input
								placeholder="Email Address"
								className={Styles.email}
								required
							/>
							<input
								type="password"
								placeholder="Password"
								className={Styles.password}
								required
							/>
							<button
								className={Styles.loginbtn}
								onClick={(e) => {
									e.preventDefault();
									window.location.href = '/signin';
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
							<div className={Styles.borderline}>
								<hr />
								<span>Or</span>
								<hr />
							</div>
							<div className={Styles.sociallogin}>
								<span>Sign Up Using</span>
								<Image
									src={require('../../assets/google.png')}
									alt="Google"
									className={Styles.icon}
								/>
								<Image
									src={require('../../assets/facebook.png')}
									alt="Facebook"
									className={Styles.icon}
								/>
								<Image
									src={require('../../assets/twitter.png')}
									alt="Twitter"
									className={Styles.icon}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export { SignUp };
