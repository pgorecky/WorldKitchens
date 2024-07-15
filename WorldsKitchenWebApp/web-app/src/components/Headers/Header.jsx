import './Header.css'
import Logo from "../Logo/Logo";
import {useNavigate} from "react-router-dom";
import {IoNotifications} from "react-icons/io5";
import {MY_PROFILE_PAGE} from "../../const/Consts";

export default function Header({onLogoClick, tabs, image}) {
    const navigate = useNavigate();

    const TABS = tabs ? tabs : []

    const handleTabNavigation = (url) => {
        navigate(url)
    }

    return (
        <header id="Header">
            <div className={'header-items-container'}>
                <div onClick={onLogoClick}>
                    <Logo/>
                </div>
                <ol className={'header-menu'}>
                    {TABS.map((tab, tabIndex) =>
                        <li
                            key={tabIndex}
                            onClick={() => handleTabNavigation(tab[1])}>
                            {tab[0]}
                        </li>
                    )}
                </ol>
            </div>
            <div className={'header-actions-container'}>
                <div className={'notification-icon'}>
                    <IoNotifications/>
                </div>
                <div className={'header-image'}>
                    <img
                        src={image}
                        alt={'profile'}
                        onClick={() => handleTabNavigation(MY_PROFILE_PAGE)}
                    />
                </div>
                <div className={'hamburger'}>
                </div>
            </div>
        </header>
    )
}