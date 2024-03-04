import {GiKitchenKnives} from "react-icons/gi";
import './Logo.css'
import {APP_NAME} from "../../const/Consts";

export default function Logo({color = ''}) {
    return (
        <div id={'logo'} >
            <GiKitchenKnives style={{marginRight: '10px', color: color}}/>
            <text style={{color: color}}>{APP_NAME}</text>
        </div>
    )
}