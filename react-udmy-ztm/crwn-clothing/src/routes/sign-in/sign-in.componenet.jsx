import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";


const Sign = () => {
    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        console.log(response);
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }
    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default Sign;