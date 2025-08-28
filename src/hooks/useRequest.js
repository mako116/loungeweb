// useRequest.js
import { useState } from "react";
import axiosClient from "../axiosClient";
import { toast } from "react-toastify";

export const useRequest = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [response, setResponse] = useState(null);
    

    const makeRequest = async (url, data) => {
        setLoading(true);
        setError('');
        setSuccess(false);
        setResponse(null);
       

        try {
            const res = await axiosClient.post(url, data);

       
            
            if (res.data.status) {
                setSuccess(true);
                setResponse(res.data);
                return { response: res.data };
            }
           
            if(res.data.error){
               
                setError(res.data.error);
                toast.error(res.data.error);
                return {error: res.data.error}
            }
        } catch (error) {
            console.log(error);
            if(error?.response?.data.message){
                toast.error(error.response.data.message);
            }
            if(error?.response?.data.error){
               toast.error(error.response.data.error);
               setError(error.response.data.error);
                return {error: error.response.data.error}
            }
            const err = error?.response?.data.message || 'Server Error';
            if(err==="Server Error"){
                toast.error(err);
            }
            setError(err);

            return { error: err };
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        success,
        response,
        makeRequest,
    };
};
