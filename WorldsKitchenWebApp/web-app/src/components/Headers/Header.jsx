import './Header.css'
import Logo from "../Logo/Logo";
import {useNavigate} from "react-router-dom";
import {IoNotifications} from "react-icons/io5";

export default function Header({onLogoClick, tabs, image}) {
    const navigate = useNavigate();

    const TABS = tabs ? tabs : []

    return (
        <header id="Header">
            <div className={'header-items-container'}>
                <div onClick={onLogoClick}>
                    <Logo/>
                </div>
                <ol className={'header-menu'}>
                    {TABS.map((tab, tabIndex) =>
                        <li key={tabIndex}>{tab}</li>)}
                </ol>
            </div>
            <div className={'header-actions-container'}>
                <div className={'notification-icon'}>
                    <IoNotifications color={'silver'}/>
                </div>
                <div className={'header-image'}>
                    <img src={image} alt={'profile'}/>
                </div>
                <div className={'hamburger'}>
                </div>
            </div>
        </header>
    )
}