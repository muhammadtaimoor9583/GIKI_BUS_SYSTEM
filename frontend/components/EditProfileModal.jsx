import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import useUpdateProfile from "../Hooks/useUpdateProfile";

const EditProfileModal = () => {
	const [formData, setFormData] = useState({
		firstName:'',
        lastName:'',
        email:'',
        current_password:'',
        password:'',
		rePassword:'',
        username:''
	});

	
	const {updateProfile,isUpdatingProfile,updated}=useUpdateProfile();
	const closeModal = () => {
		document.getElementById('edit_profile_modal').close();
	};
	
	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const authUser=useQuery({queryKey:['authUser']});
	useEffect(()=>{
		
			setFormData({
				firstName: authUser.data.firstName || "",
				lastName: authUser.data.lastName || "",
				username: authUser.data.username || "",
				email: authUser.data.email || "",
				newPassword: '',
				currentPassword: '',
			});
		
	},[])
	
	return (
		<>
			<div className="w-full py-4 pl-6 pr-3 my-5">
			<button
				className='btn bg-blue-600 text-white hover:bg-blue-700  rounded btn-sm h-12 px-8'
				onClick={() => document.getElementById("edit_profile_modal").showModal()}
			>
				Edit profile
			</button>
			</div>
			<dialog id='edit_profile_modal' className='modal'>
				<div className='modal-box border rounded-md border-gray-700 shadow-md'>
					<h3 className='font-bold text-lg my-3'>Update Profile</h3>
					<form
						className='flex flex-col gap-4'
						onSubmit={(e) => {
							e.preventDefault();
							
						}}
					>
						<div className='flex flex-wrap gap-2'>
							<input
								type='text'
								placeholder='First Name'
								className='flex-1 input border border-gray-700 rounded p-2 input-md'
								value={formData?.firstName}
								name='firstName'
								onChange={handleInputChange}
							/>
							<input
								type='text'
								placeholder='Last Name'
								className='flex-1 input border border-gray-700 rounded p-2 input-md'
								value={formData?.lastName}
								name='lastName'
								onChange={handleInputChange}
							/>
						</div>
						<div className='flex flex-wrap gap-2'>
							<input
								type='email'
								placeholder='Email'
								className='flex-1 input border border-gray-700 rounded p-2 input-md'
								value={formData?.email}
								name='email'
								onChange={handleInputChange}
							/>
							<input
                                type="number"
								placeholder='username'
								className='flex-1 input border border-gray-700 rounded p-2 input-md'
								value={formData?.username}
								name='username'
								onChange={handleInputChange}
							/>
						</div>
							<input
								type='password'
								placeholder='Current Password'
								className='flex-1 input border border-gray-700 rounded p-2 input-md'
								value={formData.current_password}
								name='current_password'
								onChange={handleInputChange}
							/>
						<div className='flex flex-wrap gap-2'>
							<input
								type='password'
								placeholder='New Password'
								className='flex-1 input border border-gray-700 rounded p-2 input-md'
								value={formData?.password}
								name='password'
								onChange={handleInputChange}
							/>
							<input
								type='re-password'
								placeholder='Re-Enter new Password'
								className='flex-1 input border border-gray-700 rounded p-2 input-md'
								value={formData?.rePassword}
								name='rePassword'
								onChange={handleInputChange}
							/>
						</div>
						
						<button className='btn btn-primary rounded-full btn-sm text-white' onClick={()=>{ updateProfile(formData); closeModal();}} >
							{isUpdatingProfile ? 'Updating...' : 'Update'}
							</button>
					</form>
				</div>
				<form method='dialog' className='modal-backdrop'>
					<button className='outline-none'>close</button>
				</form>
			</dialog>
		</>
	);
};
export default EditProfileModal;