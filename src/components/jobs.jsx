import classNames from "classnames"
import { Fragment } from "react"
import { useState } from "react"
import getJobs from "../helpers/getJobs"
import SingleJob from "./single-job"

const pastJobs = getJobs()

const Jobs = () => {
	const [showOlderJobs, setShowOlderJobs] = useState(false)
	const [showTooltip, setShowTooltip] = useState(false)
	const handleShowClick = () => setShowOlderJobs(currVal => !currVal)
	const handleMouseIn = state => setShowTooltip(state)

	const tooltopShowClass = classNames(
		'relative',
		'-left-64',
		'-top-24',
		'bg-gray-200',
		'float-right',
		{
			'inline': showTooltip,
			'hidden': !showTooltip
		},
		'px-2',
		'py-1',
		'rounded-md',
		'border-orange',
		'border-2',
		'text-orange'
	)
	return (
		<Fragment>
			<div className="mt-6 bg-white p-3 shadow-lg rounded-md">
				<div className="p-4">
					<div className="clear-both">
						<h3
							className="text-center uppercase text-2xl text-orange font-medium mb-3 disable-select cursor-pointer"
							onClick={handleShowClick}
							onMouseEnter={() => handleMouseIn(true)}
							onMouseLeave={() => handleMouseIn(false)}
						>
							Experência profissional
						</h3>
						<span className={tooltopShowClass}>
							Clique no título para visualizar mais itens
						</span>
					</div>
					<div className="relative">
						<div className="absolute top-0 h-full border-r-2 border-gray-500 left-3"></div>
						<ul className="space-y-2">
							{pastJobs.map((job, index) => (
								<SingleJob job={job} key={index} index={index} show={showOlderJobs} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Jobs
