import classNames from "classnames"

const SingleJob = ({ job, index, show }) => {
	const startDate = job.startDate.toLocaleDateString('pt-br')
	const endDate = job.endDate.toLocaleDateString('pt-br')
	const jobMessage = job?.isCurrent
		? `Desde ${startDate}`
		: `Entre ${startDate} e ${endDate}`

	const currentJob = classNames(
		'w-6',
		'h-6',
		{
			'bg-gray-500': !job?.isCurrent,
			'bg-orange': job?.isCurrent,
			'z-50': job?.isCurrent,
		},
		'rounded-full'
	)
	const showJob = classNames(
		{ 'hidden': !show && !job?.isCurrent }
	)

	return (
		<li className={showJob}>
			<div className="flex items-center mt-12">
				<span className={currentJob}></span>
				<h5 className="text-orange font-bold ml-4">{job.role}</h5>
			</div>
			<div className="ml-10">
				<span className="text-gray-600">
					{job.place}
				</span>
			</div>
			<div className="ml-10">
				<p className="text-sm text-gray-500">
					{job.location}
				</p>
				<p className="text-sm text-gray-500">
					{jobMessage}
				</p>
			</div>
			<ul className="ml-14 mt-1">
				{job?.responsibilities.map((resp, i) => {
					return (
						<li key={i} className="font-light text-sm list-disc hover:text-orange">
							{resp}
						</li>
					)
				})}
			</ul>
		</li>
	)
}

export default SingleJob
