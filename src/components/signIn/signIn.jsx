import Styles from './signIn.module.scss';

function SignIn() {
	return (
		<div className={Styles.SignIn}>
			<div className={Styles.image}>
				<div>
					<span className={Styles.heading}>Explore Pakistan With Us!</span><br/>
					<span className={Styles.subtext}>Its time to unfold the beauty of Pakistan!</span>
				</div>
			</div>
			<div className={Styles.form}></div>
		</div>
	);
}

export { SignIn };
