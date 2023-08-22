import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { BiLogoVuejs } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { SiProcessingfoundation } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import "./skill.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="skills" id="section-2">
			<div className="myskills">
				<div className="myskillstitle" data-aos="fade-up">
					My Skills
				</div>
				<div className="line" data-aos="fade-up"></div>
			</div>
			<div className="herearemyskills" data-aos="fade-up">
				Here are my skills,
			</div>
			<div className="skillscont">
				<div className="loadings">
					<div className="load" data-aos="fade-up">
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								gap: ".5vw",
								alignItems: "center",
							}}
						>
							<FaReact size={25} /> ReactJS
						</div>
						<div className="progress-6" style={{ color: "#68dbfb" }}></div>
					</div>
					<div className="load" data-aos="fade-up">
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								gap: ".5vw",
								alignItems: "center",
							}}
						>
							<BiLogoVuejs size={30} /> VueJS
						</div>
						<div className="progress-6" style={{ color: "#48ba87" }}></div>
					</div>
					<div className="load" data-aos="fade-up">
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								gap: ".5vw",
								alignItems: "center",
							}}
						>
							<BiLogoJavascript size={30} /> JavaScript
						</div>

						<div className="progress-6" style={{ color: "#f7e02a" }}></div>
					</div>
					<div className="load" data-aos="fade-up">
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								gap: ".5vw",
								alignItems: "center",
							}}
						>
							<BiLogoHtml5 size={30} /> HTML
						</div>
						<div className="progress-6" style={{ color: "#e5532f" }}></div>
					</div>
					<div className="load" data-aos="fade-up">
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								gap: ".5vw",
								alignItems: "center",
							}}
						>
							<BiLogoCss3 size={30} />
							CSS
						</div>
						<div className="progress-6" style={{ color: "#2d53e5" }}></div>
					</div>
					<div className="load" data-aos="fade-up">
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								gap: ".5vw",
								alignItems: "center",
							}}
						>
							<SiProcessingfoundation size={25} />
							p5.js
						</div>
						<div className="progress-6" style={{ color: "#ee2963" }}></div>
					</div>
					and more...
				</div>
				<div className="skillicons">
					<div className="icons" data-aos="zoom-in">
						<div className="icon11">
							<SiPython size={70} /> Python
						</div>
						<div className="icon22">
							<SiNodedotjs size={70} /> NodeJS
						</div>
					</div>
					<div className="icons" data-aos="zoom-in">
						<div className="icon11">
							<SiAmazonaws size={70} /> AWS
						</div>
						<div className="icon22">
							<SiMongodb size={70} /> MongoDB
						</div>
					</div>
					<div className="icons" data-aos="zoom-in">
						<div className="icon11">
							<SiStrapi size={70} /> Strapi
						</div>
						<div className="icon22">
							<SiPostman size={70} /> Postman
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
