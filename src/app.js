import React from 'react'
import Column from './component/column'
import Profile from './component/profile'
import Journey from './component/journey'
import resumeData from './data.json'
import './app.css'

const data = resumeData

const component = () => (<div className="app">
	<Column>
		<Profile {...data.profile} />
	</Column>
	<Column>
		<Journey data={data} />
	</Column>
</div>)

export default component
