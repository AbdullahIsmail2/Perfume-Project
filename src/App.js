import React from "react";

import {
	AboutUs,
	Footer,
	Gallery,
	Hero,
	Products,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
	<div>
		<Navbar />
		<Hero />
		<AboutUs />
		<Products />
		<Gallery />
		<Footer />
	</div>
);

export default App;
