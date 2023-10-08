import React, { ChangeEvent, useState } from 'react'
import axios from 'axios';


export interface client {
    name: string;
    email:string;
    msg:string
}
const End = () => {
    const[client,setClient] = useState<client>({
        name:"",
        email:'',
        msg:''
    })
    const handleChange =({target}:ChangeEvent<HTMLInputElement>)=>{
        setClient({
            ...client,
            [target.name] : target.value
        })
    }
    const handleSubmit = async () => {
        try {
          const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
            personalizations: [
              {
                to: [
                  {
                    email: 'mostafamohamedd67@example.com', // The recipient's email address
                  },
                ],
              },
            ],
            from: {
              email: 'simbawyy10@gmail.com', // Your verified sender email in SendGrid
            },
            subject: 'New Message from Your Website',
            content: [
              {
                type: 'text/plain',
                value: `Name: ${client.name}\nEmail: ${client.email}\nMessage: ${client.msg}`,
              },
            ],
          }, {
            headers: {
              'Authorization': `d-03d953ffae21405e9910fea7683316dd`,
              'Content-Type': 'application/json',
            },
          });
    
          if (response.status === 202) {
            alert('Email sent successfully!');
          } else {
            alert('Error sending email. Please try again later.');
          }
        } catch (error) {
          console.error('Error sending email:', error);
          alert('Error sending email. Please try again later.');
        }
      };
  return (
    <div className='text-center p-10'>
        <h1 className="text-center text-5xl">Thank you for your order!</h1><br />
        <p className="lead text-center text-red-600 text-3xl">Thanks for Reaching here</p>
        <p className='text-3xl mt-3'>You one of  who get here. Any Questions?</p>
        <div className='flex flex-col gap-2 m-auto lg:w-3/12 md:w-3/12 sm:w-100 xs:w-100'>
        <input type='text' value={client.name} name='name' onChange={handleChange} className='rounded mt-10' placeholder='Full Name' style={{border: '1px solid cadetblue',
        padding: '5px 7px'}}/>
        <input type='text' value={client.email} name='email' onChange={handleChange} className='rounded' placeholder='E-mail' style={{border: '1px solid cadetblue',
        padding: '5px 6px'}}/>
         <textarea cols={3} rows={3} value={client.msg} name='textarea' className='rounded bottom-1 border-r-slate-400' onChange={(e) => setClient({
            ...client,
            msg:e.target.value
        })} ></textarea>
        <button onClick={handleSubmit} className='p-2 text-white bg-cyan-800 text-lg'>Email Mostafa</button>
        </div>
       
    </div>
  )
}

export default End;