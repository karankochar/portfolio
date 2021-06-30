import React, { useState } from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Works from './components/Works/Works'
import './app.scss'
import Menu from './components/Menu/Menu'

function App() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='app'>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                
                <Intro />
                <Portfolio />
                <Works />
                <Contact />
            </div>
        </div>
    )
}

export default App
