import React from "react";
import { images } from "../../constants";
const SubHeading = ({ title }) => (
	<div className="hero__subheader">
		<img src={images.perfume100} alt={""} style={{ width: "35px" }} />
		<p className="p__cormorant">{title}</p>
	</div>
);

export default SubHeading;
