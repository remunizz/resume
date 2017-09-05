import React from 'react'
import './skill.css'

const component = ({type, level}) => (<div className="skill">
	<h4>{type}</h4>
	<p>{level}</p>
</div>)

export default component
