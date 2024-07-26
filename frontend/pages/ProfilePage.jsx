import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import {MdEdit} from 'react-icons/md'
import EditProfileModal from '../components/EditProfileModal';
import { Link, Navigate } from 'react-router-dom';
import TicketDetails from './TicketDetails';
import useUpdateProfile from '../Hooks/useUpdateProfile';

function ProfilePage(){
    const [profileImg,setProfileImg]=useState(null);

    const profileImgRef = useRef(null);


    const {data:authUser}=useQuery({queryKey:['authUser']});
    const [tab,setTab]=useState('Booked Tickets');
    const handleTabClick=(e)=>{
        e.preventDefault();
        setTab(e.target.innerText);
    }
     
    const {data:MyTickets,isError,isLoading}=useQuery({
        queryKey:['MyTickets'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/api/auth',{
                method:'GET',
                credentials:'include'
                });
            const data=await res.json();
            if(!res.ok){
                throw new Error (data.error || 'Something went wrong');
            }
            return data;
        },
        onError:(err)=>{
            toast.error(err.message);
        }
    });

    const [showUpdate,setShowUpdate]=useState(false);

    



    const {updateProfile,isUpdatingProfile}=useUpdateProfile();

    const handleImgChange = (e, state) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				
				state === "profileImg" && setProfileImg(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};
    
    useEffect(()=>{
        setShowUpdate(profileImg ? true : false);
    },[profileImg]);
  return (
	<div>
	  
<div class="bg-gray-100 pb-96">
    <div class="container mx-auto my-60">
        <div>
            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto" style={{top:"150px"}}>
                <div  className='w-full flex justify-center group/avatar'>
                <div class="flex justify-center">
                        <img src={profileImg ||  authUser?.profilePic || "assets/images/avatar-placeholder.png"}  alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>
                    <div className='show-icon z-10 p-3 opacity-0 group-hover/avatar:opacity-100 relative top-4 left-3 rounded-full hover:bg-gray-300' onClick={() => profileImgRef.current.click()}><MdEdit/></div>
                </div>
                {
                    !showUpdate ? <></> 
                    : 
                    <div className='w-full flex justify-end px-6'>
                <div className='btn bg-white rounded-full hover:bg-blue-700 hover:text-white text-sm' onClick={()=>{updateProfile({profilePic:profileImg}); setProfileImg(null)}}>
                    {isUpdatingProfile ? 'Updating...' : 'Update'}
                </div>
                </div>
                }
                <input
									type='file'
									hidden
									ref={profileImgRef}
									onChange={(e) => handleImgChange(e, "profileImg")}
								/>
                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900">{authUser.firstName + " " + authUser.lastName}</h1>
                    <p class="text-center text-sm text-gray-400 font-medium">{authUser.username}</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    
                    <div class="flex justify-between items-center my-5 px-6">
                        <a href="" class={`text-gray-500 hover:text-gray-900 hover:bg-blue-400 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 ${tab==='My Details' ? 'active' :''}`} onClick={handleTabClick}>My Details</a>
                        <a href="" class={`text-gray-500 hover:text-gray-900 hover:bg-blue-400 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 ${tab==='Booked Tickets' ? 'active' :''}`} onClick={handleTabClick}>Booked Tickets</a>
                    </div>

                    { tab==='My Details' ?
                        <div>
                            <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">

                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                
                                <div className='font-bold text-blue-800'>
                                <span className='text-xl font-semibold text-gray-400'>Email:{' '}</span>
                                {authUser.email}
                                </div>
                                
                            </a>
                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                
                                <div className='font-bold text-blue-800'>
                                <span className='text-xl font-semibold text-gray-400'>Position:{' '}</span>
                                
                                {authUser.position}
                                </div>
                                
                            </a>
                            <a href="#" class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                <div className='font-bold text-blue-800'>
                                <span className='text-xl font-semibold text-gray-400'>Total Tickets Booked:{' '}</span>
                                {authUser.tickets.length}
                                </div>
                            </a>
                            
                        </div>
                        
                    </div>
                    <EditProfileModal/>
                        </div>
                        :
                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6 mb-5">Booked Tickets</h3>
                        {
                        MyTickets?.length ?  
                        MyTickets?.map((ticket)=>{

                            return(
                               <TicketDetails ticket={ticket}/>
                            )
                        })
                        :
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-smweetalert">
                           No tickets booked yet
                            </div>
                        }
                    </div>
                    }
                </div>
            </div>

        </div>
    </div>
</div>

	</div>
  )
}

export default ProfilePage
