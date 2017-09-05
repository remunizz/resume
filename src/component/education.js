import React from 'react'
import './education.css'

const component = ({school, department}) => (<div className="education">
	<h4>{department}</h4>
	<p>{school}</p>
</div>)

export default component
