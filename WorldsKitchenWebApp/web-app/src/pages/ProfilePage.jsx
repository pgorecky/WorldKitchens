import {useEffect, useState} from "react";
import {getRequest} from "../services/API_CONFIG";
import Header from "../components/Headers/Header";
import {useNavigate, useParams} from "react-router-dom";
import {TODO_PAGE} from "../const/Consts";
import Profile from "../components/Profile/Profile";
import Footer from "../components/Footer/Footer";

export default function ProfilePage() {
    const [profileImage, setProfileImage] = useState();
    const navigate = useNavigate();
    const {id} = useParams();

    const tabs = [
        ['Discover', TODO_PAGE],
        ['Add', TODO_PAGE],
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

    return (
        <>
            <Header
                onLogoClick={handleLogoClick}
                tabs={tabs}
                image={profileImage}/>
            <Profile
                user={id}/>
            <Footer style={{position: "fixed", bottom: 0}}/>
        </>
    )
}