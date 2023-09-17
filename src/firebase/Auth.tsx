import {useEffect} from 'react'
import { auth } from "./firebase";
import { useDispatch } from 'react-redux';
import {setError, setUser } from '../redux/UserSlice';


const Auth = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const data = auth.onAuthStateChanged((user:any)=>{
            try {
               if(user){
                dispatch(setUser(user))
               }
            } catch (error:any) {
                setError(error.message)
            }
        })
        return ()=> data()
    },[dispatch])
  return (
    <div>Auth</div>
  )
}

export default Auth