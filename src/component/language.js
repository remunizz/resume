import React from 'react'
import './language.css'

const component = ({ idiom, level }) => (
  <div className="language">
    <h4>{idiom}</h4>
    <span>({level})</span>
  </div>
)

export default component
