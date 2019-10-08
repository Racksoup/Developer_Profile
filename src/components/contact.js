import React from "react";
import "../componentcss/contact.css";
import facebookImg from "../images/facebook.png";
import gitImg from "../images/github.png";
import linkImg from "../images/linkedin.png";
import stackImg from "../images/stackoverflow.png";
import Signature from "../images/signature.png";
import { Button } from "reactstrap";
import Modalx from "./modal";

function Contact() {
	return (
		<section id="contact" className="contact">
			<hr className="contactLeftLine" size="20" />
			<div className="contactTitle">Contact</div>
			<hr className="contactRightLine" />
			<div className="contactInfo">Want to chat about something?</div>
			<div className="contactBtn">
				<Modalx />
			</div>
			<div className="contactBtns">
				<button className="contactBtnStyle">
					<a href="https://www.facebook.com/connor.rack">
						<img src={facebookImg} className="contactBtnImg" />
					</a>
				</button>
				<button className="contactBtnStyle">
					<a href="https://github.com/Racksoup">
						<img src={gitImg} className="contactBtnImg" />
					</a>
				</button>
				<button className="contactBtnStyle">
					<a href="https://www.linkedin.com/in/connor-rack-9066b2193">
						<img src={linkImg} className="contactBtnImg" />
					</a>
				</button>
				<button className="contactBtnStyle">
					<a href="https://stackoverflow.com/users/12059425/racksoup">
						<img src={stackImg} className="contactBtnImg" />
					</a>
				</button>
			</div>
			<div className="signature">
				<img className="signatureImg" src={Signature} />
			</div>
		</section>
	);
}

export default Contact;
