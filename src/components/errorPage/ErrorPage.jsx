import React from 'react'
import './ErrorPage.css'

function ErrorPage() {
  return (
    <div className='error-page'>
        <h1>Oops! It looks Like This Link is Unavailable!</h1>
        <a href='/'><button>Back To Home Page</button></a>
    </div>
  )
}

export default ErrorPage