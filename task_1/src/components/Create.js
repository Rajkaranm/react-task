import React from 'react'

export default function Create(props) {
  return (
    <div>
        <button type='submit' onClick={props.postRequest} className='btn btn-success mt-4' >Create</button>
    </div>
  )
}
