import React from 'react'
import "../css/Blobs.css"
import { ReactSVG } from 'react-svg'


export default function Blobs() {
  return (
    <div className='Blobs-Box | '>
        
        <div className='Blobs--left | '>
        <ReactSVG role="img" src='blob-left.svg' />
        </div>

        <div className='Blobs--right | '>
        <ReactSVG role="img" src='blob-right.svg' />
        </div>
    </div>
  )
}
