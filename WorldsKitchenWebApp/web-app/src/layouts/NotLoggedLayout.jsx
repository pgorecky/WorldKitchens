import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getAuthToken} from "../services/API_CONFIG";
import {ALL_MEAL_PAGE} from "../const/Consts";

function NotLoggedLayout() {
    const navigate = useNavigate();


    useEffect(() => {
        if (getAuthToken()) {
            navigate(ALL_MEAL_PAGE)
        }
    }, []);

    return <>
        <Outlet/>
    </>
}

export default NotLoggedLayout