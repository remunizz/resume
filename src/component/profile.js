import React from 'react'
import './profile.css'

const component = ({ name, position, email, website }) => (
  <div className="profile">
    <h1 className="name">{name}</h1>
    <h2 className="position">{position}</h2>
    <p>
      <a href={`mailto:${email}`} className="email">
        {email}
      </a>
    </p>
    <p>
      <a href={website} className="email">
        {website}
      </a>
    </p>
  </div>
)

export default component
