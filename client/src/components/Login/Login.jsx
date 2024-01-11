import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import OAuth from "../OAauth/OAuth";
import Spinner from "../Spinner/Spinner";

const Login = ({ handleSubmit}) => {

    const {loading} = useSelector((state)=> state.user)
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#fff8f5] text-gray-800 shadow-xl">
            <h1 className="text-2xl text-[#f63e7b] font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <input required type="text" name="username" id="username" placeholder="Username (Your Email)" className="w-full px-4 py-3 rounded-md border-2 border-gray-300 outline-none bg-white text-gray-800 focus:border-[#f63e7b]" />
                </div>
                <div className="space-y-1 text-sm">
                    <input required type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-2 border-gray-300 outline-none bg-white text-gray-800 focus:border-[#f63e7b]" />
                    <div className="flex justify-end text-xs text-gray-600">
                        {/* <a className="hover:text-[#f63e7b]" rel="noopener noreferrer" href="#">Forgot Password?</a> */}
                    </div>
                </div>
                <button className="w-full p-3 disabled:opacity-80 flex items-center font-medium justify-center rounded-sm text-white bg-[#f63e7b] hover:opacity-90">
                    {
                        loading ? (<Spinner/>) : ("Sign In")
                    }
                </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
                {/* <button aria-label="Log in with Google" className="p-3 rounded-sm">
                    <FcGoogle className='text-2xl' />
                </button> */}
                <OAuth></OAuth>
            </div>
            <p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account?
                <Link to={"/create-account"}>
                    <span className="underline text-gray-800 hover:text-[#f63e7b]"> Create account</span>
                </Link>
            </p>
        </div>
    );
};

export default Login;