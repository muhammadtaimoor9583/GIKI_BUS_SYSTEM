import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';

function PrintPage({id}) {
  const {data:bus}=useQuery({queryKey:['GetBus']});
  console.log(bus);
  return (
    <div id='print-page'
    style={{
      maxWidth: "400px",
      margin: "20px auto",
      background:"-",
      border:" 1px solid #ccc",
      padding: "15px",
      boxShadow: "0 4px 8px rgb(0, 0, 0)"
    }}
  >
    <h1 style={{textAlign: "center", fontSize: '24px', color: '#333', margin: '0'}}>
      Ghulam Ishaq Khan Institute of Engineering Sciences and Technology
    </h1>
    <h3
      style={{textAlign: 'center', fontSize: '18px', color: '#333', margin: '10px 0'}}
    >
      GIKI Bus Reservation System
    </h3>
    <div style={{background:"-",  padding: '8px'}}>
      <h4 style={{fontSize: "16px", margin: "10px 0"}}>Ticket Info:</h4>
      <h4 style={{fontSize: "16px", margin: "10px 0"}}>
        Ticket Id: {" 343"} 
      </h4>
      <h4 style={{fontSize: "16px", margin: "10px 0"}}>
        From Destination:  {" Peshawar"}
      </h4>
      <h4 style={{fontSize: "16px", margin: "10px 0"}}>
        To Destination: {" GIKI"}
      </h4>
      <h4 style={{fontSize: "16px", margin: "10px 0"}}>
        Bus Location: {" Baagh-e-Naran"}
      </h4>
      <h4 style={{fontSize: "16px", margin: "10px 0"}}>
        Date: {" 20-07-2022"}
      </h4>
      <h4 style={{fontSize: "16px", margin: "10px 0"}}>
        Time: {" 6:30 Pm"}
      </h4>
      <h4 style={{fontSize: "16px", margin: "10px 0"}}>
        Driver Name: {" Gul Amin"}
      </h4>
      <h4 style={{fontSize: "16px", margin: "10px 0"}}>
        Driver Number: {" 03494030393"}
      </h4>
    </div>
    <div style={{backgroundColor: '#f0f0f0', padding: '8px', marginTop: '10px'}}>
      <h4 style={{fontSize: '16px', margin: "10px 0", color: "#333"}}>
        User Details:
      </h4>
      <h4 style={{fontSize: '16px', margin: "10px 0", color: "#333"}}>
        Name: {" Muhammad Taimoor"}
      </h4>
      <h4 style={{fontSize: '16px', margin: "10px 0", color: "#333"}}>
        User Reg No: {" 2022680"}
      </h4>
      <h4 style={{fontSize: '16px', margin: "10px 0", color: "#333"}}>
        Email: {" taimoor@gmail.com"}
      </h4>
    </div>
  </div>
  )
}

export default PrintPage
