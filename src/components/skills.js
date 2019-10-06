import React from "react";
import "../componentcss/skills.css";
import Htmlx from "../images/html5.png";
import Cssx from "../images/css3.png";
import Sassx from "../images/sass.png";
import Reactx from "../images/react.png";
import Bootstrapx from "../images/bootstrap.png";
import Reduxx from "../images/redux.png";
import Webpackx from "../images/webpack.png";
import Applex from "../images/apple.png";
import Photoshopx from "../images/photoshop.png";
import Nodejsx from "../images/node.png";
import Expressx from "../images/express.png";
import Mongoosex from "../images/mongoose.jpg";
import Mogodbx from "../images/mongodb.jpg";
import Mysqlx from "../images/mysql.png";
import Awsx from "../images/aws.png";
import Sublimex from "../images/sublime.png";
import Npmx from "../images/npm.png";
import Herokux from "../images/heroku.png";
import Githubx from "../images/github.png";
import Wordpressx from "../images/wordpress.png";

function Skills() {
	return (
		<section id="skills" className="skills">
			<hr className="skillsLeftLine" />
			<div className="skillsTitle"> Skills </div>
			<hr className="skillsRightLine" />
			<div className="skillsInfo">
				My current development process takes full advantage of Sublime text,
				React, Bootstrap. However, any good designer can design in any medium
				just like any good developer can program in any language.
			</div>
			<div className="skillsGrid">
				<div className="frontend" />
				<div className="frontendTitle"> Front-End </div>
				<div className="backend" />
				<div className="backendTitle"> Back-End </div>
				<div className="tools" />
				<div className="toolsTitle"> Tools </div>
				<div className="htmlx">
					<img src={Htmlx} className="skillsImg" />
				</div>
				<div className="cssx">
					<img src={Cssx} className="skillsImg" />
				</div>
				<div className="sassx">
					<img src={Sassx} className="skillsImg" />
				</div>
				<div className="reactx">
					<img src={Reactx} className="skillsImg" />
				</div>
				<div className="bootstrapx">
					<img src={Bootstrapx} className="skillsImg" />
				</div>
				<div className="reduxx">
					<img src={Reduxx} className="skillsImg" />
				</div>
				<div className="webpackx">
					<img src={Webpackx} className="skillsImg" />
				</div>
				<div className="applex">
					<img src={Applex} className="skillsImg" />
				</div>
				<div className="photoshopx">
					<img src={Photoshopx} className="skillsImg" />
				</div>
				<div className="nodejsx">
					<img src={Nodejsx} className="skillsImg" />
				</div>
				<div className="expressx">
					<img src={Expressx} className="skillsImg" />
				</div>
				<div className="mongoosex">
					<img src={Mongoosex} className="skillsImg" />
				</div>
				<div className="mongodbx">
					<img src={Mogodbx} className="skillsImg" />
				</div>
				<div className="mysqlx">
					<img src={Mysqlx} className="skillsImg" />
				</div>
				<div className="awsx">
					<img src={Awsx} className="skillsImg" />
				</div>
				<div className="npmx">
					<img src={Npmx} className="skillsImg" />
				</div>
				<div className="sublimex">
					<img src={Sublimex} className="skillsImg" />
				</div>
				<div className="herokux">
					<img src={Herokux} className="skillsImg" />
				</div>
				<div className="githubx">
					<img src={Githubx} className="skillsImg" />
				</div>
				<div className="wordpressx">
					<img src={Wordpressx} className="skillsImg" />
				</div>
			</div>
		</section>
	);
}

export default Skills;
