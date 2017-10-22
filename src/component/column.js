import React from 'react'
import './column.css'

const component = ({ children, scale = 1 }) => (
  <div className="col" style={{ flexGrow: scale }}>
    {children}
  </div>
)

export default component
