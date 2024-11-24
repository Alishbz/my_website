import React, { useEffect } from "react";
import ai from "../assets/ai.png";
import aws from "../assets/aws.png";
import js from "../assets/js.png";
import json from "../assets/json.png";
import p5 from "../assets/p5.png";
import python from "../assets/python.png";
import rust from "../assets/rust.png";
import "./resume.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Resume() {
  useEffect(() => {
    AOS.init({ disable: window.innerWidth < 1 });
  }, []);
  return (
    <div className="resume" id="section-4">

    </div>
  );
}

export default Resume;
