import {useEffect, useState} from "react";
import {getRequest} from "../services/API_CONFIG";
import Header from "../components/Headers/Header";
import {useNavigate} from "react-router-dom";
import {TODO_PAGE} from "../const/Consts";
import Profile from "../components/Profile/Profile";
import Footer from "../components/Footer/Footer";

export default function ProfilePage() {
    const [profileImage, setProfileImage] = useState();
    const navigate = useNavigate();
    const tabs = ['Discover', 'Add', 'Favourite', 'FAQ']

    useEffect(() => {
        getRequest('/me').then(r => {
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
                user={'me'}/>
            <Footer style={{position: "fixed", bottom: 0}}/>
        </>
    )
}