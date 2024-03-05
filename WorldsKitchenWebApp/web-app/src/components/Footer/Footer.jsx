import './Footer.css'
import Logo from "../Logo/Logo";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

export default function Footer({style = undefined}) {
    return (
        <div id={'Footer'} style={style}>
            <div className={'icons-container'}>
                <a href={'https://github.com/pgorecky'}>
                    <FaGithub className={'footer-icon'} size={'3vh'}/>
                </a>
                <a href={'https://linkedin.com'}>
                    <FaLinkedin className={'footer-icon'} size={'3vh'}/>
                </a>
                <a href={'mailto: patryk.gorecky@gmail.com'}>
                    <SiGmail className={'footer-icon'} size={'3vh'}/>
                </a>
            </div>
            <div className={'rights-container'}>
                <span style={{color: "gray"}}>All right reserved © 2024</span>
                <div className={'app-version'}>
                    <Logo color={'gray'}/>
                    <span style={{color: "gray"}}>Version: Beta 0.01</span>
                </div>
            </div>
        </div>
    )
}