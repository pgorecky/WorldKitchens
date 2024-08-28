import './SignForm.css'
import Footer from "../Footer/Footer";

export default function SignForm({title, children}) {
    return <>
        <div id={'SignForm'}>
            <div className={'form-container'}>
                <h1 className={'form-title'}>{title}</h1>
                {children}
            </div>
            <Footer style={{position: "fixed", bottom: 0}}/>
        </div>
    </>
}