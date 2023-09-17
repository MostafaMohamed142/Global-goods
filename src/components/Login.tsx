import React from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    // const navigate = useNavigate()
    const user = useSelector((state:RootState)=> state.User)
    // const auth = getAuth();
    const[newUser,setNewUser]= useState({
        email:"",
        password:""
    })
    const handleChange =({target}:any)=>{
        setNewUser({
            ...newUser,
            [target.name] : target.value
        })
    }
    const handleLogin = async ()=>{
        try {
            await signInWithEmailAndPassword(auth,newUser.email,newUser.password)
            setNewUser({
                email:'',
                password:''
            })
            console.log("sucess")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <div>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' value={newUser.email} name='email' onChange={handleChange} placeholder='enter your first name'/>
        </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' value={newUser.password} name='password' onChange={handleChange} placeholder='enter your first name'/>
        </div>
            <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login