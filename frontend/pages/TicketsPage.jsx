import React from 'react'
import { useQuery } from 'react-query'
import LoadingSpinner from '../components/LoadingSpinner';
import { Link } from 'react-router-dom';
import { formatPostDate, getFormatedDate, getFormatedTime } from '../utils/GetDate.js';


function TicketsPage() {
  const {data:buses,isError,isLoading}=useQuery({
    queryKey:['buses'],
    queryFn:async()=>{
      const res=await fetch('http://localhost:5000/api/bus',{
        method:'GET',
        credentials:'include'
      });
      const data=await res.json();
      if(!res.ok){
        throw new Error (data.error || 'Something went wrong');
      }
      return data;
    },
    onSuccess:(data)=>{
      console.log(data);
    }
    
  })
  
  if(isLoading){
    return <LoadingSpinner/>
  }
  if(isError){
    return <div>{error.message}</div>
  }
  return (
    <div className='bg-gray-50 h-screen'>
    <div className='w-full flex items-center justify-center text-blue-700'>
    <h1 className='font-bold text-4xl mt-10'>Available Tickets</h1>
  </div>
        <div
class="flex w-full flex-row items-center px-3 pt-3 md:pb-5"
>
  
      {
        
         buses.map((bus)=>{
           const date=getFormatedDate(bus.busDate);
           const time=getFormatedTime(bus.busDate);
          return(
    <Link to={`/booking/${bus._id}`}>
      <div class="container-sm w-[97%] h-[100%] md:p-5">
      
      <div
        class="flex flex-row flex-wrap justify-between container-sm mt-[86px] "
      >
        <div class="pb-5 flex justify-center items-center">
          <a href="#" target="_blank">
            <div
              class="w-96 h-60 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
            >
              <img
                class="relative object-cover w-full h-full rounded-xl"
                src="/assets/images/kGkSg1v.png"
              />

              <div class="w-full px-8 absolute top-8">
                <div class="flex justify-between">
                  <div>
                  <h1 class="text-2xl font-bold">{bus.busName.toUpperCase()}</h1>
                  </div>
                  <div class="">
                    <p class="font-medium tracking-widest">
                      {bus.from}
                    </p>
                    <p>to</p>
                    <p class="font-medium tracking-widest">
                      {bus.to}
                    </p>
                  </div>

                </div>

                <div class="pt-6">
                  <div class="flex justify-between">
                    <div class="">
                      <p class="font-light text-xs">Ticket No</p>
                      <p class="font-medium tracking-wider text-sm">
                        {bus.busCapacity}
                      </p>
                    </div>
                    <div class="">
                      <p class="font-light text-xs">Date</p>
                      <p class="font-medium tracking-wider text-sm">
                        {date}
                      </p>
                    </div>

                    <div class="">
                      <p class="font-light text-xs">Time</p>
                      <p class="font-medium tracking-wider text-sm">
                        {time}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="pt-6 pr-6">
                  <div class="flex justify-between">
                    <div class="">
                      <p class="font-light text-xs">Location</p>
                      <p class="font-medium tracking-wider text-sm">
                        {bus.location}
                      </p>
                    </div>
                    <div class="">
                      <p class="font-light text-xs">Bus No</p>
                      <p class="font-medium tracking-wider text-sm">
                        {bus.busNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      
    </div>
    </Link>
          )
          
        })
      }
  </div>
  </div>
    
  )
}

export default TicketsPage
