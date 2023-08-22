import React, { useEffect } from "react";
import "./works.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Works() {
	useEffect(() => {
		AOS.init();
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
				Here are my portfolio.
			</div>
			<div data-aos="zoom-in">
				<iframe
					className="workscont"
					src="https://samieroglu-portfolio.netlify.app/"
					style={{
						width: "80vw",
						height: "67vh",
						marginTop: "3vh",
						border: "none",
					}}
					title="MyPortfolio"
				></iframe>
			</div>
		</div>
	);
}

export default Works;
