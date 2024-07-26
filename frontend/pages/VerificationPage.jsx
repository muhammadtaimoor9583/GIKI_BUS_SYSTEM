import React, { useEffect } from 'react'
import { useMutation } from 'react-query';
import { useParams } from 'react-router-dom';

function VerificationPage() {
    const {token}=useParams();
    const {mutate:verifyUser,isPending}=useMutation({
        mutationKey:['verifyUser'],
        mutationFn:async(token)=>{
           try {
            const res=await fetch(`http://localhost:5000/api/auth/verify/${token}`,{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              credentials:'include',
          });
          const data=await res.json();
          if(!res.ok){
              throw new Error(data.error || 'Something went wrong');
          }
          return data;
           } catch (error) {
            console.log('Error in fetching data',error.message);
           }
        }
    })
    useEffect(()=>{
        verifyUser(token);
    },[]);
  return (
    <div>
    verification completed.
    you have been registered to our website
    </div>
  )
}

export default VerificationPage;
