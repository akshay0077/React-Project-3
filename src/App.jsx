 import React  from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'

const App = () => {
    return(
        <>
        <div>
            <Navbar/>
            <div>
            <Home/>
            <Service/>
            <About/>
            <Contact/>
            <Footer/>
            </div>
        </div>
        </>
    )
}


export default App;