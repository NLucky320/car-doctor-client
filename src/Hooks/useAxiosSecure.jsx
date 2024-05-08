import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const { logOut } = UseAuth();
    const navigate = useNavigate(); // Correct import

    useEffect(() => {
        axiosSecure.interceptors.response.use(
            res => res,
            error => {
                console.log('error', error.response)
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log('logout the user')
                    logOut()
                        .then(() => {
                            navigate('/')
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
                return Promise.reject(error);
            }
        );
    }, []);

    return axiosSecure;
};

export default useAxiosSecure;
