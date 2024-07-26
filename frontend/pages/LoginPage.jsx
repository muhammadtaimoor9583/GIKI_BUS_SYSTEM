import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import LoadingSpinner from '../components/LoadingSpinner';

function LoginPage() {

  const queryClient=useQueryClient();
  const [formData,setFormData]=useState({
    username:Number,
    password:''
  });

  const {mutate,isError,isPending}=useMutation({
    mutationFn:async({username,password})=>{
      const res=await fetch('http://localhost:5000/api/auth/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        credentials:'include',
        body:JSON.stringify({username,password})
      })
      const data=await res.json();
      if(!res.ok){
        throw new Error (data.error || "Something went wrong");
      }
      return data;
    },

    onError:(err)=>{
      toast.error(err.message);
    },
    onSuccess:()=>{
      //invalidate authUser Query
      queryClient.invalidateQueries({queryKey:['authUser']});
    }


  })
  if(isPending){
    return <LoadingSpinner/>
  }

  

  const handleSubmit=(e)=>{
    e.preventDefault();
    const {username,password}=formData;
    mutate({username,password});
  }


  const handleOnChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  return (
    <div>
       <div
    className="flex flex-col min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50"
  >
    <div className="relative">

      <div
        className="relative flex flex-col sm:w-[30rem] rounded-lg border border-gray-400 bg-white shadow-lg px-4"
      >
        <div className="flex-auto justify-center p-6">
          <div className="flex justify-center">
            <img
              src="assets/images/img_group_29.svg"
              alt="group 29"
              className="h-[100px] w-[37%] pb-10"
            />
          </div>
          <div className="flex justify-center">
            <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
              Welcome to Raah-e-safar!
            </h4>
          </div>
          <div className="bg-blue-700 text-white px-4 py-2" role="alert">
          </div>
  

          <p className="mb-4 mt-4 text-gray-500">
            Please sign-in to access your account
          </p>
          <form id="" className="mb-4" action="" method="POST">
            
            <div className="mb-4">
              <label
                htmlFor="username"
                className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                >Registration Number</label
              >
              <input
                type="number"
                className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                id="username"
                name="username"
                placeholder="Enter your registration number"
                autoFocus=""
                value={formData.username}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <label
                  className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  htmlFor="password"
                  >Password</label
                >
                <a
                  href="/reset_password/" 
                  className="cursor-pointer text-light_blue-900 no-underline hover:text-light_blue-900"
                >
                  <small className=" ">Forgot Password?</small>
                </a>
              </div>
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="password"
                  id="password"
                  name="password"

                  className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"

                  placeholder="············"
                  value={formData.password}
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="block">
                <input
                  className="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-light_blue-900 focus:border-light_blue-900 focus:shadow"
                  type="checkbox"
                  id="remember-me"
                  style={{
                    
                    backgroundImage: "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e')"
                  }}
                  checked
                />
                <label className="inline-block" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
            </div>
            <div className="mb-4">
              <button
                className="grid w-full cursor-pointer select-none rounded-md border border-light_blue-900 bg-light_blue-900 py-2 px-5 text-center align-middle text-sm text-white-A700 shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                type="submit"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mb-4 text-center">
            New on Raah-e-Safar?
            <a
              href="/signup/"
              className="cursor-pointer text-blue-800 no-underline hover:text-blue-900 hover:underline"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    
    </div>
  </div>
    </div>
  )
}

export default LoginPage
