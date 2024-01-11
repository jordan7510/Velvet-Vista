import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import CreateAccount from '../../../components/CreateAccount/CreateAccount';
import axiosInstance from '../../../axios-config/axios.config';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccountPage = () => {

    const [showPasswordError, setPasswordError] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    useEffect(()=>{
        window.scrollTo(0, 0);
    })


    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const fname = form.firstName.value;
        const lname = form.lastName.value;
        const email = form.email.value;
        // const phone = form.phone.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please check email pattern.",
            });
            return
        }
        // const phonePattern = /^\d{10}$/;
        // if (!phonePattern.test(phone)) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Please enter valid phone number.",
        //     });
        //     return
        // }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            setPasswordError(!showPasswordError)
            return
        }

        if (password !== conPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password and confirm password does not match.",
            });
            return
        }

        const signUpPayload = {
            name: `${fname + " " + lname}`,
            email: email,
            password: password,
        }
        setLoading(true)

        // Email checking in database
        axiosInstance.post("/api/auth/check-email", { email: email })
            .then((res2) => {
                console.log("res2", res2);
                if (!res2.data.success) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Email already in use.",
                    });
                    setLoading(false)
                    return
                }
                if (res2.data.success) {
                    // New user submission to database
                    axiosInstance.post("/api/auth/signup", signUpPayload)
                        .then((response) => {
                            console.log("User created successfully.", response)
                            if (response.status == 201) {
                                setLoading(false)
                                setError(false)
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Account created successfully.",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                setPasswordError(false)
                                form.reset()
                                navigate("/login")

                            }

                        })
                        .catch((error) => {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong. Please try again later.",
                            });
                            setLoading(false)
                            console.log("Sign up error", error)
                        })
                }
            })
            .catch((error) => {
                console.error("error checking email", error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong. Please try again later.",
                });
                setLoading(false)
            })


        console.log("signUpPayload", signUpPayload);
    }

    return (
        <div className='bg-white' >
            <Header></Header>
            <div className='flex flex-col items-center justify-center mb-24 mt-28'>
                <CreateAccount
                    handleSubmit={handleSubmit}
                    showPasswordError={showPasswordError}
                    loading={loading}
                ></CreateAccount>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CreateAccountPage;