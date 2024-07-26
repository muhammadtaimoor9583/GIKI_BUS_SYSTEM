import React from 'react'

function AdminHeader() {
  return (
    <div>
      <header className="bg-gray-400 fixed z-50 h-20 top-0 left-0 shadow-inner shadow-black p-4 flex flex-wrap justify-between items-center">
      <div className="flex items-center">
          <img
            src="/assets/images/img_group_29.svg"
            alt="logo"
            className="w-10/12 h-full"
          />
        </div>
        <nav className="flex flex-wrap gap-2">
          <button className="btn btn-primary">Add Bus</button>
          <button className="btn btn-primary">Add Student</button>
          <button className="btn btn-secondary">Check Booked Seats</button>
          <button className="btn btn-secondary">Student History</button>
          <button className="btn btn-secondary">Bus History</button>
          <button className="btn btn-secondary">Current Buses Filter</button>
        </nav>
      </header>
    </div>
  )
}

export default AdminHeader
