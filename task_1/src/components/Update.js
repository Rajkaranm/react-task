import React from 'react'

export default function Update(props) {
  return (
    <div>
        <button onClick={props.putRequest} className="btn btn-secondary mt-4">Update</button>
    </div>
  )
}
