import React from 'react'
import "./alertCard.css"

const AlertCard = (props) => {
  return (
    <div className='alert-card'>
        <h3>{props.item.alert}</h3>
    </div>
  )
}

export default AlertCard