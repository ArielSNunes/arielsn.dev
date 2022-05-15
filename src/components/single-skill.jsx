import classNames from 'classnames'
import { GiWhiteBook } from 'react-icons/gi'
const SingleSkill = ({ skill }) => {
	const percentage = (parseFloat(skill.level / skill.maxLevel) * 100)
		.toFixed(2)

	const skillClassname = classNames('text-xs', 'font-semibold', 'inline-block', 'py-1', 'px-2', 'uppercase', 'rounded-md', 'text-orange', 'border-orange', 'border-2')

	const skillTeckLink = skill?.docs.length > 0
		? <a href={skill.docs} target='_blank' className={skillClassname}>{skill.tech}</a>
		: <span className={skillClassname}>{skill.tech}</span>

	return (
		<div className="relative pt-1">
			<div className="flex mb-2 items-center justify-between">
				<div className='flex justify-center items-center align-center'>
					{skillTeckLink}
					{skill.studying && <GiWhiteBook title='Em estudo' className='text-orange ml-2' />}
				</div>
				<div className="text-right">
					<span className="text-xs font-semibold inline-block text-orange">
						{skill.level} / {skill.maxLevel}
					</span>
				</div>
			</div>
			<div className="overflow-hidden h-2 mb-4 text-xs flex rounded-sm bg-pink-200 border-orange border-2">
				<div style={{ width: `${percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange"></div>
			</div>
		</div>
	)
}

export default SingleSkill
