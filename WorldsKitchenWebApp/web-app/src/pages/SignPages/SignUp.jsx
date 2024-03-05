import SignForm from "../../layouts/SignForm/SignForm";
import FormInput from "../../components/Inputs/FormInput";
import {FaUserAlt} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri";
import {MdAlternateEmail} from "react-icons/md";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {removeAuthHeader} from "../../services/API_CONFIG";
import {signupRequest} from "../../services/auth/AuthService";
import Alert from "../../components/Alerts/Alert";

export default function SignUp() {
    const navigate = useNavigate();

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState(null);

    const [message, setMessage] = useState(null);
    const [alertType, setAlertType] = useState(null);
    const [alertTitle, setAlertTitle] = useState(null);
    const [disabled, setDisabled] = useState(true)

    const handleSubmit = async () => {
        removeAuthHeader();
        try {
            await signupRequest({
                firstName: firstName,
                lastName: lastName,
                // email: email,
                login: username,
                password: password
            })
            setAlertType('success')
            setAlertTitle('Account created successfully!')
            setMessage('Account created successfully, you can now log in to the application.')
        } catch (error) {
            setAlertType('danger')
            setAlertTitle('Registration failed!')
            setMessage('Registration of a new account failed. Check the data you entered and try again..')
        }
    }

    const unlockButton = useCallback(() => {
        if (username && email && firstName && lastName && password && password === repeatedPassword) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [username, email, firstName, lastName, password, repeatedPassword]);

    useEffect(() => {
        unlockButton();
    }, [unlockButton]);

    const handleAlertClose = () => {
        setMessage(null)
        if (alertType === 'success') {
            navigate('/signin')
        }
    }

    return <>
        <SignForm title={'Sign up'}>
            {message &&
                <Alert
                    type={alertType}
                    title={alertTitle}
                    message={message}
                    onClose={handleAlertClose}
                />}
            <div className={'inputs-container'}>
                <FormInput
                    id={'username'}
                    placeholder={'Username'}
                    type={'text'}
                    className={'form-input'}
                    Icon={FaUserAlt}
                    onChange={(e) => setUsername(e.target.value)
                    }
                />
                <FormInput
                    id={'email'}
                    placeholder={'E-mail'}
                    type={'text'}
                    className={'form-input'}
                    Icon={MdAlternateEmail}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormInput
                    id={'firstname'}
                    placeholder={'First Name'}
                    type={'text'}
                    className={'form-input'}
                    Icon={FaUserAlt}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <FormInput
                    id={'lastname'}
                    placeholder={'Last Name'}
                    type={'text'}
                    className={'form-input'}
                    Icon={FaUserAlt}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <FormInput
                    id={'password'}
                    placeholder={'Enter your password'}
                    type={'password'}
                    className={'form-input'}
                    Icon={RiLockPasswordFill}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormInput
                    id={'re-password'}
                    placeholder={'Repeat your password'}
                    type={'password'}
                    className={'form-input'}
                    Icon={RiLockPasswordFill}
                    onChange={(e) => setRepeatedPassword(e.target.value)}
                />
            </div>
            <Button
                type={'form'}
                disabled={disabled}
                onClick={handleSubmit}
                style={{marginTop: '5vh', marginBottom: '4vh'}}
            >Create account</Button>
            <span style={{color: 'gray'}}>Already have an account? <a href={'/signin'}
                                                                      className={'link'}>Log in</a></span>
        </SignForm>
    </>
}