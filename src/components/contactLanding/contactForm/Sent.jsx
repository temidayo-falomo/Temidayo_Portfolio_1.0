import React from 'react'

function Sent({setInitial}) {
  return (
    <div className='sent'>
        <h2>Thank you! 🤘</h2>
       <p>Your message has been accepted. You will recieve an answer shortly!</p>
       <button onClick={()=> setInitial(true)}>send-new-message</button>
    </div>
  )
}

export default Sent