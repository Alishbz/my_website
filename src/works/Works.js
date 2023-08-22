import React, { useEffect } from "react";
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
				Here are my portfolio.
			</div>
			<div className="worksiframecont" data-aos="zoom-in">
				<iframe
					className="workscont"
					src="https://samieroglu-portfolio.netlify.app/"
					title="MyPortfolio"
				></iframe>
			</div>
		</div>
	);
}

export default Works;
