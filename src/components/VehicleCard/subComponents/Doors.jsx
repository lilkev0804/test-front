import React from 'react'

export default function Doors({ doors }) {
  return (
    <div>
      {doors} door{doors >= 2 && 's'}
    </div>
  )
}
