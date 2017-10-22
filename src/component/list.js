import React from 'react'
import './list.css'

const component = ({ data, element }) => (
  <ul className="list">
    {data.map((props, index) => (
      <li key={index}>{React.createElement(element, props)}</li>
    ))}
  </ul>
)

export default component
