import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getRequest, postRequest} from "../services/API_CONFIG";
import '../components/Meals/Meals.css'
import {RiTimer2Line} from "react-icons/ri";
import {LiaBurnSolid} from "react-icons/lia";
import {IoMdPeople} from "react-icons/io";
import {FaFlag, FaHeart, FaRegHeart} from "react-icons/fa";
import {PiCookingPotFill} from "react-icons/pi";
import MealCommentsList from "../components/List/MealCommentsList";
import Button from "../components/Button/Button";
import {addCommentRequest} from "../services/comment/CommentService";

export default function MealPage() {
    const [comment, setComment] = useState('');
    const [like, setLike] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
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

    const getLikeIcon = () => {
        let size = '2.3rem'
        let color = 'red'
        let x = isHovered ? !like : like
       return  x ? <FaHeart size={size} color={color} onClick={handleLike}/>
           : <FaRegHeart size={size} color={color} onClick={handleLike}/>;
    }

    const handleLike = () => {
        if (like) {
            postRequest(`/dishes/${id}/unlike`)
        } else {
            postRequest(`/dishes/${id}/like`)
        }
        setLike(prevState => {setLike(!prevState)})
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handleAddComment = () => {
        addCommentRequest(id, comment).then(() => {
            setComment('');
            getRequest(`/dishes/${id}`).then(r => {
                setMeal(prevMeal => ({
                    ...prevMeal,
                    comments: r.data.comments
                }));
            });
        });
    }

    useEffect(() => {

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

        getRequest(`/dishes/${id}/isLiked`).then(r => setLike(r.data))
    }, []);

    return (
        <>
            <div className={'recipe-container'}>
                <div className={'meal-name-section'}>
                    <div className={'meal-name-like'}>
                        <h1>{meal.name}</h1>
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {getLikeIcon()}
                        </div>
                    </div>
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
                    <div className={'add-comment-section'}>
                        <input
                            type={"text"}
                            placeholder={"Add comment"}
                            value={comment}
                            onChange={handleCommentChange}/>
                        <Button
                            style={{padding: "9px 20px", fontSize: "12px", textTransform: "none"}}
                            onClick={handleAddComment}
                        >Add</Button>
                    </div>
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