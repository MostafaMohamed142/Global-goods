import { useState,useEffect } from "react";
import axios from "axios";
export type Data = {
    assets:string[];
    loading:boolean;
    error: string;
}
 const UseFetch =(url:string):Data=>{
    const [data,setData] = useState<Data>({assets:[],loading:true,error:""});
   
        useEffect(()=>{
            const fetchedData = async () =>{
                try{
                    const response = await axios.get(url);
                    setData({assets:response.data,loading:false,error:""});
                    
                    console.log(response);
                    
                }catch(error){
                    setData({assets:[],loading:false,error:"there's a problem"})
                }
                
            }
            fetchedData();
        },[url])
        
        return data
}
export default UseFetch;