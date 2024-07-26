import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useMutation } from 'react-query'
import {useParams,useNavigate} from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner';

function ResetPasswordForm() {
  const navigate=useNavigate();
  const [showForm,setShowForm]=useState(false);
  const [formData,setFormData]=useState({
    password:'',
    rePassword:'',
  })
  const {token}= useParams(); 
  const {mutate:checkVerification,isPending}=useMutation({
    mutationKey:['checkVeri'],
    mutationFn:async(token)=>{
        try {
            const res=await fetch(`http://localhost:5000/api/auth/verify/password/${token}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:'include',
            });
            const data=await res.json();
            if(!res.ok){
                throw new Error(data.error || 'Something went wrong');
            }
            return data;
        } catch (error) {
            console.log(error.message);
        }
    },
    onSuccess:()=>{
      setShowForm(true);
    }
  });
  const {mutate:updatePassword,isPending:isUpdating}=useMutation({
    mutationKey:['updatePassword'],
    mutationFn:async(formData)=>{
        try {
            const res=await fetch(`http://localhost:5000/api/auth/updatepassword`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:'include',
                body:JSON.stringify(formData)
            });
            const data=await res.json();
            if(!res.ok){
                throw new Error(data.error || 'Something went wrong');
            }
            return data;
        } catch (error) {
            console.log(error.message);
            throw new Error(error.message || 'Something went wrong');

        }
    },
    onSuccess:()=>{
      toast.success('Password updated successfully');
      navigate("/reset-password-complete");
    },
    onError:(err)=>{
      toast.error(err.message || 'Something went wrong')
    }
  
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    updatePassword(formData);
  }
  const handleChange=e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    checkVerification(token);
  },[]);

  if(isPending){
    return <LoadingSpinner/>
  }

  if(!showForm){
    return <div>You cannot reset password😒</div>
  }
  return (
    <div
  class="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-600"
>
  <div class="relative">
    <div
      class="flex flex-col sm:w-96 rounded-lg border border-gray-400 bg-white shadow-lg px-4 py-6"
    >
      <div class="flex justify-center mb-6">
        <img
          src="/assets/images/img_group_29.svg"
          alt="group 29"
          class="h-24 w-24"
        />
      </div>

      <p class="mb-4 text-center text-gray-500">
        Enter Your New Password Twice
      </p>

      <form class="mb-4" action="" method="POST">
        <label
        htmlFor='password'
        className='w-full text-left font-bold text-l'
        >
            Password
        </label>
      <input
                
                type='password'
                value={formData.password}
                onChange={handleChange}
                name='password'
                id='password'
                placeholder='Enter Password'
                className='w-full rounded border-blue-700 border-2 focus:bg-blue-200 px-5 py-3 mb-5 mt-2'
                
                />
        <label
        htmlFor='re-password'
        className='w-full text-left font-bold text-l'
        >
            Password
        </label>
        <input
                type='password'
                value={formData.rePassword}
                onChange={handleChange}
                name='rePassword'
                id='re-password'
                placeholder='Re-enter Password'
                className='w-full rounded border-blue-700 border-2 focus:bg-blue-200 px-5 py-3 mb-5 mt-2'
                
                />

        <button
          type="submit"
          class="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          {!isUpdating ? 'Update Password' : 'Updating...'}
        </button>
      </form>
    </div>
  </div>
</div>
  )
}

export default ResetPasswordForm
