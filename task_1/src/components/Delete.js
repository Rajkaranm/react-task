import React from 'react'

export default function Delete(props) {
  return (
    <div>
        <button onClick={props.deleteRequest} className="btn btn-danger mt-4">Delete</button>
    </div>
  )
}
