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
					My Works
				</div>
				<div className="worksline" data-aos="fade-up"></div>
			</div>
			<div className="herearemyworks" data-aos="fade-up">
				Here are my works.
			</div>
			<BrowserView className="browserview">
				<div className="cardscontainer">
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
									href="https://github.com/SamiEroglu/cellProject"
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
									href="https://github.com/SamiEroglu/n3c4-web"
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
				</div>
				<div className="cardscontainer">
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
									href="https://github.com/SamiEroglu/SeniorProject"
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
					<div className="cards3" data-aos="zoom-in">
						<div className="cardsbgimg3" />
						<div className="cardcontent">
							<p className="cardtext">My Portfolio Website</p>
							<div className="cardbuttons">
								<a
									href="https://samieroglu-portfolio.netlify.app/"
									rel="noreferrer"
									target="_blank"
								>
									<button className="cardbutton">
										<HiOutlineExternalLink /> Demo
									</button>
								</a>
								<a
									href="https://github.com/SamiEroglu/portfolio"
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
				</div>
				<div className="cardscontainer">
					<div className="cards4" data-aos="zoom-in">
						<div className="cardsbgimg4" />
						<div className="cardcontent">
							<p className="cardtext">Backend Project for Engelsiz Terapi</p>
							<div className="cardbuttons">
								<a
									href="https://github.com/SamiEroglu/SeniorProject-Backend"
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
					<div className="cards5" data-aos="zoom-in">
						<div className="cardsbgimg5" />
						<div className="cardcontent">
							<p className="cardtext">Timeline Project named n3wcr4ft Local</p>
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
									href="https://github.com/SamiEroglu/timeline-example"
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
				</div>
			</BrowserView>
			<MobileView className="workscontmobile">
				<Carousel cols={1} rows={1} gap={10} loop mobileBreakpoint={768}>
					<Carousel.Item>mobile</Carousel.Item>
					<Carousel.Item>mobile</Carousel.Item>
					<Carousel.Item>mobile</Carousel.Item>
				</Carousel>
			</MobileView>
		</div>
	);
}

export default Works;
