import {GiKitchenKnives} from "react-icons/gi";
import './Logo.css'
import {APP_NAME} from "../../const/Consts";

export default function Logo({color = '', iconSize}) {
    return (
        <div id={'logo'} >
            <GiKitchenKnives size={iconSize} style={{marginRight: '10px', color: color}}/>
            <span style={{color: color}}>{APP_NAME}</span>
        </div>
    )
}