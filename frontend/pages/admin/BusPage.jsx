import React, { useState } from 'react'
import AddBus from '../../components/admin/AddBus';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../components/LoadingSpinner';
import { getFormatedDate, getFormatedTime } from '../../utils/GetDate';
import Ticket from '../../components/Ticket';

function BusPage() {
    const [searchValue,setSearchValue]=useState('');
    const {data:buses,isError,isLoading}=useQuery({
        queryKey:['buses'],
        queryFn:async()=>{
          try {
            const res=await fetch('http://localhost:5000/api/bus',{
              method:'GET',
              credentials:'include'
            });
            const data=await res.json();
            if(!res.ok){
              throw new Error (data.error || 'Something went wrong');
            }
            return data;
          } catch (error) {
            throw new Error (data.error || 'Something went wrong');
            
          }
        },
        onSuccess:(data)=>{
          console.log(data);
        }
        
      })
    if(isLoading){
        return <LoadingSpinner/>
    }
    

    return (
        <div className='bg-gray-50 min-h-screen w-full'>
        <div className='w-full flex flex-col items-center justify-center text-blue-700 gap-4'>
        <h1 className='font-bold text-4xl mt-10'>Available Buses</h1>
    <form class="w-[50%]">   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" class="text-xl block w-full p-4 ps-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required 
            onChange={(e)=>{setSearchValue(e.target.value)}}
            />
        </div>
    </form>
    
      </div>
            <div
    class="flex w-full flex-row items-center px-3 pt-3 md:pb-5"
    >
          
          {
            
             buses?.map((bus)=>{
               const date=getFormatedDate(bus.busDate);
               const time=getFormatedTime(bus.busDate);
               if(bus.from.toLowerCase().includes(searchValue.toLowerCase()) || bus.to.toLowerCase().includes(searchValue.toLowerCase())){
                
              return(
                <Ticket bus={bus} date={date} time={time} isAdmin={true}/>
              )
            }
            else{
              return null;
            }
            })
            
          }
          
      </div>
      <div className='w-full flex items-center justify-center'>
      <AddBus/>
      </div>

      </div>
        
      )
}

export default BusPage
