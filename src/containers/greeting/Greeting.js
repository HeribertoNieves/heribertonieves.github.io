import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import robot from "../../assets/lottie/gt_robot";
import DisplayLottie from "../../components/displayLottie/DisplayLottie_mainrobot";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                {/* <span className="wave-emoji">{emoji("👋")}</span> */}
              </h1>
              <p
                className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    // href={require("./Jacob Blevins -- Resume.pdf")}
                    // download="Jacob Blevins Resume.pdf"
                    // className="download-link-button"
                    href="https://drive.google.com/file/d/1pM5rHffS4y7Mt3kn0QVxQT019DRq-rQZ/view?usp=sharing"
                    target="_blank" // This ensures it opens in a new tab
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text="My resume" />
                  </a>
                )}
                {/* Button to open CV from Google Drive */}
                {greeting.cvLink && (
                  <a
                    href="https://drive.google.com/file/d/1rjV2lC4FdKZxXp4nvOv87fXywT_se-2X/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text="My CV" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={robot} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
