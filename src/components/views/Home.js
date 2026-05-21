import React from "react";
import mainPortrait from "../../assets/images/main-portrait.jpeg";
import Hover from "react-3d-hover";
import Social from "../Social";
import instagramLogo from "../../assets/images/svgs/instagram.svg";
import githubLogo from "../../assets/images/svgs/github.svg";
import linkedinLogo from "../../assets/images/svgs/linkedin.svg";

export default function Home() {
    return (
        <div id="window-body-divider" className="view-container fade-in">
            <div id="image-padder">
                <Hover max={10} perspective={1000} speed={550} scale={1}>
                    <img id="main-portrait" src={mainPortrait} alt="Joshua Lees" />
                </Hover>
            </div>
            <div id="window-bio">
                <div id="bio-title">
                    <p className={"title-name"}>Joshua Lees</p>
                    <p className={"title-subname"}>@jleescy</p>
                </div>
                
                <div className="bio-description" style={{ marginTop: "1em" }}>
                    <p style={{ fontSize: "1.15em" }}>
                        <span className="text-highlight" style={{ animationDelay: "0.5s" }}>Modeling & Simulation Engineer</span> by day. <span className="text-highlight" style={{ animationDelay: "1.5s" }}>Web Developer</span> by passion.
                    </p>
                    <p style={{ marginTop: "1em", fontSize: "0.85em" }}>
                        I take the analytical precision of <span className="text-highlight" style={{ animationDelay: "0s" }}>advanced data engineering</span> and use it to build clean, <span className="text-highlight" style={{ animationDelay: "0s" }}>high-performance web interfaces</span> where complex logic meets aesthetic design.
                    </p>
                </div>
                <div id="socials" style={{ justifyContent: "flex-start" }}>
                    <Social image={instagramLogo} url={"https://www.instagram.com/jleescy/"} size={2.6}></Social>
                    <Social image={githubLogo} url={"https://github.com/jleesCY"} size={2.3}></Social>
                    <Social image={linkedinLogo} url={"https://www.linkedin.com/in/joshuamlees/"} size={2.95}></Social>
                </div>
            </div>
        </div>
    );
}
