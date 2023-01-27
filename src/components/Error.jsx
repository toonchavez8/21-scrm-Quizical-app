import React from 'react'
import Blobs from './Blobs'
import '../css/Error.css'
import { NavLink } from 'react-router-dom'



export default function Error() {
  return (
    <section className='Error--container'>
        <Blobs />
        <h1 className='Error--h1'>404</h1>
        <h2 className='Error--h2'>Page Not Found</h2>
        <NavLink to='/' className='Error--link'>Go Back</NavLink>
    </section>

  )
}
