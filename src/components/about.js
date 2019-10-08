import React from "react";
import "../componentcss/about.css";
import { Button } from "reactstrap";
import Underline from "../images/underline.png";

function About() {
	return (
		<section id="about" className="about">
			<hr className="leftLine" size="20" />
			<div className="aboutTitle">About Connor</div>
			<hr className="rightLine" />
			<div className="aboutText">
				My career began in Ottawa where I learned to Design Beautiful UI's to
				create the Best User Experience possible
			</div>
			<div className="underline">
				<img src={Underline} className="underlineImg" />
			</div>
			<div className="infoText1">
				If you know one thing about me it's that I love my dog and I love to
				bring him everywhere I go. The whole city of Ottawa is our playground.
				Whether we are playing fetch, out for a run or, just relaxing, we are
				always having a good time.
			</div>
			<div className="infoText2">
				when we aren't in Ottawa I'll usually be spending time doing archery in
				the mountains just north in Quebec. Me and my dog Neo love to run and
				play in the forest. If we dont go for a run most day, I start going
				crazy.
			</div>
			<div className="infoText3">
				The forest is a quiet and peaceful place. Perfect for building my
				development skills. As much as I like the forest, I always find myself
				coming back to the city I love. I Probably love the city so much because
				there is no Tim Horton's in the forest, and I run on coffee.
			</div>
			<a href="#projects" className="projectsButton">
				<Button> View Recent Projects </Button>
			</a>
		</section>
	);
}

export default About;
