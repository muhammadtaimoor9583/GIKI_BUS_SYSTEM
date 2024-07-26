import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";

function Header() {
  const queryClient=useQueryClient();
  const {data:authUser}=useQuery({queryKey:['authUser']});
  const {mutate:handleLogOut,isError,isPending}=useMutation({
    mutationKey:'logout',
    mutationFn:async()=>{
      const res=await fetch('http://localhost:5000/api/auth/logout',{
        method:'POST',
        credentials:'include'
      });
      const data=await res.json();
      if(!res.ok){
        throw new Error(data.error || 'Something went wrong');
      }
      return data;
    },
    onError:(err)=>{
      console.log(err.message);
    },
    onSuccess:(data)=>{
      console.log(data);
      //invalidate authUser query
      queryClient.invalidateQueries({queryKey:['authUser']});

    }
  })

  
  return (
    <div className=" flex justify-center w-full fixed top-2">
      <div className="flex flex-row justify-between  h-14 w-11/12 ">
        <div className="flex items-center">
          <img
            src="/assets/images/img_group_29.svg"
            alt="logo"
            className="w-10/12 h-full"
          />
        </div>
        <div className="flex items-center space-x-4">
          {!authUser ? (<Link to="login" >
           <button className="btn btn-info">
            Log In
          </button>

          </Link>) :
           (<Link to="/" >
           <button className="btn btn-info" onClick={handleLogOut}>
            Log out
          </button>

          </Link>)
          }
          {
            !authUser ? 
            <Link to="signup">
          <button className="btn btn-info">
            Sign up
          </button>
          </Link>
          : 
          <Link to="profile">
          <button className="btn btn-info">
            Profile
          </button>
          </Link>
          }
        </div>
      </div>
    </div>
  );
}

export default Header;
