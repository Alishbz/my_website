import React, { useEffect, useState } from "react";
import "./navbar.css";
function Navbar() {
	const [navbarColor, setNavbarColor] = useState("rgba(0,0,0,0.001)");
	const [navbarwebkitboxshadow, setNavbarwebkitboxshadow] = useState(
		"0px 0px 0px 0px rgba(0,0,0,0)"
	);
	const [navbarmozboxshadow, setNavbarmozboxshadow] = useState(
		"0px 0px 0px 0px rgba(0,0,0,0)"
	);
	const [navbarboxshadow, setNavbarboxshadow] = useState(
		"0px 0px 0px 0px rgba(0,0,0,0)"
	);

	const handleScroll = () => {
		if (window.scrollY > 100) {
			setNavbarColor("rgba(11,88,199,0.7)");
			setNavbarwebkitboxshadow("0px 0px 76px -21px rgba(0,0,0,0.54)");
			setNavbarmozboxshadow("0px 0px 76px -21px rgba(0,0,0,0.54)");
			setNavbarboxshadow("0px 0px 76px -21px rgba(0,0,0,0.54)");
		} else {
			setNavbarColor("rgba(0,0,0,0.001)");
			setNavbarwebkitboxshadow("0px 0px 0px 0px rgba(0,0,0,0)");
			setNavbarmozboxshadow("0px 0px 0px 0px rgba(0,0,0,0)");
			setNavbarboxshadow("0px 0px 0px 0px rgba(0,0,0,0)");
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const handleClickScroll = () => {
		const element = document.getElementById("section-1");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	const handleClickScroll1 = () => {
		const element = document.getElementById("section-2");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	const handleClickScroll2 = () => {
		const element = document.getElementById("section-3");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	const handleClickScroll3 = () => {
		const element = document.getElementById("section-4");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	const handleClickScroll4 = () => {
		const element = document.getElementById("section-5");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div
			className="navbar"
			style={{
				transition: "0.5s",
				backgroundColor: navbarColor,
				WebkitBoxShadow: navbarwebkitboxshadow,
				MozBoxShadow: navbarmozboxshadow,
				boxShadow: navbarboxshadow,
			}}
		>
			<div className="navbarname">Ali Şahbaz</div>
			<div className="navbarmenu">
				<div onClick={handleClickScroll} style={{ cursor: "pointer" }}>
					HOME
				</div>
				<div onClick={handleClickScroll1} style={{ cursor: "pointer" }}>
					SKILLS
				</div>
				<div onClick={handleClickScroll2} style={{ cursor: "pointer" }}>
					WORKS
				</div>
				<div onClick={handleClickScroll3} style={{ cursor: "pointer" }}>

				</div>
				<button
					className="hiremebutton"
					onClick={handleClickScroll4}
					style={{ cursor: "pointer" }}
				>
					Hire Me
				</button>
			</div>
		</div>
	);
}

export default Navbar;
