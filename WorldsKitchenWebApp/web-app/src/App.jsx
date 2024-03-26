import './App.css';
import LandingHeader from "./components/Headers/LandingHeader";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
    // const navigate = useNavigate();
    //
    // useEffect(() => {
    //     if (getAuthToken()) {
    //         navigate('/todo')
    //     }
    // }, []);

    return (
        <>
            <LandingHeader/>
            <HeroSection/>
            <Footer style={{position: "fixed", bottom: 0}}/>
        </>
    );
}

export default App;
