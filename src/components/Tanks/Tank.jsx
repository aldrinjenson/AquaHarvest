import React from 'react'
import "./tank.css"
import { Link } from 'react-router-dom'

const Tank = (props) => {
  return (
    <div className='tank-container' style={{fontFamily: "poppins"}}>
        <div className='heading'>
            <h2>{props.item.name}</h2>
            <div className='location'>{props.item.location}</div>
        </div>
        <div className='info'>
            <div className='info-detail'>
                <div>Varities:</div> <div>{props.item.variety[0]}, {props.item.variety[1]}</div>
            </div>
            <div className='info-detail2'>
                <div>pH Level:</div> <div>{props.item.pH}</div>
            </div>
            <div className='info-detail2'>
                <div>O2 Level:</div> <div>{props.item.O2}%</div>
            </div>
            <Link to={`/tank/${props.item.name}`}>More..</Link>
        </div>
    </div>
  )
}

export default Tank