import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {useMutation} from 'react-query'
import {useNavigate} from 'react-router-dom'



function ResetPasswordPage() {
    const navigate=useNavigate();

    const [email,setEmail]=useState('');
    const {mutate:sendEmail,isPending}=useMutation({
        mutationKey:['resetPassword'],
        mutationFn:async(email)=>{
            try {
                const res=await fetch('http://localhost:5000/api/auth/reset',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    credentials:'include',
                    body:JSON.stringify({email})
                });
                const data=await res.json();
                if(!res.ok){
                    throw new Error(data.error || 'Something went wrong');
                }
                return data;
            } catch (error) {
                throw new Error(error.message || 'Something went wrong');
            }
        },
        onSuccess:()=>{
            navigate('/reset-password-sent')
        },
        onError:(err)=>{
            toast.error(err.message || 'Something went wrong');
        }

    })

  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-600">
    <div class="relative">
        <div class="flex flex-col sm:w-96 rounded-lg border border-gray-400 bg-white shadow-lg px-4 py-6">
            <div class="flex justify-center mb-6">
                <img src="assets/images/img_group_29.svg" alt="group 29" class="h-24 w-24" />
            </div>

            <p class="mb-4 text-center text-gray-500">
                Forgotten your password? Enter your email address below, and we will email instructions for setting a new one.
            </p>

            <form class="mb-4" action="" method="POST">
                <input
                type='email'
                name='email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder='Email address'
                className='w-full rounded border-blue-700 border-2 focus:bg-blue-200 px-5 py-3 my-5'
                
                />

                <button type="submit" className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={e=>{e.preventDefault(); sendEmail(email)}}
                >
                    Send Email
                </button>
                
            </form>
        </div>
    </div>
</div>
  )
}

export default ResetPasswordPage
