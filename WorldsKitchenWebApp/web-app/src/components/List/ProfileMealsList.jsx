import './List.css'
import {useNavigate} from "react-router-dom";

export default function ProfileMealsList({mealsList}) {
    const navigate = useNavigate()

    function handleRedirect(mealId) {
        navigate(`/meals/${mealId}`)
    }

    return (
        <div id={'List'}>
            {mealsList.length > 0 ? (
                mealsList.map((meal) => (
                    <div key={meal.id} className={'list-element'} onClick={() => handleRedirect(meal.id)}>
                        <div className={'list-images-container'}>
                            <img src={meal.imageUrl} alt={'recipe'} className={'list-image'}/>
                        </div>
                        <div className={'list-text-container'}>
                            <div className={'list-meal-details'}>
                                <p className={'meal-name'}>{meal.name}</p>
                                <div className={'details-item'}>
                                    <p className={'details-description'}>Cuisine:</p>
                                    <p className={'details-value'}> {meal.region}</p>
                                </div>
                                <div className={'details-item'}>
                                    <p className={'details-description'}>Calories:</p>
                                    <p className={'details-value'}> {meal.calories}</p>
                                </div>
                                <div className={'details-item'}>
                                    <p className={'details-description'}>Level:</p>
                                    <p className={'details-value'}> {meal.level}</p>
                                </div>
                                <div className={'details-item'}>
                                    <p className={'details-description'}>Preparation time:</p>
                                    <p className={'details-value'}> {meal.preparationTime}</p>
                                </div>
                            </div>
                            <p className={'meal-description'}>{meal.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>There are no recipes yet</p>
            )}
        </div>
    );
}
