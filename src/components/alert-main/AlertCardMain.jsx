import React from 'react'
import data from "../../data/alerts"
import AlertCard from '../alert-card/AlertCard'
import "./alert-main.css"

const AlertCardMain = () => {
    const cardAlerts = data.map((data) => {
        return <AlertCard key={data.id} item={data} />
    })
  return (
    <div className='alert-main'>
        <h3 style={{"marginLeft": "1rem", "color": "#fff"}}>Alerts</h3>
        <section>{cardAlerts}</section>
    </div>
  )
}

export default AlertCardMain