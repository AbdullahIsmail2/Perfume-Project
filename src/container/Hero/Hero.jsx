import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Hero.css";

const Hero = () => (
	<div className="app__hero app__wrapper section__padding" id="home">
	<div className="app__wrapper_info">
		<SubHeading title="Savor the Essence of Opulence" />
		<h1 className="app__hero-h1">A Legacy of Luxury</h1>
		<p className="p__opensans" style={{ margin: "2rem 0" }}>
			Explore our curated collection of exquisite fragrances, crafted with
			passion and expertise to evoke timeless elegance and sophistication{" "}
		</p>
		<button type="button" className="custom__button">
			Explore Menu
		</button>
	</div>

	<div className="app__wrapper_img app__hero-img">
		<img src={images.jaguar} alt="hero_img" />
	</div>
</div>
);

export default Hero;
