const Repo = ({ repo }) => {
	return (
		<li>
			<p>
				<a href={repo.html_url} target='_blank'>
					{repo.full_name} - {repo.fork ? 'Fork' : 'Repo'}
				</a>
				<br />
				<small>
					Criado em: {new Date(repo.created_at).toLocaleString('pt-br')}
					<br />
					Última atualização em: {new Date(repo.updated_at).toLocaleString('pt-br')}
				</small>
			</p>
		</li>
	)
}

export default Repo
