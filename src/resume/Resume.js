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
    AOS.init({ disable: window.innerWidth < 768 });
  }, []);
  return (
    <div className="resume" id="section-4">
      <div className="myresume">
        <div className="myresumetitle" data-aos="fade-up">
          Resume
        </div>
        <div className="resumeline" data-aos="fade-up"></div>
      </div>
      <div className="herearemyexperiences" data-aos="fade-up">
        Here are my experiences and qualifications.
      </div>
      <div className="resumecont">
        <div className="intership">
          <div className="intershiptitle" data-aos="fade-up">
            Intership
          </div>
          <div className="intershipsum" data-aos="fade-up">
            <h1>BG Creative & n3wcr4ft</h1>
            <p1>
              <br />
              Work + Internship (5 months) Position: Software Engineer
            </p1>
            <p2>
              <br />
              (React.JS, Python, Front-End Araçları, Figma, p5.js - NFT,
              Blockchain, Web 3.0 Araçları, Chatbot, Michelson, Solidity, Smart
              Contracts, Amazon Web Services)
            </p2>
            <p>
              During a 5-month internship at BG Creative, I contributed to
              various projects focused on design and advertising, particularly
              in their Web 3.0 initiative. My responsibilities included:
              <br />
              &#8226;Establishing the software infrastructure for BG
              <br />
              &#8226;Creative's Web 3.0 initiative. Creating over 90 NFTs using
              p5.js.
              <br />
              &#8226;Developing pixel-perfect and responsive websites using
              React.JS.
              <br />
              &#8226;Creating an entertaining Chatbot for interactive purposes.
              <br />
              &#8226;Configuring and setting up cloud solutions using Amazon Web
              Services. <br />
              Through this experience, I honed my skills in software
              development, web design, and cloud technologies, while also
              gaining valuable insights into the rapidly evolving world of Web
              3.0 and blockchain technologies. I thoroughly enjoyed contributing
              to innovative projects that blend creativity and cutting-edge
              technology.
            </p>
            <h1>----------------------------------------</h1>
            <h1>Zafer Makina</h1>
            <p1>
              <br />
              Industrial Internship (1 month) Position: Computer Mechanical
              Engineer
            </p1>
            <p2>
              <br />
              (PLC Automation, Ladder Diagram, Robotic Arm, Electrical Panel
              Circuit Design, TIA Portal SIEMENS S7-1200 PLC Hardware)
            </p2>
            <p>
              During my one-month industrial internship at Zafer Makina, I was
              involved in projects related to PLC Automation, Ladder Diagram,
              Robotic Arm, and Electrical Panel Circuit Design. My
              responsibilities included:
              <br />
              &#8226;Programming the robot arms of the powder coating unit and
              connecting them to the electrical panel.
              <br />
              &#8226;PLC Automation programming using the Ladder Diagram
              technique.
              <br />
              Throughout this internship, I gained valuable hands-on experience
              in PLC Automation and Ladder Diagram programming, as well as in
              the design and integration of robotic arms with electrical panels
              for the powder coating unit. It was a rewarding experience to work
              on these projects and contribute to the automation and efficiency
              of industrial processes at Zafer Makina.
            </p>
            <h1>----------------------------------------</h1>
            <h1>434 Bilişim</h1>
            <p1>
              <br />
              Industrial Internship (1 month) Position: Software Engineer
            </p1>
            <p2>
              <br />
              (Andorid, React Native, Flutter, React.JS, Front-End Tools)
            </p2>
            <p>
              During my one-month industrial internship at 434 Bilişim, I was
              involved in projects related to web development and mobile
              development. My responsibilities included:
              <br />
              &#8226;Developing independent web software projects.
              <br />
              &#8226;Training about Android, React Native, Flutter software
              <br />
              Throughout this internship, I honed my skills in software
              development and web development, while also gaining valuable
              insights into mobile development and mobile technologies. I have
              greatly enjoyed contributing to innovative projects that combine
              creativity and the most advanced technology and developing myself
              in the field of mobile software.
            </p>
            <h1>----------------------------------------</h1>
            <h1>Projects</h1>
            <p>
              <br />
              &#8226;samieroglu.netlify.app/
              <br />
              &#8226;samieroglu-portfolio.netlify.app/ <br />
              &#8226;n3c4-website.netlify.app/ <br />
              &#8226;demo.n3wcr4ft.com
              <br />
              &#8226;timelinexample.netlify.app/ <br />
              &#8226;n3wcr4ft.info
              <br />
              &#8226;AEyes - NFTler/Chatbot <br />
              &#8226;TIA Portal SIEMENS S7-1200 PLC Otomasyon
              <br />
              &#8226;C# ile Eczane Otomasyonu <br />
              &#8226;cell-project.netlify.app/
            </p>
          </div>
        </div>
        <div className="education">
          <div className="educationtitle" data-aos="fade-up">
            Education
          </div>
          <div className="educationsum" data-aos="fade-up">
            <h1>
              Karabuk University:
              <br /> Computer Engineering
            </h1>
            <p1>Mission</p1>
            <p>
              Primary mission is being the one of most attractive department
              with qualified academic staff, broad research areas, study fields
              follow the technology which are supported by substantial sources.
              Furthermore, our following missions are contributing the studies
              upon standardisation of the research areas of computer science,
              executing collobration between university and industy, and
              graduating our studies with quailifed skills, like
              self-improvement, problem solving with effeciently, corresponding
              the team work, effecient communication skills in personal
              relationships and leading at industy and academic fields.
            </p>
            <p1>Vision</p1>
            <p>
              Our department has determined its vision to be a department that
              gives direction to the world-wide informatics sector in the
              academic and technological field.
            </p>
            <h1>----------------------------------------</h1>
            <h1>My Certificates:</h1>
            <img className="certificatesp" src={ai} alt=""></img>
            <img className="certificatesp" src={python} alt=""></img>
            <img className="certificatesp" src={aws} alt=""></img>
            <img className="certificatesp" src={js} alt=""></img>
            <img className="certificatesp" src={json} alt=""></img>
            <img className="certificatesp" src={p5} alt=""></img>
            <img className="certificatesp" src={rust} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
