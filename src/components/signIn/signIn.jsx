import { Image } from 'react-bootstrap';
import Styles from './signIn.module.scss';

function SignIn() {
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
							<input placeholder="Email Address" className={Styles.email} required/>
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
									window.location.href = '/';
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
							<div className={Styles.borderline}>
								<hr/>
								<span>Or</span>
								<hr/>
							</div>
							<div className={Styles.sociallogin}>
								<span>Login Using</span>
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

export { SignIn };
