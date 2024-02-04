import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Founder.css";

const Founder = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img-reverse" >
			<img src={images.pen} alt="founder_image" style={{height: '100%', width: '100%',objectFit: 'cover' }} className="pen-img" />
		</div>
		<div className="app__wrapper_info">
			<SubHeading title="Founder's word" />
			<h1 className="headtext__cormorant">What we believe in</h1>

			<div className="app__founder-content">
					<img src={images.quote} className="first-quote" alt="quote_image" />
					<p className="p__opensans">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
						auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
						sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
						molestie lectus eu. Congue iaculis integer curabitur semper sit
						nunc.{" "}
					</p>
					<img src={images.quote} className="second-quote" alt="quote_image" />
			</div>

			<div className="app__founder-sign">
				<p style={{margin: '1.5rem 0'}}>Ayman A.</p>
				<p className="p__opensans">Founder</p>
				{/* <img src={images.sign} alt="sign_image" /> */}
			</div>
		</div>
	</div>
);

export default Founder;
