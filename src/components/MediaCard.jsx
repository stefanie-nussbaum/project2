import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaCard(props) {
  return (
    <div>
      Media Card
      <Link>
        <h3>{props.media.fields.title}</h3>
        <img src={props.media.fields.poster} alt={props.media.fields.title} />
      </Link>
    </div>
  )
}
