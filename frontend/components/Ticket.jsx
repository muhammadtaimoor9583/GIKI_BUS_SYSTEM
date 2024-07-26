import React from 'react'
import { Link } from 'react-router-dom'
import {CiTrash} from 'react-icons/ci'
import { useMutation } from 'react-query'
import toast from 'react-hot-toast';

import {useQueryClient} from 'react-query';


function Ticket({bus,date,time,isAdmin}) {
  const queryClient=useQueryClient();
  const {mutate:deleteBus,isPending:deletingBus}=useMutation({
    mutationKey:['deleteBus'],
    mutationFn:async(busId)=>{
      try {
        const res=await fetch(`http://localhost:5000/api/bus/${busId}`,{
          method:'DELETE',
          credentials:'include'
        });
        const data=await res.json();
        if(!res.ok){
          throw new Error(data.error || 'Something went wrong');
        }
        console.log(data);
        return data;
      } catch (error) {
        console.log('something went wrong');
        throw new Error(error.message)
    }
    },
    onSuccess:()=>{
      toast.success('Bus deleted successfully');
      queryClient.invalidateQueries({queryKey:['buses']});

    }

  })
  return (
   
    <div class="container-sm w-[97%] h-[100%] md:p-5">
    
    <div
      class="flex flex-row flex-wrap justify-between container-sm mt-[86px] "
    >
      <div class="pb-5 flex justify-center items-center">
        
          <div
            class="w-96 h-60 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
          >
            <img
              class="relative object-cover w-full h-full rounded-xl"
              src="/assets/images/kGkSg1v.png"
            />
            {isAdmin && 
            <div class="w-5 h-5 absolute top-2 right-2  hover:bg-blue-900 rounded flex items-center justify-center pointer" onClick={()=>{deleteBus(bus?._id)}}><CiTrash/></div>
            }
            <div class="w-full px-8 absolute top-8">
              <div class="flex justify-between">
                <div>
                <h1 class="text-2xl font-bold">{bus?.busName.toUpperCase()}</h1>
                </div>
                <div class="">
                  <p class="font-medium tracking-widest">
                    {bus?.from}
                  </p>
                  <p>to</p>
                  <p class="font-medium tracking-widest">
                    {bus?.to}
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
      </div>
    </div>
    
  </div>
  
  )
}

export default Ticket
