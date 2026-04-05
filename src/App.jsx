import './App.css'
import ArtistLogin from './components/ArtistLogin'
import Artists from './components/Artists'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Herocard from './components/Herocard'
import Navbar from './components/Navbar'
import Songs from './components/Songs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Trending from "./pages/Trending"
import Library from "./pages/Library"
import NewReleases from "./pages/NewReleases"
import TopCharts from './pages/Topcharts'
import Podcast from "./pages/Podcast"
import Setting from "./pages/Setting"

function Home() {
  return (
    <>
      <Hero/>
      <Herocard/>
      <ArtistLogin/>
      <Artists/>
      <Songs/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Trending" element={<Trending/>} />
        <Route path="/Library" element={<Library/>}/>
        <Route path="/NewReleases" element={<NewReleases/>} />
        <Route path="/TopCharts" element={<TopCharts/>} />
        <Route path="/Podcast" element={<Podcast/>} />
        <Route path="/Setting" element={<Setting/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App