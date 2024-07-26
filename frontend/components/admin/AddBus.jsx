import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';

const AddBus = () => {
  const [formData,setFormData]=useState({
    busName:'',
    busNumber:'',
    busCapacity:'',
    from:'',
    to:'',
    busDate:null,
    location:'',
    busDriver:'', 
    driverContact:'',
    busImage:''
  })

  const {mutate:addBus,isError,isPending}=useMutation({
    mutationKey:['addBus'],
    mutationFn:async({formData})=>{
      const res=await fetch('http://localhost:5000/api/bus',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(formData)

      });
      console.log(formData)
      const data=await res.json();
      if(!res.ok){
        throw new Error(data.error || 'Something went wrong');
      }
      return data;
    },
    onError:(err)=>{
      toast.error(err.message)
    },
    onSuccess:()=>{
      toast.success('Bus added successfully');
      setFormData({
          busName:'',
          busNumber:'',
          busCapacity:'',
          from:'',
          to:'',
          location:'',
          busDriver:'',
          driverContact:'',
          busImage:''
      })
    }
  })


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    addBus({formData});
  }
  return (
    <div>
      <div className="z-10 isolate  px-6 py-24 sm:py-32 lg:px-8">
      
          <div
            className="relative left-1/2"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
       
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center w-full">
            <img src="/assets/images/img_group_29.svg" alt="logo" />
          </div>
          <p className="mt-10 text-lg leading-8 text-gray-600">
            Welcome to Raah-e-Safar
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto  max-w-xl mt-5">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlhtmlFor="busName"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Bus Name 
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={formData.busName}
                  type="text"
                  name="busName"
                  id="first-name"
                  autocomplete="given-name"
                  placeholder="Bus name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-900 ring-1 ring-inset ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="busNumber"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Bus Number
              </label>
              <div className="mt-2.5">
                <input
                onChange={handleChange}
                value={formData.busNumber}
                  type="text"
                  name="busNumber"
                  id="last-name"
                  autocomplete="family-name"
                  placeholder="Bus Number"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="capacity"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Capacity
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={formData.busCapacity}
                  type="number"
                  name="busCapacity"
                  id="email"
                  autocomplete="organization"
                  placeholder="Bus Capacity"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="from"
                className="block text-sm font-semibold leading-6 text-black"
              >
                From Location
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={formData.from}
                  type="text"
                  name="from"
                  id="from"
                  autocomplete="organization"
                  placeholder="From Location"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="to"
                className="block text-sm font-semibold leading-6 text-black"
              >
                To Location
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={formData.to}
                  type="text"
                  name="to"
                  id="to"
                  autocomplete="email"
                  placeholder="To Location"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
            <label
            htmlFor="busDate"
            className="block text-sm font-semibold leading-6 text-black"
            >
        Select Date and Time:
        <input
          type="datetime-local"
          name='busDate'
          id='busDate'
          value={formData.busDate}
          onChange={handleChange}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
          required
        />
      </label> 
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Location
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={formData.location}
                  type="text"
                  name="location"
                  id="location"
                  autocomplete="email"
                  placeholder="Location of Stay"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="busDriver"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Driver Name
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={formData.busDriver}
                  type="text"
                  name="busDriver"
                  id="busDriver"
                  autocomplete="email"
                  placeholder="Driver name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="driverContact"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Driver Contact
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={formData.driverContact}
                  type="text"
                  name="driverContact"
                  id="driverContact"
                  autocomplete="email"
                  placeholder="Driver Contact"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="busImage"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Bus Image
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={formData.busImage}
                  type='file'
                  name="busImage"
                  id="busImage"
                  placeholder=""
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-900 ring-blue-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                ></input>
                <div className="text-red-600"></div>
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <button
                  type="button"
                  className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="switch-1-label"
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  ></span>
                </button>
              </div>
              <label
                className="text-sm leading-6 text-gray-600"
                id="switch-1-label"
              >
                By selecting you agree our{" "}
                <a href="#" className="font-semibold text-red-600">
                  privacy&nbsp;policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={handleSubmit}
              type="submit"
              
              className="block w-full rounded-md bg-blue-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              // disabled={ !formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.Re_password || !formData.position || formData.password !== formData.Re_password}
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center w-full flex-col">
          <p>Already have an account?</p>
          <Link to="/login">
            <button className="text-blue-800 underline ">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddBus;


