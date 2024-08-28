import {useState} from "react";
import {CiLogout} from "react-icons/ci";
import {RiLockPasswordFill} from "react-icons/ri";
import {IoIosSettings} from "react-icons/io";
import {MdDarkMode} from "react-icons/md";
import {postRequest, removeAuthHeader} from "../../services/API_CONFIG";
import {useNavigate} from "react-router-dom";
import {LANDING_PAGE} from "../../const/Consts";

const Hamburger = () => {
    const navigate = useNavigate();

    const [menuVisible, setMenuVisible] = useState(false)

    function handleHamburgerClick() {
        setMenuVisible(prevState => !prevState)
    }

    async function handleLogout() {
        try {
            await postRequest('/logout');
            removeAuthHeader();
            navigate(LANDING_PAGE);
        } catch (error) {
            console.error('Logout failed:', error);
            alert('There was a problem logging out. Please try again.');
        }
    }

    return <div className={'hamburger'} onClick={handleHamburgerClick}>
        {menuVisible &&
            <div className={'hamburger-menu'}>
                <div className={'hamburger-menu-item'}>
                    <IoIosSettings/>
                    Settings
                </div>
                <div className={'hamburger-menu-item'}>
                    <RiLockPasswordFill/>
                    Change password
                </div>
                <div className={'hamburger-menu-item'}>
                    <MdDarkMode/>
                    Dark mode
                </div>
                <div className={'hamburger-menu-item'} style={{color: "red"}} onClick={handleLogout}>
                    <CiLogout/>
                    Log out
                </div>
            </div>
        }
    </div>
}

export default Hamburger