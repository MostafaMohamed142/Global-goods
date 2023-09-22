import {useEffect} from 'react'
import { auth } from "./firebase";
import { useDispatch } from 'react-redux';
import {User, setError, setUser } from '../redux/UserSlice';


const Auth = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const data = auth.onAuthStateChanged((user:any)=>{
            try {
               if(user){
                const firebaseUser : User ={
                  uid: user.uid,
                  displayName:user.displayName,
                  email:user.email
                }
                dispatch(setUser(firebaseUser))
               }else{
                dispatch(setUser(null))
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