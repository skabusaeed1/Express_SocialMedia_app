import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../Data/TrendData'

const TrendCard = () => {
  return (
    <div className='TrendCard'>
        <h2>Trends for you</h2>
      {
        TrendData.map((trend,i)=>{
            return(
            <div className="trend">
                <span>#{trend.name}</span>
                <span>{trend.shares}k shares</span>
            </div>
            )
        })
      }
    </div>
  )
}

export default TrendCard
