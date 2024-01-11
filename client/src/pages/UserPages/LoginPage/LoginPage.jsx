import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import Login from '../../../components/Login/Login';
import axiosInstance from '../../../axios-config/axios.config';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../../../redux/user/userSlice';
import { useDispatch } from 'react-redux';


const LoginPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = form.username.value;
        const password = form.password.value;

        const signInPayload = {
            email: userName,
            password: password
        }

        dispatch(signInStart())
        axiosInstance.post("/api/auth/signin", signInPayload)
            .then((res) => {
                console.log(res.data)
                if (res.status == 200) {
                    dispatch(signInSuccess(res.data))
                    // localStorage.setItem("token",res.data.token)
                    navigate("/user/book")
                }
            })
            .catch((error) => {
                console.error("Error signing in ", error)
                dispatch(signInFailure(error.response.data.message))
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.response.data.message}`,
                });
            })
    }



    return (
        <div className='' >
            <Header></Header>

            <div className='flex flex-col items-center justify-center mb-24 mt-36'>
                <Login
                    handleSubmit={handleSubmit}
                ></Login>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default LoginPage;