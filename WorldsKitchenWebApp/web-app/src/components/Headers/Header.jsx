import Button from "../Button/Button";
import './Header.css'
import Logo from "../Logo/Logo";
import {useNavigate} from "react-router-dom";

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
                <Button type={'outline'} onClick={() => navigate('/signin')}>Log in</Button>
                <Button onClick={() => navigate('/todo')}>Sign up</Button>
            </div>
        </header>
    )
}