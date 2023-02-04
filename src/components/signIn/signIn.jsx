import { Image } from 'react-bootstrap';
import Styles from './signIn.module.scss';

function SignIn() {
	return (
		<div className={Styles.SignIn}>
			<div className={Styles.image}>
				<div>
					<span className={Styles.heading}>Explore Pakistan With Us!</span>
					<br />
					<span className={Styles.subtext}>
            Its time to unfold the beauty of Pakistan!
					</span>
				</div>
			</div>
			<div className={Styles.form}>
				<div className={Styles.formcontent}>
					<div>
						<span className={Styles.signinheading}>SignIn</span>
						<form>
							<input placeholder="Email Address" className={Styles.email} required/>
							<input
								type="password"
								placeholder="Password"
								className={Styles.password}
								required
							/>
							<button className={Styles.loginbtn}>Login</button>
							<div className={Styles.noaccount}>
								<span>
                Not have a account?
									<span className={Styles.redirectlink}>SignUp</span>
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
								/>
								<Image
									src={require('../../assets/facebook.png')}
									alt="Facebook"
								/>
								<Image
									src={require('../../assets/twitter.png')}
									alt="Twitter"
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
