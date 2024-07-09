import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getRequest} from "../services/API_CONFIG";
import Header from "../components/Headers/Header";
import {TODO_PAGE} from "../const/Consts";
import '../components/Meals/Meals.css'
import {RiTimer2Line} from "react-icons/ri";
import {LiaBurnSolid} from "react-icons/lia";
import {IoMdPeople} from "react-icons/io";
import {FaFlag} from "react-icons/fa";
import {PiCookingPotFill} from "react-icons/pi";
import MealCommentsList from "../components/List/MealCommentsList";

export default function MealPage() {
    const [profileImage, setProfileImage] = useState();
    const navigate = useNavigate();
    const {id} = useParams();
    const [meal, setMeal] = useState({
        name: '',
        description: '',
        preparationTime: '',
        ingredients: [],
        calories: '',
        portionSize: '',
        region: '',
        level: '',
        author: '',
        preparationSteps: [],
        comments: [],
        imageUrl: ''
    })

    const tabs = [
        ['Discover', TODO_PAGE],
        ['Add', TODO_PAGE],
        ['Favourite', TODO_PAGE],
        ['FAQ', TODO_PAGE]
    ]

    useEffect(() => {
        getRequest('/me').then(r => {
            setProfileImage(r.data.imageUrl)
        });

        getRequest(`/dishes/${id}`).then(r => {
            setMeal({
                name: r.data.name,
                description: r.data.description,
                preparationTime: r.data.preparationTime,
                ingredients: r.data.ingredients,
                calories: r.data.calories,
                portionSize: r.data.portionSize,
                region: r.data.region,
                level: r.data.level,
                author: r.data.author,
                preparationSteps: r.data.preparationSteps,
                comments: r.data.comments,
                imageUrl: r.data.imageUrl
            })
        })
    }, []);

    return (
        <>
            <Header
                tabs={tabs}
                image={profileImage}/>
            <div className={'recipe-container'}>
                <div className={'meal-name-section'}>
                    <h1>{meal.name}</h1>
                    <p>{meal.description}</p>
                    <div className={'meal-details-section'}>
                        <div className={'meal-detail'}>
                            <PiCookingPotFill/>
                            <p>{meal.preparationTime}</p>
                        </div>
                        <div className={'meal-detail'}>
                            <LiaBurnSolid/>
                            <p>{meal.calories} kcal</p>
                        </div>
                        <div className={'meal-detail'}>
                            <IoMdPeople/>
                            <p>{meal.portionSize} people</p>
                        </div>
                        <div className={'meal-detail'}>
                            <FaFlag/>
                            <p>{meal.region}</p>
                        </div>
                        <div className={'meal-detail'}>
                            <RiTimer2Line/>
                            <p>{meal.level}</p>
                        </div>
                    </div>
                </div>
                <div className={'ingredients-section'}>
                    <div className={'ingredients'}>
                        <h2>Ingredients:</h2>
                        <ul>
                            {meal.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient.ingredientName} - {ingredient.portion}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <img src={meal.imageUrl} alt={'meal'}/>
                </div>

                <div className={'instructions-section'}>
                    <h2>Instructions:</h2>
                    {meal.preparationSteps.map((step, index) => (
                        <p key={index}>
                            {index + 1}. {step}
                        </p>
                    ))}
                </div>

                <div className={'comments-section'}>
                    <h2>Comments:</h2>
                    {meal.comments.length > 0 ? (
                        <>
                            <MealCommentsList
                                comments={meal.comments}/>
                        </>
                    ) : (
                        <h4>There is no comment yet...</h4>
                    )}
                </div>
            </div>
        </>
    )
}