import Button from "../Button/Button";
import './Header.css'
import Logo from "../Logo/Logo";

export default function Header({tabs}) {
    const TABS = tabs ? tabs : []

    return (
        <header id="App-header">
            <Logo/>
            <ol className={'header-menu'}>
                {TABS.map((tab, tabIndex) =>
                    <li key={tabIndex}>{tab}</li>)}
            </ol>
            <div className={'button-container'}>
                <Button type={'outline'}>Log in</Button>
                <Button>Sign up</Button>
            </div>
        </header>
    )
}