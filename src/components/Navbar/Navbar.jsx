import React from "react";
import { useState } from "react";
import "./Navbar.css";
// import "../.././App.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleHamburgerToggle = () => {
		setMenuOpen(!menuOpen);
	};

	const handleCloseIcon = () => {
		setMenuOpen(false);
	};

	return (
		<nav className="nav">
			<h4 className="nav-logo">
				<a href="/">Arôme d'Ayman </a>
			</h4>

			<ul className="nav__list">
				<li className="nav__list-item p__opensans">
					<a href="#about">About</a>
				</li>
				<li className="nav__list-item p__opensans">
					<a href="#products">Products</a>
				</li>
				<li className="nav__list-item p__opensans">
					<a href="#testimonials">Testimonies</a>
				</li>
				<li className="nav__list-item p__opensans">
					<a href="#find-us">Find Us</a>
				</li>
				<li className="nav__list-item p__opensans">
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="nav-actions">
				<a href="/" className="p__opensans">
					Login
				</a>
				<div className="nav-actions-seperator" />
				<a href="#contact" className="p__opensans">
					Place Order
				</a>
			</div>

			<div className="nav__hamburger">
				<GiHamburgerMenu
					color="fff"
					fontSize={27}
					onClick={() => handleHamburgerToggle()}
				/>
			</div>

			<div
				className={`nav__second-menu ${
					menuOpen ? "nav__second-menu-open" : "nav__second-menu-closed"
				}`}
			>
				<div className="nav__second-menu-icon">
					<MdOutlineRestaurantMenu
						color="#DCCA87"
						fontSize={27}
						onClick={() => handleCloseIcon()}
					/>
				</div>
				<ul className="nav__second-menu-list">
					<li className="p__opensans">
						<a href="#about">About</a>
					</li>
					<li className="p__opensans">
						<a href="#products">Products</a>
					</li>
					<li className="p__opensans">
						<a href="#testimonials">Testimonies</a>
					</li>
					<li className="p__opensans">
						<a href="#find-us">Find Us</a>
					</li>
					<li className="p__opensans">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
