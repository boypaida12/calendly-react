/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/shared/Hero'
import Partners from '../components/shared/partners/Partners'
import Steps from '../components/Steps'

function Home() {
  return (
    <>
    <Hero/>
    <Partners showHomeHeading={true}/>
    <Steps/>
    </>
  )
}

export default Home