import React from 'react'
import AddBus from '../../components/admin/AddBus'
import { Link } from 'react-router-dom'

function AdminLandingPage() {
  return (
    <>
    <div className='flex items-center flex-col justify-center gap-4 mb-10'>
      <img
            src="/assets/images/img_group_29.svg"
            alt="logo"
            className="w-9/12 h-full"
          />
    </div>
    <div className='flex items-center flex-col justify-center gap-4'>
    <Link to='/admin/bus'>
    <button className='btn btn-primary bg-blue-800 w-28 text-xl'>Bus Section</button>
     
      </Link>
      <Link to='/admin/student'>
      <button className='btn btn-primary bg-blue-800 w-28 text-xl'>Student Section</button>
      </Link>
      
    </div>
    </>
  )
}

export default AdminLandingPage
