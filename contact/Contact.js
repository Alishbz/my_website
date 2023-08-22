import React, { useEffect } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="contact" id="section-5">
			<div className="contactme">
				<div className="contactmetitle" data-aos="fade-up">
					Contact
				</div>
				<div className="line" data-aos="fade-up"></div>
			</div>
			<div className="contactmecont">
				<div className="needandemail">
					<div className="need" data-aos="fade-up">
						<p1>You Need</p1>
						<p2>Beautiful design for your website leave a request</p2>
					</div>
					<div
						style={{
							width: "5%",
							height: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							paddingRight: "10vw",
						}}
						data-aos="zoom-in"
					>
						<BsFillArrowRightSquareFill size={60} />
					</div>
					<div className="email">
						<form action="mailto:samie.github@gmail.com">
							<label>
								<input
									style={{
										width: "20vw",
										height: "3vh",
										fontFamily: "Josefin Sans",
										fontSize: "1vw",
										paddingLeft: ".4vw",
									}}
									type="email"
									name="email"
									placeholder="e.g example@email.com"
									data-aos="fade-up"
								/>
							</label>
							<label>
								<input
									style={{
										width: "20vw",
										height: "3vh",
										fontFamily: "Josefin Sans",
										fontSize: "1vw",
										paddingLeft: ".4vw",
									}}
									type="text"
									name="name"
									placeholder="e.g Sami Eroglu"
									data-aos="fade-up"
								/>
							</label>
							<label>
								<textarea
									name="postContent"
									rows={6}
									cols={40.5}
									placeholder="Write your message"
									style={{
										fontFamily: "Josefin Sans",
										fontSize: "1vw",
										paddingLeft: ".4vw",
										paddingTop: ".4vw",
									}}
									data-aos="fade-up"
								/>
							</label>
							<button className="sendbutton" type="submit">
								Send <RiSendPlaneFill size={15} />
							</button>
						</form>
					</div>
				</div>
				<div className="footer">
					<div className="letstalk" data-aos="fade-up">
						Let's Talk
					</div>
					<div className="iconsforcommunication">
						<a
							href="https://t.me/Ergl_Sami"
							target="_blank"
							rel="noopener noreferrer"
							style={{ textDecoration: "none" }}
						>
							<div
								className="telegram"
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									gap: ".5vw",
									color: "black",
								}}
							>
								<BiLogoTelegram size={40} data-aos="zoom-in" />
								<div style={{ color: "white" }} data-aos="fade-up">
									Telegram
								</div>
							</div>
						</a>
						<a
							href="https://wa.me/905346954895"
							target="_blank"
							rel="noopener noreferrer"
							style={{ textDecoration: "none" }}
						>
							<div
								className="whatsapp"
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									gap: ".5vw",
									color: "black",
								}}
							>
								<IoLogoWhatsapp size={40} data-aos="zoom-in" />
								<div style={{ color: "white" }} data-aos="fade-up">
									Whatsapp
								</div>
							</div>
						</a>
						<a
							href="https://ig.me/m/ergl.sami"
							target="_blank"
							rel="noopener noreferrer"
							style={{ textDecoration: "none" }}
						>
							<div
								className="instagram"
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									gap: ".5vw",
									color: "black",
								}}
							>
								<AiFillInstagram size={40} data-aos="zoom-in" />
								<div style={{ color: "white" }} data-aos="fade-up">
									Instagram
								</div>
							</div>
						</a>
					</div>
					<div className="copyright">
						| Copyright © 2023 Portfolio. All rights reserved |
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
