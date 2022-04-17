const User = ({ user }) => {
	return (
		<div>
			<h1 className="text-4xl flex justify-between items-center mt-3">
				Olá, eu sou o {user.name}
				<a href={user.html_url} target='_blank'>
					<img src={user.avatar_url} alt={`Github ${user.login}`} width='50' className="rounded-full" />
				</a>
			</h1>
			<p>Usuário desde {new Date(user.created_at).toLocaleDateString('pt-br')}</p>
			<div className="flex gap-1">
				<span>Reposítórios públicos: {user.public_repos}</span>
				/
				<span>Gists públicos: {user.public_gists}</span>
				/
				<span>Seguidores: {user.followers}</span>
			</div>
			<hr />
		</div>
	)
}

export default User
