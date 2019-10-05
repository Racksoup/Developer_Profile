import React from "react";
import "../componentcss/projects.css";
import Vegesoup from "../images/vegesoup.jpg";

function Projects() {
	return (
		<section id="projects" className="projects">
			<hr className="leftProjectLine" />
			<div className="projectTitle"> Projects </div>
			<hr className="rightProjectLine" />
			<div className="projectInfo">
				Below you can see some of the projects I've been working on lately. I
				currently spend most of my time building webites for local businesses,
				focusing on builds powered by React and Bootstrap
			</div>
			<div className="previewGrid">
				<a
					className="preview1"
					href="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png"
				>
					<img src={Vegesoup} className="previewImg" />
				</a>
				<a
					className="preview2"
					href="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png"
				>
					<img src={Vegesoup} className="previewImg" />
				</a>
				<a
					className="preview3"
					href="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png"
				>
					<img src={Vegesoup} className="previewImg" />
				</a>
				<a
					className="preview4"
					href="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png"
				>
					<img src={Vegesoup} className="previewImg" />
				</a>
				<a
					className="preview5"
					href="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png"
				>
					<img src={Vegesoup} className="previewImg" />
				</a>
				<a
					className="preview6"
					href="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thumbs-up.png"
				>
					<img src={Vegesoup} className="previewImg" />
				</a>
			</div>
		</section>
	);
}

export default Projects;
