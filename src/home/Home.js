import React, { useEffect } from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import me from "../assets/me.png";
import cv from "../assets/SamiErogluCV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
	useEffect(() => {
		AOS.init({ disable: window.innerWidth < 768 });
	}, []);

	const handleClickScroll = () => {
		const element = document.getElementById("section-5");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className="home" id="section-1">
			<div className="cont">
				<div className="hello" data-aos="fade-up">
					Hello, I'm Sami Eroglu
				</div>
				<div data-aos="fade-up">
					<TypeAnimation
						sequence={["Web Developer", 2000, "Freelancer", 2000, ""]}
						speed={30}
						wrapper="div"
						repeat={Infinity}
						className="typinganimation"
					/>
				</div>
				<div className="aboutme" data-aos="fade-up">
					<p>
						I'm an engineer passionate about creative problem-solving. Driven by
						curiosity, I excel at challenges within teams. With keen attention
						to detail, I aim to bring innovative solutions to projects,
						contributing to technological advancement.
					</p>
				</div>
				<div className="buttons" data-aos="fade-up">
					<button className="hirebutton" onClick={handleClickScroll}>
						Hire Me
					</button>
					<a
						href={cv}
						download="SamiErogluCV"
						target="_blank"
						rel="noopener noreferrer"
						style={{ textDecoration: "none" }}
					>
						<button className="resumebutton">
							Resume <HiDownload />
						</button>
					</a>
				</div>
				<div className="smicons" data-aos="zoom-in">
					<a
						href="https://github.com/SamiEroglu"
						rel="noreferrer"
						target="_blank"
					>
						<AiFillGithub className="icon1" size={40} />
					</a>
					<a
						href="https://www.linkedin.com/in/sami-ero%C4%9Flu-37614b26a/"
						rel="noreferrer"
						target="_blank"
					>
						<AiFillLinkedin className="icon2" size={40} />
					</a>
					<a
						href="https://www.instagram.com/ergl.sami/"
						rel="noreferrer"
						target="_blank"
					>
						<AiFillInstagram className="icon3" size={40} />
					</a>
					<a
						href="https://samieroglu-portfolio.netlify.app/"
						rel="noreferrer"
						target="_blank"
					>
						<HiDocumentText className="icon4" size={40} />
					</a>
				</div>
			</div>
			<div className="cont1">
				<img className="mephoto" data-aos="fade-up" src={me} alt=""></img>
				<div className="circle1" data-aos="fade-down"></div>
				<div className="circle2" data-aos="fade-down"></div>
			</div>
		</div>
	);
}

export default Home;
