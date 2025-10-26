import React from 'react'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import Home from './pages/Home'
import SeatLayout from './pages/SeatLayout'
import Favorite from './pages/Favorite'
import MyBookings from './pages/MyBookings'
import MoviesDetails from './pages/MovieDetails'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShow from './pages/admin/AddShow'
import ListShow from './pages/admin/ListShow'
import ListBookings from './pages/admin/ListBookings'


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
  <>
  <Toaster/>
  {!isAdminRoute && <Navbar/>}
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/movies' element={<Movies/>} />
    <Route path='/movies/:id' element={<MoviesDetails/>} />
    <Route path='/movies/:id/:date' element={<SeatLayout/>} />
    <Route path='/my-bookings' element={<MyBookings/>} />
    <Route path='/favorite' element={<Favorite/>} />
    <Route path='/admin/*' element={<Layout />} >
     <Route index element={<Dashboard />} />
    <Route path="add-shows" element={<AddShow />} />
    <Route path="list-shows" element={<ListShow />} />
    <Route path='list-bookings' element={<ListBookings />} />
    
    
    </Route>

</Routes>
 {!isAdminRoute && <Footer/>}
  </>
  )
}

export default App