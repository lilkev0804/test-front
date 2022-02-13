import React from 'react'

export default function Doors(props) {
  return (
    <div>
      {props.doors} door{props.doors >= 2 ? 's' : null}
    </div>
  )
}
