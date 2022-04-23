import { VscRepoForked, VscRepo } from 'react-icons/vsc'
import classnames from 'classnames'

const Repo = ({ repo }) => {
	const repoClasses = classnames(
		'inline-block',
		'text-xl',
		{
			'text-yellow-500': repo.fork,
			'text-green-600': !repo.fork,
		}
	)
	return (
		<div className="rounded p-2 bg-gray-200 hover:shadow-lg my-2 md:my-0">
			<span className={repoClasses}>
				{repo.fork ? <VscRepoForked title='Fork'/> : <VscRepo title='Repo'/>}
			</span>
			<a href={repo.html_url} target='_blank' className="ml-2 font-bold text-blue-600 hover:text-blue-800" rel="noreferrer">
				{repo.full_name}
			</a>
			<br />
			<small className="pl-6">
				Criado em: {new Date(repo.created_at).toLocaleString('pt-br')}
			</small>
			<br />
			<small className="pl-6">
				Última atualização em: {new Date(repo.updated_at).toLocaleString('pt-br')}
			</small>
		</div>
	)
}

export default Repo
