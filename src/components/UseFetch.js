import { useState,useEffect } from "react";
import axios from "axios";

 const UseFetch =(url)=>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
        useEffect(()=>{
            const fetchedData = async () =>{
                try{
                    const response = await axios.get(url);
                    setData(response.data);
                    setLoading(false)
                    console.log(response);
                    
                }catch(error){
                    setError(error);
                    setLoading(false)
                }
                
            }
            fetchedData();
        },[url])
        
        return {data,loading,error}
}
export default UseFetch;