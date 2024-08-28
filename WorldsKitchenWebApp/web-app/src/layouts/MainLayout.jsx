import {useEffect, useState} from "react";
import {getRequest} from "../services/API_CONFIG";
import {ALL_MEAL_PAGE} from "../const/Consts";
import Header from "../components/Headers/Header";
import {Outlet, useNavigate} from "react-router-dom";

function MainLayout() {
    const [profileImage, setProfileImage] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getRequest('/users/me').then(r => {
            setProfileImage(r.data.imageUrl)
        });
    }, []);

    const handleLogoClick = () => {
        navigate(ALL_MEAL_PAGE)
    }

    return <>
        <Header
            onLogoClick={handleLogoClick}
            image={profileImage}/>
        <div className={'content-container'}>
            <Outlet/>
        </div>
    </>
}

export default MainLayout