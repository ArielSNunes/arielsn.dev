import classNames from "classnames"
import { Fragment } from "react"
import { useState } from "react"
import getJobs from "../helpers/getJobs"
import SingleJob from "./single-job"

const pastJobs = getJobs()

const Jobs = () => {
	const [showOlderJobs, setShowOlderJobs] = useState(false)
	const handleShowClick = () => setShowOlderJobs(currVal => !currVal)

	return (
		<Fragment>
			<div className="mt-6 bg-white p-3 shadow-lg rounded-md">
				<div className="p-4">
					<div className="clear-both">
						<h3 className="text-center uppercase text-2xl text-orange font-medium mb-3 disable-select cursor-pointer" onClick={handleShowClick}>
							Experência profissional
						</h3>
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
