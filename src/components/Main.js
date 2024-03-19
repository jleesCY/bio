import mainPortrait from "../assets/images/main-portrait.jpeg";
import Hover from 'react-3d-hover';
import Social from "./Social";
import instagramLogo from "../assets/images/svgs/instagram.svg";
import githubLogo from "../assets/images/svgs/github.svg";
import linkedinLogo from "../assets/images/svgs/linkedin.svg";
import { isMobile } from "react-device-detect";

export default function Main() {
    return(<>
        <div id="initial-view">
            <div id="filter">
                <div id="window-wrapper" style={{ marginTop: isMobile ? 1.5 + "em" : 10 + "em"}}>
                    <div id="window">
                        <div id="window-top">
                            <div id="window-buttons">
                                <div id="window-close"></div>
                                <div id="window-minimize"></div>
                                <div id="window-maximize"></div>
                            </div>
                        </div>
                        <div id="window-body">
                            <div id="window-body-divider">
                                <div id="image-padder">
                                    <Hover max={10} perspective={1000} speed={550} scale={1}>
                                        <img id="main-portrait" src={mainPortrait}/>
                                    </Hover>
                                </div>
                                <div id="window-bio">
                                    <div id="bio-title">
                                        <p className={"title-name"}>Joshua Lees</p>
                                        <p className={"title-subname"}>@jleescy</p>
                                    </div>
                                    <div id="socials">
                                        <Social image={instagramLogo} url={"https://www.instagram.com/jleescy/"} size={2.6}></Social>
                                        <Social image={githubLogo} url={"https://github.com/jleesCY"} size={2.3}></Social>
                                        <Social image={linkedinLogo} url={"https://www.linkedin.com/in/joshuamlees/"} size={2.95}></Social>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <div id="web-projects-section">
                <div className={"section-title"}>
                    <p className={"title-name"}>Web Projects</p>
                    <p className={"title-subname"}></p>
                </div>
                <div id="personal-projects-list">
                    <Hover>
                        <div className={"card"}></div>
                    </Hover>
                    <Hover>
                        <div className={"card"}></div>
                    </Hover>
                </div>
            </div>
            <div id="software-projects-section">
                <div className={"section-title"}>
                    <p className={"title-name"}>Other Projects</p>
                    <p className={"title-subname"}></p>
                </div>
                <div id="personal-projects-list">
                    <Hover>
                        <div className={"card"}></div>
                    </Hover>
                    <Hover>
                        <div className={"card"}></div>
                    </Hover>
                    <Hover>
                        <div className={"card"}></div>
                    </Hover>
                </div>
            </div>*/}
        </div>
    </>)
}