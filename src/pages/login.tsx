import { auth, provider } from "../conifg/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate();

    const signInWithGoggle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    };

    return (
        <div>
            <p>Sign In With Google To Continue</p>
            <button onClick={signInWithGoggle}>Sign in With Google</button>
        </div>
    );
}