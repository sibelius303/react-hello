import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="row">
				<Card img= "https://picsum.photos/200/300?random=1"/>
				<Card img= "https://picsum.photos/200/300?random=2"/>
				<Card img= "https://picsum.photos/200/300?random=3"/>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
