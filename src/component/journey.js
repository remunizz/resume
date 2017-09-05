import React from 'react'
import Skill from './skill'
import Education from './education'
import Language from './language'
import Experience from './experience'
import List from './list'
import HobbyList from './hobby-list'
import './journey.css'

const component = ({data}) => (<div className="journey">
	<h3>Experience</h3>
	<List element={Experience} data={data.experience} />

	<h3>Education</h3>
	<List element={Education} data={data.education} />

	<h3>Skills</h3>
	<List element={Skill} data={data.skill} />

	<h3>Languages</h3>
	<List element={Language} data={data.language} />

	<h3>Hobbies</h3>
	<HobbyList data={data.hobby} />
</div>)

export default component
