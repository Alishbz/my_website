import React, { useEffect } from "react";
import Carousel from "better-react-carousel";
import { BrowserView, MobileView } from "react-device-detect";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import "./works.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Works() {
	useEffect(() => {
		AOS.init({ disable: window.innerWidth < 768 });
	}, []);
	return (
		<div className="works" id="section-3">
			<div className="myworks">
				<div className="myworkstitle" data-aos="fade-up">
					Expertises
				</div>
				<div className="worksline" data-aos="fade-up"></div>
			</div>
			<div className="herearemyworks" data-aos="fade-up">
				My Professional Fields of Expertise
			</div>
			<BrowserView className="browserview">
				<div className="cardscontainer">
					<div className="cards" data-aos="zoom-in">
						<div className="cardsbgimg" />
						<div className="cardcontent">
							<p className="cardtext">Robotic Projects - Mechanic Design - Complex Algorithms </p>

						</div>
					</div>
					<div className="cards1" data-aos="zoom-in">
						<div className="cardsbgimg1" />
						<div className="cardcontent">
							<p className="cardtext"> Motor Control - Sensors - Measurement control technologies and special solutions </p>

						</div>
					</div>
				</div>
				<div className="cardscontainer">
					<div className="cards2" data-aos="zoom-in">
						<div className="cardsbgimg2" />
						<div className="cardcontent">
							<p className="cardtext">
								PCB Design and Specialized Engineering Problem Solving
							</p>

						</div>
					</div>
					<div className="cards3" data-aos="zoom-in">
						<div className="cardsbgimg3" />
						<div className="cardcontent">
							<p className="cardtext">Pro Firmware Design C/C++ - Embedded Linux</p>

						</div>
					</div>
				</div>
				<div className="cardscontainer">
					<div className="cards4" data-aos="zoom-in">
						<div className="cardsbgimg4" />
						<div className="cardcontent">
							<p className="cardtext"> Algo Trade Bots , HFT , Quant Software Developer </p>

						</div>
					</div>
					<div className="cards5" data-aos="zoom-in">
						<div className="cardsbgimg5" />
						<div className="cardcontent">
							<p className="cardtext"> High Level Software Design - GUI - Backend Services - Image Process - C++ </p>

						</div>
					</div>
				</div>
			</BrowserView>
			<MobileView className="workscontmobile">
				<Carousel
					cols={1}
					rows={1}
					gap={20}
					loop
					mobileBreakpoint={768}
					className="workscarousel"
				>
					<Carousel.Item className="workscarouselitems">
						<div className="cards" data-aos="zoom-in">
							<div className="cardsbgimg" />
							<div className="cardcontent">
								<p className="cardtext">TUBITAK Project Named Cell Project</p>
								<div className="cardbuttons">
									<a
										href="https://cell-project.netlify.app/"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<HiOutlineExternalLink /> Demo
										</button>
									</a>
									<a
										href="https://github.com/Alishbz/Trader_Bot"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<AiOutlineGithub /> Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="cards1" data-aos="zoom-in">
							<div className="cardsbgimg1" />
							<div className="cardcontent">
								<p className="cardtext">n3wcr4ft Website </p>
								<div className="cardbuttons">
									<a
										href="https://n3c4-website.netlify.app/"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<HiOutlineExternalLink /> Demo
										</button>
									</a>
									<a
										href="https://github.com/Alishbz/Trader_Bot"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<AiOutlineGithub /> Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="cards2" data-aos="zoom-in">
							<div className="cardsbgimg2" />
							<div className="cardcontent">
								<p className="cardtext">
									Graduation Project Named Engelsiz Terapi
								</p>
								<div className="cardbuttons">
									<a
										href="https://engelsizterapi.netlify.app/"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<HiOutlineExternalLink /> Demo
										</button>
									</a>
									<a
										href="https://github.com/Alishbz/Trader_Bot"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<AiOutlineGithub /> Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
				<Carousel
					cols={1}
					rows={1}
					gap={20}
					loop
					mobileBreakpoint={768}
					className="workscarousel"
				>
					<Carousel.Item className="workscarouselitems">
						<div className="cards3" data-aos="zoom-in">
							<div className="cardsbgimg3" />
							<div className="cardcontent">
								<p className="cardtext">My Portfolio Website</p>
								<div className="cardbuttons">
									<a
										href="https://github.com/Alishbz/Trader_Bot"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<HiOutlineExternalLink /> Demo
										</button>
									</a>
									<a
										href="https://github.com/Alishbz/Trader_Bot"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<AiOutlineGithub /> Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="cards4" data-aos="zoom-in">
							<div className="cardsbgimg4" />
							<div className="cardcontent">
								<p className="cardtext">Backend Project for Engelsiz Terapi</p>
								<div className="cardbuttons">
									<a
										href="https://github.com/Alishbz/Trader_Bot"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<AiOutlineGithub /> Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="cards5" data-aos="zoom-in">
							<div className="cardsbgimg5" />
							<div className="cardcontent">
								<p className="cardtext">
									Timeline Project named n3wcr4ft Local
								</p>
								<div className="cardbuttons">
									<a
										href="https://timelinexample.netlify.app/"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<HiOutlineExternalLink /> Demo
										</button>
									</a>
									<a
										href="https://github.com/Alishbz/Trader_Bot"
										rel="noreferrer"
										target="_blank"
									>
										<button className="cardbutton">
											<AiOutlineGithub /> Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
			</MobileView>
		</div>
	);
}

export default Works;
