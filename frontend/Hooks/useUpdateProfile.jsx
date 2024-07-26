import { useMutation, useQueryClient } from "react-query"
import toast from "react-hot-toast";


const useUpdateProfile=()=>{
    const queryClient=useQueryClient();
    const {mutateAsync:updateProfile,isPending:isUpdatingProfile,isSuccess:updated}=useMutation({
        mutationKey:['updateProfile'],
        mutationFn:async(data)=>{
            try {
                const res=await fetch('http://localhost:5000/api/auth/update',{
                    method:'POST',
                    credentials:'include',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                });
                const resData=await res.json();
                if(!res.ok){
                    throw new Error(resData.error || 'Something went wrong');
                }
                return resData;
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess:()=>{
            queryClient.invalidateQueries(['authUser']);
            toast.success('Profile updated successfully');
        },
        onError:(data)=>{
            toast.error(data.error || 'Something went wrong');
        },
        
    });
    return {updateProfile,isUpdatingProfile,updated};
}

export default useUpdateProfile