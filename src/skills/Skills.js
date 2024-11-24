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
import { SiQt } from "react-icons/si";
import { SiStmicroelectronics } from "react-icons/si";
import { SiBoost } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiEspressif } from "react-icons/si";
import { SiLinux } from "react-icons/si";

import { SiStrapi } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import "./skill.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ disable: window.innerWidth < 768 });
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
              <FaReact size={25} /> C++
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
              <BiLogoVuejs size={30} /> C
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
              <BiLogoJavascript size={30} /> Embbedded Software / Firmware
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
              <BiLogoHtml5 size={30} /> Embbeded Linux
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
              RTOS
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
              Hardware
            </div>
            <div className="progress-6" style={{ color: "#ee2963" }}></div>
          </div>
          and more...
        </div>
        <div className="skillicons">
          <div className="icons" data-aos="zoom-in">
            <div className="icon11">
              <SiQt size={70} /> QT Framework / C++
            </div>

            <div className="icon22">
              <SiStmicroelectronics size={70} /> MCU
            </div>
          </div>
          <div className="icons" data-aos="zoom-in">
            <div className="icon11">
              <SiBoost size={70} /> C++
            </div>
            <div className="icon22">
              <SiOpencv size={70} /> Image Process
            </div>
          </div>
          <div className="icons" data-aos="zoom-in">
            <div className="icon11">
              <SiEspressif size={70} /> ESP
            </div>
            <div className="icon22">
              <SiLinux size={70} /> Embedded Linux
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
