import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className="container">
      <div className="loading">
        <ClipLoader />
      </div>
    </div>
  )
}
