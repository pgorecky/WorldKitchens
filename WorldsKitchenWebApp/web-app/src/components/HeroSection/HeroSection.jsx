import './HeroSection.css'
import ItalianFood from './../../assets/images/LandingPage/ITALIAN.jpg'
import AsianFood from './../../assets/images/LandingPage/ASIAN.jpg'
import AmericanFood from './../../assets/images/LandingPage/AMERICAN.jpg'
import PolishFood from './../../assets/images/LandingPage/POLISH.jpg'

export default function HeroSection() {
    return (
        <div id={'HeroSection'}>
            <div className={'hero-container'}>
                <h1 className={'hero'}>Explore Authentic <span className="green-text">Flavors</span> from Around the <span className="green-text">World</span></h1>
                <h2 className={'hero-description'}>Embark on a culinary journey through different regions and cultures,
                    and uncover the rich tapestry of flavors, spices, and cooking techniques that define traditional cuisines. Immerse yourself in the vibrant culinary heritage of each region, from the exotic spices of Southeast Asia to the comforting warmth of European classics, and experience the diversity of global gastronomy at your fingertips. Whether you're an aspiring home cook or a seasoned chef, our curated collection of recipes offers something for everyone, allowing you to recreate authentic dishes from around the world in your own kitchen.</h2>
            </div>
            <div className={'padding10'}>
                <div className="images-container">
                    <img src={ItalianFood} alt="Italian food" className={'hero-image'}/>
                    <img src={AsianFood} alt="Asian food" className={'hero-image'}/>
                    <img src={AmericanFood} alt="American food" className={'hero-image'}/>
                    <img src={PolishFood} alt="Polish food" className={'hero-image'}/>
                </div>
            </div>
        </div>
    )
}