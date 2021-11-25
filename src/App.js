import React from 'react'

import { Brand, Cta, Navbar } from "./components"
import { Blog, Feautres, Footer, Header, Whatgp3, Possibility } from "./containers"
import "./App.css"

function App() {
    return (
        <div className="app">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Whatgp3 />
            <Feautres />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
