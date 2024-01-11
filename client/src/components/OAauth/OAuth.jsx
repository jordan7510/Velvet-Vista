import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
import { app } from "../../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";
import axiosInstance from "../../axios-config/axios.config";
import { useNavigate } from "react-router-dom";


const OAuth = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleClick = async () => {
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth, provider)
        console.log("google result", result);

        if (!result) {
            console.log("Google sigin in error");
            return
        }

        if (result) {
            const payload = {
                name: result.user.displayName,
                email: result.user.email,
                profilePicture: result.user.photoURL
            }

           await axiosInstance.post("/api/auth/google", payload)
                .then((res) => {
                    console.log("google sign in response ", res);
                    if(res.status === 200){
                        dispatch(signInSuccess(res.data))
                        navigate("/user/book")
                    }

                })
                .catch((error) => {
                    console.error("Error sign in / sign up with google", error)
                })
        }

    }

    return (
        <div>
            <button onClick={handleGoogleClick} aria-label="Log in with Google" className="p-3 rounded-sm">
                <FcGoogle className='text-2xl' />
            </button>
        </div>
    );
};

export default OAuth;