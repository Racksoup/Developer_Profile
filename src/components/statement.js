import React from "react";
import "../componentcss/statement.css";
import { Button, ButtonGroup } from "reactstrap";
import facebookImg from "../images/facebook.png";
import gitImg from "../images/github.png";
import linkImg from "../images/linkedin.png";
import stackImg from "../images/stackoverflow.png";

function Statement() {
	return (
		<section id="statement" className="statement">
			<div className="statementBlock">
				<div className="statementText">User Experience / User Interface</div>
				<div className="statementText">Designer / Developer</div>
				<Button> Contact Me </Button>
				<ButtonGroup className="contactButtons">
					<Button color="icon">
						<a href="https://www.facebook.com/connor.rack">
							<img src={facebookImg} className="contactIcon" />
						</a>
					</Button>
					<Button color="icon">
						<a href="https://github.com/Racksoup">
							<img src={gitImg} className="contactIcon" />
						</a>
					</Button>
					<Button color="icon">
						<a href="https://www.linkedin.com/in/connor-rack-9066b2193/">
							<img src={linkImg} className="contactIcon" />
						</a>
					</Button>
					<Button color="icon">
						<a href="https://stackoverflow.com/users/12059425/racksoup">
							<img src={stackImg} className="contactIcon" />
						</a>
					</Button>
				</ButtonGroup>
			</div>
		</section>
	);
}

export default Statement;
