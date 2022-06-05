import React from 'react'
import './TitleMovie.css'

export default function TitleMovie({movie}) {
  return (
    <div>
        <main>
            <span><p>{movie.title} </p></span>
        </main>
    </div>
  )
}
