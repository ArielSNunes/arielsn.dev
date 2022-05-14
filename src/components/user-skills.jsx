import { Fragment } from "react"
import Jobs from './jobs'

const UserSkills = () => {
	return (
		<Fragment>
			<div className="bg-white mt-6 rounded-md p-4 shadow-lg">
				<h3 className="text-center uppercase text-2xl text-orange font-medium">
					Habilidades
				</h3>
				<ul className="text-lg pl-3">
					<li>Software escrito seguindo os melhores padrões e práticas</li>
					<li>Desenvolvimento de rotinas e filas de processamento assíncrono</li>
					<li>Desenvolvimento de mapas interativos</li>
				</ul>
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
