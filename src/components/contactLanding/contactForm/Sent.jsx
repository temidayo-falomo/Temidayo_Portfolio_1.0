import React from 'react'

function Sent({setInitial}) {
  return (
    <div className='sent'>
        <h2>Thank you! 🤘</h2>
       <p>Your message has been accepted. You will recieve answer really soon!</p>
       <button onClick={()=> setInitial(true)}>send-new-message</button>
    </div>
  )
}

export default Sent