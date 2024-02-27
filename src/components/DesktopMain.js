import mainPortrait from "../assets/images/main-portrait.jpeg";
import Hover from 'react-3d-hover';

export default function DesktopMain() {
    return(<>
        <div id="initial-view">
            <div className={"section-title"}>
                <p className={"title-name"}>Joshua Lees</p>
                <p className={"title-subname"}>@jleescy</p>
            </div>
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
                            <p className="emphasize">About Me</p>
                            <p> I'm a software developer based in Dayton, Ohio, studying Computer Science and Cyber Operations at Cedarville University.
                                I strive to develop robust solutions to challenging problems, enhancing cybersecurity measures along the way, and approach each project with enthusiasm and a commitment to excellence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                <p className={"title-name"}>Software Projects</p>
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
        </div>
    </>)
}