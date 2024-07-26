import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';


function BookingPage() {
  const navigate=useNavigate();
  const { id } = useParams();
  const [navigateToConfirm, setNavigateToConfirm] = useState(false);
  const {data:bus,isError}=useQuery({
    queryKey:['GetBus'],
    queryFn:async()=>{
      const res=await fetch(`http://localhost:5000/api/bus/${id}`,{
      method:'GET',
      credentials:'include'
    });
    const data=await res.json();
    
    return data;
    if(!res.ok){
      throw new Error(data.error || 'Something went wrong');
    }
    return data;
  },
  onSuccess:()=>{
    // toast.success('Ticket Booke\d');
  }
  
  });
  const {mutate:bookTicket,isPending:booking}=useMutation({
    mutationKey:['bookTicket'],
    mutationFn:async()=>{
      const res=await fetch('http://localhost:5000/api/ticket',{
        method:'POST',
        credentials:'include',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          busId:id
        })
      });
      const data=await res.json();
      if(!res.ok){
        throw new Error(data.error || 'Something went wrong');
      }
      return data;
    },
    onSuccess:()=>{
      toast.success('Ticket Booked');
      setNavigateToConfirm(true);
    }
  
  })
  if(navigateToConfirm){
    navigate(`/confirm/${id}`);
  }
  
  const {data:authUser}=useQuery({queryKey:['authUser']});

  const handleSubmitClick=(e)=>{
    e.preventDefault();
    bookTicket();
  }
  return (
    <div
    class="flex flex-col min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50"
  >
    <div class="relative">

      <div
        class="relative flex flex-col sm:w-[30rem] rounded-lg border border-gray-400 bg-white shadow-lg px-4"
      >
        <div class="flex-auto justify-start p-6">
          <div class="flex justify-center">
            <img
              src="/assets/images/img_group_29.svg"
              alt="group 29"
              class="h-[100px] w-[37%] pb-10"
            />
          </div>
          <div class="flex justify-center">
            <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">
              Confirm Your Ticket!
            </h4>
          </div>

          <p class="mb-4 font-semibold mt-4 text-gray-500">{}</p>

            
            <div class="flex items-center justify-between sm:block">
              <div class="mb-4">
                <p
                  class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900"
                >
                  From: <spac class="text-gray-700">{bus?.from}</spac>
                </p>
              </div>

              <div class="mb-4">
                <p
                  class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900"
                >
                  To: <spac class="text-gray-700">{bus?.to}</spac>
                </p>
              </div>
            </div>

            <div class="mb-4">
              <p
                class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900"
              >
                Bus Number: <spac class="text-gray-700">{bus?.busNumber}</spac>
              </p>
            </div>

            <div class="mb-4">
              <p
                class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900"
              >
                Location: <spac class="text-gray-700">{bus?.location}</spac>
              </p>
            </div>

            <div class="mb-4">
              <p
                class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900"
              >
                Date: <spac class="text-gray-700">20-07-2022</spac>
              </p>
            </div>
            <div class="mb-4">
              <p
                class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900"
              >
                Time: <spac class="text-gray-700">6:30 Pm</spac>
              </p>
            </div>

            <div class="mb-4">
              <p
                class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900"
              >
                Name: <spac class="text-gray-700">{authUser?.firstName + " " + authUser?.lastName}</spac>
              </p>
            </div>

            <div class="mb-4">
              <p
                class="mb-2 mr-2 inline-block text-xs font-medium uppercase text-black-900"
              >
                Registration Number:{" "}
                <spac class="text-gray-700">{authUser?.username}</spac>
              </p>
            </div>
            <div class="mb-4">
              <p
                class="mb-2 mr-2 inline-block text-xs font-medium text-black-900"
              >
                Email:{" "}
                <spac class="text-gray-700">{authUser?.email}</spac>
              </p>
            </div>
          
            
            <Link to='/confirm'>
            <button onClick={handleSubmitClick} class="grid w-full cursor-pointer select-none rounded-md border border-green-500 bg-green-500 py-2 px-5 text-center align-middle text-sm text-white-A700 shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white">
              {
                booking ? 'booking...' : 'Confirm'
              }
            </button>
            </Link>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default BookingPage
