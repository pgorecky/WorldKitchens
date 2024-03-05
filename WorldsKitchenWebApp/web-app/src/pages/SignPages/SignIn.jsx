import SignForm from "../../layouts/SignForm/SignForm";
import Alert from "../../components/Alerts/Alert";
import FormInput from "../../components/Inputs/FormInput";
import {FaFacebookF, FaGoogle, FaUserAlt} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {removeAuthHeader, setAuthHeader} from "../../services/API_CONFIG";
import {loginRequest} from "../../services/auth/AuthService";

export default function SignIn() {
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async () => {
        removeAuthHeader();
        try {
            const response = await loginRequest({
                login: username,
                password: password
            });
            await setAuthHeader(response.data.token)
            navigate("/todo")
        } catch (error) {
            setErrorMessage(() => {
                if (error.response.status === 400) {
                    return 'Incorrect password! Try again, if you forgot your password try to restore it.'
                } else if (error.response.status === 404) {
                    return 'There is no such user! Check the name you entered. If you dont have an account yet - create one.'
                }
            })

        }
    }

    return <>
            <SignForm title={'Login'}>
                {errorMessage &&
                    <Alert
                        type={'danger'}
                        title={'Login failed!'}
                        message={errorMessage}
                        onClose={() => setErrorMessage(null)}
                    />}
                <div className={'inputs-container'}>
                    <FormInput
                        id={'username'}
                        placeholder={'Username or e-mail'}
                        type={'text'}
                        className={'form-input'}
                        Icon={FaUserAlt}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FormInput
                        id={'password'}
                        placeholder={'Enter your password'}
                        type={'password'}
                        className={'form-input'}
                        Icon={RiLockPasswordFill}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className={'remind-password'}>
                    <span>Forget password? <a href={'/'} className={'link'}>Remind password</a></span>
                </div>

                <Button
                    type={'form'}
                    onClick={handleSubmit}
                >Log in</Button>

                <div className={'divider'}>or</div>
                <span style={{color: 'gray', margin: '2vh', fontSize: '1.5vh'}}>Sign in with:</span>
                <div className={'icons-container'} style={{marginBottom: '5vh'}}>
                    <a href={'/todo'}>
                        <div className={'icon-border facebook'}>
                            <FaFacebookF size={'2vh'}/>
                        </div>
                    </a>
                    <a href={'/todo'}>
                        <div className={'icon-border google'}>
                            <FaGoogle size={'2vh'}/>
                        </div>
                    </a>

                </div>
                <span style={{color: 'gray'}}>Don't have an account? <a href={'/signup'} className={'link'}>Sign up</a></span>
            </SignForm>
        </>
}