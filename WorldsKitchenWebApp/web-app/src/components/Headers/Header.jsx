import './Header.css'
import Logo from "../Logo/Logo";
import {useNavigate} from "react-router-dom";
import {IoNotifications} from "react-icons/io5";
import {ADD_MEAL_PAGE, ALL_MEAL_PAGE, MY_PROFILE_PAGE, TODO_PAGE} from "../../const/Consts";

export default function Header({onLogoClick, image}) {
    const navigate = useNavigate();

    const tabs = [
        ['Discover', ALL_MEAL_PAGE],
        ['Add', ADD_MEAL_PAGE],
        ['Favourite', TODO_PAGE],
        ['FAQ', TODO_PAGE]
    ]

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
                    {tabs.map((tab, tabIndex) =>
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