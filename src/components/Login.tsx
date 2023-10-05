import React, { ChangeEvent } from 'react'
import {useState} from 'react'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { setUser } from '../redux/UserSlice'
import { login } from '../images'

const Login = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const[newUser,setNewUser]= useState({
        email:"",
        password:""
    })
    const handleChange =({target}:ChangeEvent<HTMLInputElement>)=>{
        setNewUser({
            ...newUser,
            [target.name] : target.value
        })
    }
    const  handleLogin = async ()=>{
        let char = newUser.email.split('@')[0];
        try {
            await signInWithEmailAndPassword(auth,newUser.email,newUser.password)
            console.log("sucess")
            dispatch(setUser({email:newUser.email,displayName:char,uid:''}))
            console.log(newUser)
        } catch (error) {
            console.log(error)
        }
        navigate(-1)
        setNewUser({
            email:'',
            password:''
        })
    }
  return (
    <div className='flex lg:gap-0 sm:gap-3 bg-black'>
        <div className='lg:w-3/4 md:w-1/2 sm:w-36'>
            <img src={login} alt='loginpatch' loading='lazy' className='' style={{
                    height: '635px',width:'690px'}}/>
        </div>
        <div className='lg:w-1/3 md:w-1/2 sm:w-20 m-auto flex flex-col gap-6 items-start'>
                <input type='text' value={newUser.email} name='email' onChange={handleChange} className='rounded' placeholder='E-mail' style={{border: '1px solid cadetblue',
  padding: '5px 27px'}}/>
                <input type='password' value={newUser.password} name='password' className='rounded' onChange={handleChange} placeholder='Password' style={{border: '1px solid cadetblue',
  padding: '5px 27px'}}/> 
                <button onClick={handleLogin} className='text-xl text-red-600 rounded' style={{border: '1px solid aliceblue',
  padding: '5px 19px'}}>Login</button> 
                <br/>
                <span className='text-lg text-white'>Not a user ? <Link to={'/signup'} className='underline text-blue-700'>Sign Up</Link></span>
        </div>
       
    </div>
  )
}

export default Login