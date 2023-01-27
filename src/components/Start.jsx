import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Start.css"
import Blobs from './Blobs'

export default function Start(props) {
  return (
    <main className=' | bg-clr-cream'>
    <section className='Start--section | bg-clr-cream '>
      <h1 className='clr-darkBlue ff-karla fw-700 fs-32px '>Quizzical</h1>
      <p className='Start--section-sub | ff-inter clr-darkBlue fs-16px lh-19px '>How much do you know about the world?</p>
      <NavLink to="/questions" className='Start--button | ff-inter fw-500 text-capitalize fs-16px ' 
      onClick={props.startGame}
      >start quiz</NavLink>
       <Blobs />
    </section>
    </main>
  )
}
