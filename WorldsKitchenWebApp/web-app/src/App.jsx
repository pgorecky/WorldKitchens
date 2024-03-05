import './App.css';
import Header from "./components/Headers/Header";
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
            <Header/>
            <HeroSection/>
            <Footer style={{position: "fixed", bottom: 0}}/>
        </>
    );
}

export default App;
