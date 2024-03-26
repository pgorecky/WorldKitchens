import './Footer.css'
import Logo from "../Logo/Logo";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {EMAIL_ADDRESS, GITHUB_LINK, LINKEDIN_LINK} from "../../const/Consts";

export default function Footer({style = undefined}) {
    return (
        <div id={'Footer'} style={style}>
            <div className={'icons-container'}>
                <a href={GITHUB_LINK}>
                    <FaGithub className={'footer-icon'} size={'3vh'}/>
                </a>
                <a href={LINKEDIN_LINK}>
                    <FaLinkedin className={'footer-icon'} size={'3vh'}/>
                </a>
                <a href={`mailto: ${EMAIL_ADDRESS}`}>
                    <SiGmail className={'footer-icon'} size={'3vh'}/>
                </a>
            </div>
            <div className={'rights-container'}>
                <span>All right reserved © 2024</span>
                <div className={'app-version'}>
                    <Logo/>
                    <span>Version: Beta 0.01</span>
                </div>
            </div>
        </div>
    )
}