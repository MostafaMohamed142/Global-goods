import { useState,useEffect } from "react";
import axios from "axios";
// import { cartItem } from "../redux/cartslice";
interface Rating  {
    rate:number;
    count:number
}
export interface cart {
    title?:string;
    image?:string;
    price?:number;
    rating?:Rating;
    count?:Rating;
    description?:string
    id?:number
    quantity?:number
}
export type Data = {
    assets:any;
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