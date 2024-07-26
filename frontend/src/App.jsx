import { useState } from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'



import Header from '../components/Header'
import LandingPage from '../pages/LandingPage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import BookingPage from '../pages/BookingPage'
import ConfirmPage from '../pages/ConfirmPage'
import PrintPage from '../pages/PrintPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import ResetPasswordCompletePage from '../pages/ResetPasswordCompletePage'
import ResetPasswordForm from '../pages/ResetPasswordForm'
import ResetPasswordSent from '../pages/ResetPasswordSent'
import SearchPage from '../pages/SearchPage'
import TicketsPage from '../pages/TicketsPage'
import { useQuery } from 'react-query'
import LoadingSpinner from '../components/LoadingSpinner'
import AdminLandingPage from '../pages/admin/AdminLandingPage'
import AdminHeader from '../components/admin/AdminHeader'
import AddBus from '../components/admin/AddBus'
import TicketDetails from '../pages/TicketDetails'
import VerificationPage from '../pages/VerificationPage'



function App() {
  const [count, setCount] = useState(0)
  const {data:authUser,isLoading,isError,error,isSuccess}=useQuery({
    queryKey:['authUser'],
    queryFn:async()=>{
      try {
        const res=await fetch('http://localhost:5000/api/auth/me',{
          method:"GET",
          credentials:'include'
        });
      const data=await res.json();
      if(data.error) return null;
      if(!res.ok){
        throw new Error(data.error || 'Something went wrong');
      }
      console.log(data);
      return data;
      } catch (error) {
        console.log('something went wrong');
        throw new Error(error);
        
      }
    },
    retry:false
    });

    if(isLoading){
      return <LoadingSpinner size='lg'/>
    }

  return (
   <>
      {/* <AdminHeader/> */}

      

      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/signup' element={!authUser ? <SignupPage/> : <Navigate to='/'/>}/>
        <Route exact path='/verify/:token' element={!authUser ? <VerificationPage/> : <Navigate to='/'/>}/>
        <Route exact path='/login' element={!authUser ? <LoginPage/> : <Navigate to='/'/>}/>
        <Route exact path='/profile' element={authUser ? <ProfilePage/> : <Navigate to='/login'/>}/>
        <Route exact path='/booking/:id' element={authUser ? <BookingPage/> : <Navigate to='/login'/>}/>
        <Route exact path='/:ticketId' element={authUser ? <TicketDetails/> : <Navigate to='/login'/>}/>
        <Route exact path='/confirm/:id' element={authUser ? <ConfirmPage/> : <Navigate to='/login'/>}/>
        <Route exact path='/print/:id' element={authUser ? <PrintPage/>: <Navigate to='/login'/>}/>
        <Route exact path='/reset-password' element={<ResetPasswordPage/> }/>
        <Route exact path='/reset-password-complete' element={<ResetPasswordCompletePage/> }/>
        <Route exact path='/reset-password-form/:token' element={<ResetPasswordForm/>}/>
        <Route exact path='/reset-password-sent' element={<ResetPasswordSent/>}/>
        <Route exact path='/search' element={<SearchPage/>}/>
        <Route exact path='/tickets' element={<TicketsPage/>}/>
        <Route exact path='/admin' element={<AdminLandingPage/>}/>
        <Route exact path='/admin/addbus' element={<AddBus/>}/>

      </Routes>

    

      <Toaster/>
   </>
  )
}

export default App
