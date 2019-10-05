import React from "react";
import "../componentcss/about.css";
import { Button } from "reactstrap";

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
			<div className="infoText1">
				If you know one thing about me it's that i love my dog and i love to
				bring him everywhere i go. the whole city of ottawa is our playground.
			</div>
			<div className="infoText2">
				when we aren't in Ottawa I'll usually be spending time doing archery in
				the mountains just north in quebec. Me and my dog Neo love to run and
				play in the forest. If we dont get to run
			</div>
			<div className="infoText3">
				The forest is a quiet and peaceful place. perfect for working on my web
				development. As much as i like the forest, I always find myself coming
				back to the city I love. I Probably love the city so much because there
				is no Tim Horton's in the forest, and I run on coffee.
			</div>
			<Button className="projectsButton"> View Recent Projects </Button>
		</section>
	);
}

export default About;
