const Repo = ({ repo }) => {
	return (
		<div className="rounded p-2 bg-gray-200 hover:shadow-lg my-3">
			<span className={repo.fork ? 'text-yellow-500' : 'text-green-600'}>
				{repo.fork ? 'Fork' : 'Repo'}
			</span>
			<a href={repo.html_url} target='_blank' className="ml-2 font-bold text-blue-600 hover:text-blue-800">
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
