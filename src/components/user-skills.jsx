import { Fragment } from "react"
import getSkills from "../helpers/getSkills"
import Jobs from './jobs'
import SingleSkill from "./single-skill"

const skillsList = getSkills()

const UserSkills = () => {
	return (
		<Fragment>
			<div className="bg-white mt-6 rounded-md p-4 shadow-lg">
				<h3 className="text-center uppercase text-2xl text-orange font-medium">
					Habilidades
				</h3>
				<div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
					{skillsList.map((skill, index) => (<SingleSkill skill={skill} key={index} />))}
				</div>
			</div>
			<div className="mt-6 bg-white p-3 shadow-lg rounded-md">
				<div className="p-4">
					<h3 className="text-center uppercase text-2xl text-orange font-medium mb-3">
						Formação acadêmica
					</h3>
					<h4 className="text-xl font-bold uppercase">
						Engenharia da computação
					</h4>
					<small>
						ETEP - São José dos Campos/SP
						<br />
						(2012 - 2017)
					</small>
				</div>
			</div>
			<div>
				<Jobs />
			</div>
		</Fragment>
	)
}

export default UserSkills
