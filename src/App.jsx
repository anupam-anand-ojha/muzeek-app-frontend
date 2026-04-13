import './App.css'
import ArtistLogin from './components/ArtistLogin'
import Artists from './components/Artists'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Herocard from './components/Herocard'
import Navbar from './components/Navbar'
import Songs from './components/Songs'
import UploadMusic from "./components/UploadMusic";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactLenis, useLenis } from 'lenis/react'

import Trending from "./pages/Trending"
import Library from "./pages/Library"
import NewReleases from "./pages/NewReleases"
import TopCharts from './pages/Topcharts'
import Podcast from "./pages/Podcast"
import Setting from "./pages/Setting"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"




  

function Home() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
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
     <ReactLenis root >
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
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/upload" element={<UploadMusic />} />
        <Route path="/artistlogin" element={<ArtistLogin />}/>
      </Routes>
    </BrowserRouter>
    </ReactLenis>
  )
}

export default App