import React, { useEffect } from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";
import me from "../assets/me.png";
import cv from "../assets/Ali Sahbaz_CV_vers_1.06.pdf";
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
					Hi, I'm Ali Şahbaz
				</div>
				<div data-aos="fade-up">
					<TypeAnimation
						sequence={["C++ Developer", 1200, "Embedded Developer", 1200, "Game Developer", 1200, "Quant Developer", 1200, "Trader", 1200]}
						speed={30}
						wrapper="div"
						repeat={Infinity}
						className="typinganimation"
					/>
				</div>
				<div className="aboutme" data-aos="fade-up">
					<p>
						I am a seasoned C++ and embedded software developer with extensive experience in the field. My interests extend to trading applications, game development, artificial intelligence, computer vision, machine learning, and embedded Linux. Passionate about crafting innovative solutions, I continually explore technologies that shape the future.
					</p>
				</div>
				<div className="buttons" data-aos="fade-up">
					<button className="hirebutton" onClick={handleClickScroll}>
						Hire Me
					</button>
					<a
						href={cv}
						download="Ali Sahbaz_CV_vers_1.06"
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
						href="https://github.com/Alishbz"
						rel="noreferrer"
						target="_blank"
					>
						<AiFillGithub className="icon1" size={40} />
					</a>
					<a
						href="https://www.linkedin.com/in/ali-%C5%9Fahbaz-6588a8115/"
						rel="noreferrer"
						target="_blank"
					>
						<AiFillLinkedin className="icon2" size={40} />
					</a>
					<a
						href=""
						rel="noreferrer"
						target="_blank"
					>
						<AiFillInstagram className="icon3" size={40} />
					</a>
					<a
						href=""
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
