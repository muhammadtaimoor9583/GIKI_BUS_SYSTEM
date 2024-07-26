import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {QueryClient,QueryClientProvider} from 'react-query'

const queryClient=new QueryClient({
  defaultOptions:{
    refetchOnWindowFocus:false
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
 

    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </BrowserRouter>
  
)
