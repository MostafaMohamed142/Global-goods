import React, {useState } from 'react'
import { auth } from '../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/UserSlice'
import { login } from '../images'
const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
    
    
    const handleSignUp = async (e:any)=>{
        e.preventDefault()
        let char = newUser.email.split('@')[0];
        try {
            await createUserWithEmailAndPassword(auth,newUser.email,newUser.password)
            setNewUser({
                email:e.target.value,
                password:e.target.value
            })
            dispatch(setUser({email:newUser.email,displayName:char,uid:''}))
            console.log("sucess")
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <div className='flex lg:gap-0 sm:gap-3 bg-black'>
            <div className='lg:w-3/4 md:w-1/2 sm:w-36'>
                <img src={login} alt='loginpatch' loading='lazy' className='' style={{
                    height: '635px',width:'690px'}}/>
            </div>
      
                    <div className='lg:w-1/3 md:w-1/2 sm:w-20 m-auto flex flex-col gap-6 items-start lg:relative md:absolute sm:absolute xs:absolute md:z-20 sm:z-30 xs:z-10 top-52 p-5'>
                        <input type='text' value={newUser.email} name='email' onChange={handleChange} className='rounded' placeholder='E-mail' style={{border: '1px solid cadetblue',
                            padding: '5px 27px'}}/>
                                    <input type='password' value={newUser.password} name='password' className='rounded' onChange={handleChange} placeholder='Password' style={{border: '1px solid cadetblue',
                            padding: '5px 27px'}}/> 
                                    <button type='submit' onClick={handleSignUp} className='text-xl text-red-600 rounded' style={{border: '1px solid aliceblue',
                            padding: '5px 19px'}}>Join Us!</button> 
                            <br/>
                            <span className='text-lg text-white'>Already a user ? <Link to={'/login'} className='underline text-blue-700'>Login In</Link></span>
                    </div>
      
      
     
  </div>
  )
}

export default SignUp