import './App.css';
import LandingHeader from "./components/Headers/LandingHeader";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import {ALL_MEAL_PAGE} from "./const/Consts";
import {getAuthToken} from "./services/API_CONFIG";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        if (getAuthToken()) {
            navigate(ALL_MEAL_PAGE)
        }
    }, []);

    return (
        <>
            <LandingHeader/>
            <HeroSection/>
            <Footer style={{position: "fixed", bottom: 0}}/>
        </>
    );
}

export default App;
