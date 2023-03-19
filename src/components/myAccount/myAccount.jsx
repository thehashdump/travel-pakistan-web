import Styles from "./myAccount.module.scss";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

function MyAccount() {
	return (
		<div className={Styles.myAccount}>
			<div className={Styles.top}>
				<Navbar />
				<div className={Styles.divTop}>
					<span>Welcome, Syed Aitezaz Shah</span>
				</div>
			</div>
            <Footer/>
        </div>    
	);
}

export { MyAccount };
