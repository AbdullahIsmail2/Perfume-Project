import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Hero.css";

const Hero = () => (
	<div className="hero section__padding" id="home">
		<div className="hero__info">
			<SubHeading title="Explore Exquisite Scents" />
			<h1 className="hero__info__title">
				Unveiling Elegance: The Essence of Luxury
			</h1>
			<p className="p__opensans" style={{ margin: "2rem 0" }}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
				aperiam possimus velit inventore a provident magnam itaque ab! Quidem,
				beatae.
			</p>
			<button type="button" className="custom__button">
				Explore Range
			</button>
		</div>
		<div className="hero__img-wrapper">
			<img src={images.welcome} alt="img" />
		</div>
	</div>
);

export default Hero;
