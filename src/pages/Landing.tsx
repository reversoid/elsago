import React from 'react'
import AboutCourse from '../components/AboutCourse/AboutCourse'
import AboutUs from '../components/AboutUs/AboutUs'
import Advantages from '../components/Advantages/Advantages'
import Comparison from '../components/Comparison/Comparison'
import Files from '../components/Files/Files'
import Header from '../components/Header/Header'
import Partners from '../components/Partners/Partners'
import PrivateClub from '../components/PrivateClub/PrivateClub'
import Questions from '../components/Questions/Questions'
import Reviews from '../components/Reviews/Reviews'
import StartOfCourse from '../components/StartOfCourse/StartOfCourse'
import Tariffs from '../components/Tariffs/Tariffs'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import WhatToLearn from '../components/WhatToLearn/WhatToLearn'

export default function Landing() {
  return (
    <>
        <Header/>
        <WelcomeScreen/>
        <WhatToLearn/>
        <AboutUs/>
        <Partners/>
        <AboutCourse/>
        <Advantages/>
        <Files/>
        <Tariffs/>
        <Comparison/>
        <PrivateClub/>
        <Reviews/>
        <Questions/>
        <StartOfCourse/>
    </>
  )
}
