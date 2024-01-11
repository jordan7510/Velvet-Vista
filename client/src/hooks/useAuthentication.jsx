import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useAuthentication = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token")
            const payload = { token: token }
            if (!token) {
                setUser(null)
                return
            }

            await axios.post("http://localhost:3500/api/auth/checkAuth", payload)
                .then((res) => {
                    if (res.status === 200) {
                        setUser(res.data.userInfo)
                    } else {
                        setUser(null)
                    }
                })
                .catch((error) => {
                    console.error("Error checking authentication status.", error)
                    setUser(null)
                })
        }
        checkAuth()
    }, [])

    return { user, setUser };
};

export default useAuthentication;