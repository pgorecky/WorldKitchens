import './App.css';
import Header from "./components/Headers/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
    return (
        <div className="App">
            <Header/>
            <HeroSection/>
            <Footer style={{position: "fixed", bottom: 0}}/>
        </div>
    );
}

export default App;
