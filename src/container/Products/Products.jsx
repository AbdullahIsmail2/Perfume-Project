import React from "react";

import { images, data } from "../../constants";
import { SubHeading, SingleProduct } from "../../components";

import "./Products.css";

const Products = () => (
	<div className="app__products flex__center section__padding" id="products">
		<div className="app__products-title">
			<h1 style={{ marginBottom: "2rem" }} className="headtext__cormorant">
				Range
			</h1>
			<SubHeading title="Indulge in bliss with our curated selection" />
		</div>

		<div className="app__products-range">
			<div className="app__products-range_perfumes flex__center">
				<p className="app__products-range-heading">Perfumes</p>
				<div className="app__products-range_items">
					{data.perfumes.map((perfume, index) => (
						<SingleProduct
							key={perfume.title + index}
							name={perfume.title}
							price={perfume.price}
							vol={perfume.vol}
						/>
					))}
				</div>
			</div>

			<div className="app__products-range-img">
				<img src={images.perfume1} alt="" />
			</div>

			<div className="app__products-range_colognes flex__center">
				<p className="app__products-range-heading ">Colognes</p>
				<div className="app__products-range_items">
					{data.colognes.map((cologne, index) => (
						<SingleProduct
							key={cologne.title + index}
							name={cologne.title}
							price={cologne.price}
							vol={cologne.vol}
						/>
					))}
				</div>
			</div>
		</div>

		<div style={{ marginTop: "15px" }}>
			<button type="button" className="custom__button">
				View More
			</button>
		</div>
	</div>
);

export default Products;
