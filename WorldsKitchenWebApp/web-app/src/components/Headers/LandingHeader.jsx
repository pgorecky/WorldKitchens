import Button from "../Button/Button";
import './Header.css'
import Logo from "../Logo/Logo";
import {useNavigate} from "react-router-dom";
import {SIGN_IN_PAGE, SIGN_UP_PAGE} from "../../const/Consts";

export default function LandingHeader() {
    const navigate = useNavigate();

    return (
        <header id="App-header">
            <Logo/>
            <div className={'button-container'}>
                <Button type={'outline'} onClick={() => navigate(SIGN_IN_PAGE)}>Log in</Button>
                <Button onClick={() => navigate(SIGN_UP_PAGE)}>Sign up</Button>
            </div>
        </header>
    )
}