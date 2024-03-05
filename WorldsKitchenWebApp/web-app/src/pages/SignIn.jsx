import Footer from "../components/Footer/Footer";
import SignForm from "../components/SignForm/SignForm";

export default function SignIn() {
    return (
        <>
            <SignForm title={'Login'}/>
            <Footer style={{position: "fixed", bottom: 0}}/>
        </>
    )
}