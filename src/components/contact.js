import React from "react";
import "../componentcss/contact.css";
import facebookImg from "../images/facebook.png";
import gitImg from "../images/github.png";
import linkImg from "../images/linkedin.png";
import stackImg from "../images/stackoverflow.png";
import Signature from "../images/signature.jpg";
import { Button } from "reactstrap";

function Contact() {
	return (
		<section id="contact" className="contact">
			<hr className="contactLeftLine" size="20" />
			<div className="contactTitle">Contact</div>
			<hr className="contactRightLine" />
			<div className="contactInfo">Want to chat about something?</div>
			<Button className="contactBtn"> Contact Me </Button>
			<div className="contactBtns">
				<button className="contactBtnStyle">
					<img src={facebookImg} className="contactBtnImg" />
				</button>
				<button className="contactBtnStyle">
					<img src={gitImg} className="contactBtnImg" />
				</button>
				<button className="contactBtnStyle">
					<img src={linkImg} className="contactBtnImg" />
				</button>
				<button className="contactBtnStyle">
					<img src={stackImg} className="contactBtnImg" />
				</button>
			</div>
			<div className="signature">
				<img className="signatureImg" src={Signature} />
			</div>
		</section>
	);
}

export default Contact;
