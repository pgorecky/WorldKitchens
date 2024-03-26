import './Activity.css'
import {useNavigate} from "react-router-dom";

export default function Activity({activity}) {
    const navigate = useNavigate()

    const padWithZero = (number) => {
        return number < 10 ? `0${number}` : number;
    };
    const formatDate = (dateArray) => {
        const [year, month, day, hours, minutes] = dateArray;
        return `${padWithZero(day)}-${padWithZero(month)}-${year} ${padWithZero(hours)}:${padWithZero(minutes)}`;
    };

    const formatActivityType = (activityType) => {
        let textToReturn = 'User '
        switch (activityType) {
            case 'ADD_COMMENT':
                textToReturn += 'commented a '
                break
            case 'ADD_MEAL':
                textToReturn += 'has created a new recipe: '
                break
            case 'LIKE_MEAL':
                textToReturn += 'liked the recipe: '
                break
            case 'UNLIKE_MEAL':
                textToReturn += 'unliked the recipe: '
                break
            default:
                return textToReturn;
        }
        return textToReturn;
    }

    function handleLinkActivity() {
        navigate(`/meals/${activity.dish.id}`)
    }

    return <div className={'activity-container'}>
        <div className={'activity-element'}>
            <div className={'date-container'}>
                <p>{formatDate(activity.date)}</p>
            </div>
            <div className={'activity-text-container'}>
                <p>{formatActivityType(activity.activityType)}</p>
                <p className={'activity-link'} onClick={handleLinkActivity}>{activity.dish.name}</p>
            </div>
        </div>
    </div>
}