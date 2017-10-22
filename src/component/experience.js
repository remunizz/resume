import React from 'react'
import './experience.css'

const Company = ({ company, website }) => (
  <h4 className="company">
    {website === undefined ? (
      company
    ) : (
      <a href={website} target="_blank" rel="noopener">
        {company}
      </a>
    )}
  </h4>
)

const component = ({ company, interval, position, description, website }) => (
  <div className="experience">
    <div className="header">
      <Company company={company} website={website} />
      <p className="position">{`${position} / ${interval}`}</p>
    </div>
    <p className="description">{description}</p>
  </div>
)

export default component
