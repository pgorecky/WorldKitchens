import {ADD_MEAL_PAGE, ALL_MEAL_PAGE, TODO_PAGE} from "../const/Consts";
import {useEffect, useState} from "react";
import {getRequest} from "../services/API_CONFIG";
import Header from "../components/Headers/Header";
import ProfileMealsList from "../components/List/ProfileMealsList";

export default function AllMealsPage() {
    const [profileImage, setProfileImage] = useState();
    const [allMeals, setAllMeals] = useState([]);
    const [italianMeals, setItalianMeals] = useState([]);
    const [polishMeals, setPolishMeals] = useState([]);
    const [mexicanMeals, setMexicanMeals] = useState([]);
    const [americanMeals, setAmericanMeals] = useState([]);
    const [asianMeals, setAsianMeals] = useState([]);
    const [activeTab, setActiveTab] = useState('Italian');


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

        getRequest('/dishes/all').then(r => {
            setAllMeals(r.data)
        })
    }, []);

    const getMealsTab = () => {
        let tab1Classes = 'meal-tab tab1 '
        let tab2Classes = 'meal-tab tab2 '

        if (activeTab === 'Italian') {
            tab1Classes += 'active-tab'
        } else tab2Classes += 'active-tab'

        return <>
            <div className={tab1Classes} onClick={() => setActiveTab('Italian')}>
                Italian
            </div>
            <div
                className={tab2Classes}
                onClick={() => setActiveTab('Polish')}>
                Polish
            </div>
        </>
    }

    return <>
        <Header
            tabs={tabs}
            image={profileImage}/>
        <div className={'recipe-container'}>
            <div style={{display: 'flex', flexDirection: 'row', boxShadow: ''}}>
                {getMealsTab()}
            </div>
            <div className={'profile-meals-section'} style={{height: "fit-content"}}>
                <ProfileMealsList
                    mealsList={allMeals}/>
            </div>
        </div>
    </>
}