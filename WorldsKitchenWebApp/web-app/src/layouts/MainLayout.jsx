import {useEffect, useState} from "react";
import {getRequest} from "../services/API_CONFIG";
import {ADD_MEAL_PAGE, ALL_MEAL_PAGE, TODO_PAGE} from "../const/Consts";
import Header from "../components/Headers/Header";
import {Outlet, useNavigate} from "react-router-dom";

function MainLayout() {
    const [profileImage, setProfileImage] = useState();
    const navigate = useNavigate();

    const tabs = [
        ['Discover', ALL_MEAL_PAGE],
        ['Add', ADD_MEAL_PAGE],
        ['Favourite', TODO_PAGE],
        ['FAQ', TODO_PAGE]
    ]

    useEffect(() => {
        getRequest('/users/me').then(r => {
            setProfileImage(r.data.imageUrl)
        });
    }, []);

    const handleLogoClick = () => {
        navigate(TODO_PAGE)
    }

    return <>
        <Header
            onLogoClick={handleLogoClick}
            tabs={tabs}
            image={profileImage}/>
        <div className={'content-container'}>
            <Outlet/>
        </div>
    </>
}

export default MainLayout