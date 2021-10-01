import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Team from './components/Team'
import Contact from './components/Contact'

export default function LandingPage() {
    return (
        <>
            <Navigation/>
            <Header/>
            <About/>
            <Team/>
            <Contact/>
        </>
    )
}
