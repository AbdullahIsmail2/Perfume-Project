import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
	<div
		className="app__aboutus app__bg flex__center section__padding"
		id="about"
		style={{ paddingBottom: "10rem" }}
	>
		{/* <div className="app__aboutus-overlay flex__center"> */}
		{/* <img src={images.G} alt="G_overlay" /> */}
		{/* </div> */}

		<div className="app__aboutus-content flex__center" style={{ gap: "6rem" }}>
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">About Us</h1>
				<img src={images.perfume100} alt="about_spoon" className="spoon__img" />
				<p className="p__opensans">
					Welcome to Arome D'Ayman, where passion meets sophistication. We
					curate exquisite fragrances to inspire and enchant, celebrating
					individuality and timeless elegance in every bottle we offer.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div>

			{/* <div className="app__aboutus-content_knife flex__center"> */}
			{/* <img src={images.knife} alt="about_knife" /> */}
			{/* </div> */}

			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">Our History</h1>
				<img src={images.perfume100} alt="about_spoon" className="spoon__img" />
				<p className="p__opensans">
					Rooted in a rich heritage of perfumery, our journey began with a
					vision for elegance and innovation. Over years, we've crafted timeless
					scents, blending tradition with modernity to captivate senses.
				</p>
				<button type="button" className="custom__button">
					Know More
				</button>
			</div>
		</div>
	</div>
);

export default AboutUs;
