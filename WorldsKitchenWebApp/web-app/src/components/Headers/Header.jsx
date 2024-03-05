import Button from "../Button/Button";
import './Header.css'
import Logo from "../Logo/Logo";
import {useNavigate} from "react-router-dom";
import {SIGN_IN_PAGE, SIGN_UP_PAGE} from "../../const/Consts";

export default function Header({tabs}) {
    const navigate = useNavigate();

    const TABS = tabs ? tabs : []

    return (
        <header id="App-header">
            <Logo/>
            <ol className={'header-menu'}>
                {TABS.map((tab, tabIndex) =>
                    <li key={tabIndex}>{tab}</li>)}
            </ol>
            <div className={'button-container'}>
                <Button type={'outline'} onClick={() => navigate(SIGN_IN_PAGE)}>Log in</Button>
                <Button onClick={() => navigate(SIGN_UP_PAGE)}>Sign up</Button>
            </div>
        </header>
    )
}