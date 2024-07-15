import './Profile.css'
import {useEffect, useState} from "react";
import {getRequest} from "../../services/API_CONFIG";
import pizzaImg from '../../assets/images/ProfilePage/pizza.png'
import tacoImg from '../../assets/images/ProfilePage/taco.png'
import pierogImg from '../../assets/images/ProfilePage/pierog.png'
import burgerImg from '../../assets/images/ProfilePage/burger.png'
import sushiImg from '../../assets/images/ProfilePage/sushi.png'
import ProfileMealsList from "../List/ProfileMealsList";
import Activity from "../Activity/Activity";

export default function Profile({user}) {
    const [profileImage, setProfileImage] = useState();
    const [firstName, setFirstName] = useState();
    const [favouriteCuisine, setFavouriteCuisine] = useState('ITALIAN');
    const [commentsCount, setCommentsCount] = useState(0);
    const [likesCount, setLikesCount] = useState(0);
    const [createdRecipesCount, setCreatedRecipesCount] = useState(0);
    const [recentActivity, setRecentActivity] = useState([]);
    const [createdMeals, setCreatedMeals] = useState([]);
    const [likedMeals, setLikedMeals] = useState([]);
    const [activeTab, setActiveTab] = useState('Created');

    const getMealsTab = () => {
        let tab1Classes = 'meal-tab tab1 '
        let tab2Classes = 'meal-tab tab2 '

        if (activeTab === 'Created') {
            tab1Classes += 'active-tab'
        } else tab2Classes += 'active-tab'

        return <>
            <div
                className={tab1Classes}
                onClick={() => setActiveTab('Created')}
            >
                Created
            </div>
            <div
                className={tab2Classes}
                onClick={() => setActiveTab('Favourite')}
            >
                Favourite
            </div>
        </>
    }

    const getStatsImage = () => {
        switch (favouriteCuisine) {
            default:
                return <img src={pizzaImg} alt={'pizza'} className={'stats-image'} style={{filter: 'drop-shadow(0 0 2rem green)'}}/>
            case 'MEXICAN':
                return <img src={tacoImg} alt={'taco'} className={'stats-image'} style={{filter: 'drop-shadow(0 0 2rem rgba(255, 255, 0, 0.3))'}}/>
            case 'POLISH':
                return <img src={pierogImg} alt={'pierog'} className={'stats-image'} style={{filter: 'drop-shadow(0 0 2rem #b20000)'}}/>
            case 'AMERICAN':
                return <img src={burgerImg} alt={'burger'} className={'stats-image'} style={{filter: 'drop-shadow(0 0 2rem #12127d)'}}/>
            case 'ASIAN':
                return <img src={sushiImg} alt={'sushi'} className={'stats-image'} style={{filter: 'drop-shadow(0 0 2rem #f61e61)'}}/>
        }
    }

    const getMealsList = () => {
        if (activeTab === 'Created') {
            return createdMeals
        } else return likedMeals
    }

    useEffect(() => {
        getRequest(`/users/${user}`).then(r => {
            setProfileImage(r.data.imageUrl)
            setFirstName(r.data.firstName)
            setFavouriteCuisine(r.data.favouriteCuisine)
            setCommentsCount(r.data.amountOfCommentsAdded)
            setLikesCount(r.data.amountOfLikedMeals)
            setCreatedRecipesCount(r.data.amountOfCreatedRecipes)
            setRecentActivity(r.data.activities)
            setCreatedMeals(r.data.usersMeals)
            setLikedMeals(r.data.likedMeals)
        });
    }, [user]);

    return (
        <div className={'profile-content-container'}>
            <div className={'left-section'}>
                <div className={'stats-section'}>
                    {getStatsImage()}
                    <div className={'cuisine stat'}>
                        <text className={'cuisine-value'}>{favouriteCuisine}</text>
                        <text className={'cuisine-name'}>Favourite cuisine</text>
                    </div>
                    <div className={'user-stats'}>
                        <div className={'stat'}>
                            <text className={'stats-value'}>{createdRecipesCount}</text>
                            <text className={'stats-name'}>Created recipes</text>
                        </div>
                        <div className={'stat side-divider'}>
                            <text className={'stats-value'}>{commentsCount}</text>
                            <text className={'stats-name'}>Comments added</text>
                        </div>
                        <div className={'stat'}>
                            <text className={'stats-value'}>{likesCount}</text>
                            <text className={'stats-name'}>Meals liked</text>
                        </div>
                    </div>
                </div>

            </div>


            <div className={'mid-section'}>
                <div className={'profile-greetings'}>
                    <img src={profileImage} alt={'user-profile'}/>
                    <div className={'greeting-text-container'}>
                        <h2>Hello,</h2>
                        <h1>{firstName}</h1>
                        <h3>Are you ready to discover new flavors?</h3>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', boxShadow: ''}}>
                    {getMealsTab()}
                </div>
                <div className={'profile-meals-section'}>
                    <ProfileMealsList
                        mealsList={getMealsList()}/>
                </div>
            </div>


            <div className={'right-section'}>
                <p className={'activity-label'}>Recent user activity</p>
                <div className={'activities-container'}>
                    {recentActivity.map(activity =>
                        <Activity activity={activity}/>
                    )}
                </div>
            </div>
        </div>
    )
}