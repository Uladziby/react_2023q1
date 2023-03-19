/** @format */
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

let activeStyle = {
	background: "#66999b",
	color: "white",
	minWidth: "80px",
	padding: "0 2rem",
	transition: "all 1s easy",
};

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__top}>
				<div className={styles.navlinks}>
					<NavLink
						className={styles.navlink}
						to={"/"}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Main
					</NavLink>
					<NavLink
						className={styles.navlink}
						to={"/aboutus"}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						About Us
					</NavLink>
				</div>
			</div>
			<div className={styles.header__bottom}></div>
			<div className={styles.header__logo}></div>
		</header>
	);
};

export default Header;
