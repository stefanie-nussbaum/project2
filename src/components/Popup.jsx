import React from 'react'

export default function Popup(props) {
  return (
    <div className="popup">
      <div className="box">
        <span className="close-popup" onClick={props.closePopup}>x</span>
        {props.message}
      </div>
    </div>
  )
}
