import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import "../styles/Home.css";
import Link from "@material-ui/core/Link";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          Hi,I am <span data-text="Zaheer">Zaheer</span>
        </h2>
        <div className="prompt">
          <p>A Software developer with passion for learning and creating</p>
          <Link
            href="https://www.linkedin.com/in/zaheerkhan-mokashi/"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/Bugger0" target="_blank">
            <GithubIcon />
          </Link>

          <div className="email-link">
            <a href="mailto: zaheerk0302@example.com">
              Let's Talk
              <EmailIcon className="email-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJs</span>
            <span>Redux</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>NPM</span>
            <span>MaterialUI</span>
            <span>BootStrap </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJs</span>
            <span>ExpressJS</span>
            <span>MySQL</span>
            <span>MongoDB </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Javascript</span>
            <span>Java</span>
            <span>Python </span>
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
