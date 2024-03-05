import './HeroSection.css'
import ItalianFood from './../../assets/images/LandingPage/ITALIAN.jpg'
import AsianFood from './../../assets/images/LandingPage/ASIAN.jpg'
import AmericanFood from './../../assets/images/LandingPage/AMERICAN.jpg'
import PolishFood from './../../assets/images/LandingPage/POLISH.jpg'
import ImageCard from "../Cards/ImageCard";

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
                    <ImageCard
                        image={ItalianFood}
                        title={'Italian cuisine'}
                        description={'Italian cuisine is renowned worldwide for its simplicity, fresh ingredients, and rich flavors. Pasta, pizza, and risotto are staples'}
                    />
                    <ImageCard
                        image={AsianFood}
                        title={'Asian cuisine'}
                        description={'Asian cuisine encompasses a vast array of flavors, ingredients, and cooking styles from countries like China, Japan, Thailand, and India.'}
                    />
                    <ImageCard
                        image={AmericanFood}
                        title={'American cuisine'}
                        description={'American cuisine is a melting pot of diverse influences from around the world. Classic dishes like hamburgers, hot dogs, and barbecue ribs are iconic, alongside regional specialties such as New England clam chowder and Southern fried chicken. '}
                    />
                    <ImageCard
                        image={PolishFood}
                        title={'Polish cuisine'}
                        description={'Polish cuisine reflects a rich tapestry of history and tradition. Pierogi, stuffed dumplings, and hearty soups like żurek and barszcz are beloved staples.'}
                    />
                </div>
            </div>
        </div>
    )
}