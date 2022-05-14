import { GiWhiteBook } from 'react-icons/gi'
const SingleSkill = ({ skill }) => {
	const percentage = (parseFloat(skill.level / skill.maxLevel) * 100)
		.toFixed(2)
	return (
		<div className="relative pt-1">
			<div className="flex mb-2 items-center justify-between">
				<div className='flex justify-center items-center align-center'>
					<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange border-orange border-2">
						{skill.tech}
					</span>
					{skill.studying && <GiWhiteBook title='Em estudo' className='text-orange ml-2' />}
				</div>
				<div className="text-right">
					<span className="text-xs font-semibold inline-block text-orange">
						{skill.level} / {skill.maxLevel}
					</span>
				</div>
			</div>
			<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200 border-orange border-2">
				<div style={{ width: `${percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange"></div>
			</div>
		</div>
	)
}

export default SingleSkill