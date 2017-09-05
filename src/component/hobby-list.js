import React from 'react'
import './hobby-list.css'

const component = ({data}) => (<ul className="hobby-list">{
	data
		.map((hobby, index) => (<li key={hobby}>
			{`${hobby}${index === data.length -1 ? '.' : ','} `}
		</li>))
}</ul>)

export default component
