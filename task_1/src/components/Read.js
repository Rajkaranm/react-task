import React from 'react'

export default function Read(props) {
  return (
    <div>
        <button onClick={props.getRequest} className='btn btn-primary mt-4' >Read</button>
    </div>
  )
}
