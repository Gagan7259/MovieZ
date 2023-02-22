import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Container/Home/Home'
import About from '../Container/About/About'
import Movies from '../Container/Movies/Movies'
import TvSeries from '../Container/TvSeries/Tvseries'
import Search from '../Container/Search/Search'
import Details from '../Container/Details/Details'

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<TvSeries />} />
        <Route path='/search' element={<Search />} />
        <Route path='/details/:movieid/:mediatype' element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouteComponent
