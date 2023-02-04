import { Image } from 'react-bootstrap';
import Styles from './signUp.module.scss';

function SignUp() {
	return (
		<div className={Styles.SignIn}>
			<div className={Styles.image}>
				<div>
					<span className={Styles.heading}>Creating experiences worldwide</span>
					<br />
					<span className={Styles.subtext}>
            Explore the beauty of Pakistan by maximizing your travel experience<br/>
            with Top Rated Tour Providers at affordable rates
					</span>
				</div>
			</div>
			<div className={Styles.form}>
				<div className={Styles.formcontent}>
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
							<button className={Styles.loginbtn}>SignUp</button>
							<div className={Styles.noaccount}>
								<span>
                  Existing User?

									<span className={Styles.redirectlink}>Login</span>
								</span>
							</div>
							<div className={Styles.borderline}>
								<hr />
								<span>Or</span>
								<hr />
							</div>
							<div className={Styles.sociallogin}>
								<span>Sign Up Using</span>
								<Image src={require('../../assets/google.png')} alt="Google" />
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

export { SignUp };
