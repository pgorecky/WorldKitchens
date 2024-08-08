import Header from "../components/Headers/Header";
import {useEffect, useRef, useState} from "react";
import {ADD_MEAL_PAGE, ALL_MEAL_PAGE, TODO_PAGE} from "../const/Consts";
import {getRequest, postRequest} from "../services/API_CONFIG";
import {PiCookingPotFill} from "react-icons/pi";
import {LiaBurnSolid} from "react-icons/lia";
import {IoMdPeople} from "react-icons/io";
import {FaFlag} from "react-icons/fa";
import {RiTimer2Line} from "react-icons/ri";
import Button from "../components/Button/Button";
import {useNavigate} from "react-router-dom";

export default function AddMealPage() {
    const [profileImage, setProfileImage] = useState();
    const [userId, setUserId] = useState();
    const [name, setName] = useState()
    const [desc, setDesc] = useState()
    const [time, setTime] = useState()
    const [calories, setCalories] = useState()
    const [portion, setPortion] = useState()
    const [region, setRegion] = useState()
    const [level, setLevel] = useState()
    const [step, setStep] = useState('')
    const [preparationSteps, setPreparationSteps] = useState([])
    const [ingredient, setIngredient] = useState('');
    const [ingredientPortion, setIngredientPortion] = useState('');
    const [ingredients, setIngredients] = useState([])
    const [mealImage, setMealImage] = useState('https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/applepie.jpg?alt=media&token=f75a577e-fbd0-463e-9c70-606a82eced62');

    const stepInputRef = useRef(null);
    const ingredientInputRef = useRef(null);
    const ingredientPortionInputRef = useRef(null);

    const navigate = useNavigate();

    const tabs = [
        ['Discover', ALL_MEAL_PAGE],
        ['Add', ADD_MEAL_PAGE],
        ['Favourite', TODO_PAGE],
        ['FAQ', TODO_PAGE]
    ]

    useEffect(() => {
        getRequest('/users/me').then(r => {
            setProfileImage(r.data.imageUrl)
            setUserId(r.data.id)
        });
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleDescChange = (event) => {
        setDesc(event.target.value)
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value)
    }

    const handleCaloriesChange = (event) => {
        setCalories(event.target.value)
    }

    const handlePortionChange = (event) => {
        setPortion(event.target.value)
    }

    const handleRegionChange = (event) => {
        setRegion(event.target.value)
    }

    const handleLevelChange = (event) => {
        setLevel(event.target.value)
    }

    const handleIngredientPortionChange = (event) => {
        setIngredientPortion(event.target.value)
    }

    const handleIngredientChange = (event) => {
        setIngredient(event.target.value)
    }

    const handlePrepStepChange = (event) => {
        setStep(event.target.value)
    }
    const addStep = () => {
        setPreparationSteps(prevState => [...prevState, step])
        stepInputRef.current = null;
        setStep('')
    }

    const addIngredient = () => {
        if (ingredient && ingredientPortion) {
            setIngredients(prevIngredients => [
                ...prevIngredients,
                {ingredientName: ingredient, portion: ingredientPortion}
            ]);
            ingredientInputRef.current = null;
            ingredientPortionInputRef.current = null;
            setIngredient('');
            setIngredientPortion('');
        }
    };

    const addMeal = () => {
        postRequest('/dishes/add', {
            name: name,
            description: desc,
            preparationTime: time,
            ingredients: ingredients,
            calories: calories,
            portionSize: portion,
            region: region,
            level: level,
            authorId: userId,
            preparationSteps: preparationSteps,
            imageUrl: mealImage
        }).then(r => {
            navigate(`/meals/${r.data.id}`)
        })
    }

    return <>
        <Header
            tabs={tabs}
            image={profileImage}/>
        <div className={'recipe-container'}>
            <div className={'meal-name-section'}>
                <div className={'meal-name-like'}>
                    <input
                        type={"text"}
                        placeholder={"Enter a meal name..."}
                        value={name}
                        className={'meal-name-input'}
                        onChange={handleNameChange}/>
                </div>
            </div>
            <input
                type={"text"}
                placeholder={"Enter a meal description..."}
                value={desc}
                className={'meal-desc-input'}
                onChange={handleDescChange}/>

            <div className={'meal-details-section'}>
                <div className={'meal-detail'}>
                    <PiCookingPotFill/>
                    <input
                        type={'text'}
                        value={time}
                        placeholder={"Preparation time"}
                        className={'meal-number-input'}
                        onChange={handleTimeChange}/>
                </div>
                <div className={'meal-detail'}>
                    <LiaBurnSolid/>
                    <input
                        type={'number'}
                        value={calories}
                        placeholder={"Kcal"}
                        className={'meal-number-input'}
                        onChange={handleCaloriesChange}/>
                </div>
                <div className={'meal-detail'}>
                    <IoMdPeople/>
                    <input
                        type={'number'}
                        value={portion}
                        placeholder={"Portion for:"}
                        className={'meal-number-input'}
                        onChange={handlePortionChange}/>
                </div>
                <div className={'meal-detail'}>
                    <FaFlag/>
                    <select
                        id="region-select"
                        value={region}
                        onChange={handleRegionChange}
                        className={'meal-number-input'}>
                        <option value="">Select a region</option>
                        <option value="ITALIAN">Italian</option>
                        <option value="POLISH">Polish</option>
                        <option value="ASIAN">Asian</option>
                        <option value="AMERICAN">American</option>
                        <option value="MEXICAN">Mexican</option>
                    </select>
                </div>
                <div className={'meal-detail'}>
                    <RiTimer2Line/>
                    <select
                        id="level-select"
                        value={level}
                        onChange={handleLevelChange}
                        className={'meal-number-input'}>
                        <option value="">Select a difficulty</option>
                        <option value="EASY">Easy</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HARD">Hard</option>
                    </select>
                </div>
            </div>
            <img src={mealImage} alt={'meal'} className={'meal-add-photo'}/>
            <div className={'ingredients-section'}>
                <div className={'ingredients'}>
                    <h2>Ingredients:</h2>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient.ingredientName} - {ingredient.portion}
                            </li>
                        ))}
                    </ul>
                    <div className={'add-step-section'}>
                        <input
                            ref={ingredientInputRef}
                            type={'text'}
                            value={ingredient}
                            placeholder={"Ingredient"}
                            className={'meal-name-input'}
                            style={{width: '30vh'}}
                            onChange={handleIngredientChange}
                        />
                        <input
                            ref={ingredientPortionInputRef}
                            type={'text'}
                            value={ingredientPortion}
                            placeholder={"Portion"}
                            className={'meal-name-input'}
                            style={{width: '20vh'}}
                            onChange={handleIngredientPortionChange}
                        />
                        <Button
                            style={{padding: "9px 20px", fontSize: "16px", textTransform: "none"}}
                            onClick={addIngredient}
                        >Add</Button>
                    </div>
                </div>
            </div>

            <div className={'instructions-section'}>
                <h2>Instructions:</h2>
                {preparationSteps.map((step, index) => (
                    <p key={index}>
                        {index + 1}. {step}
                    </p>
                ))}
                <div className={'add-step-section'}>
                    <input
                        ref={stepInputRef}
                        type={'text'}
                        value={step}
                        placeholder={"Describe next preparation step"}
                        className={'meal-name-input'}
                        onChange={handlePrepStepChange}
                    />
                    <Button
                        style={{padding: "9px 20px", fontSize: "16px", textTransform: "none"}}
                        onClick={addStep}
                    >Add step</Button>
                </div>
                <Button
                    style={{width: "100%", marginTop: "1rem"}}
                    onClick={addMeal}>Add meal</Button>
            </div>
        </div>
    </>
}