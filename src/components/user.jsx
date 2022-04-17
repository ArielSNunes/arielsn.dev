import Image from "next/image"

const User = ({ user }) => {
	return (
		<div>
			<h1 className="text-4xl flex justify-start items-center mt-3">
				Olá, eu sou o <a href={user.html_url} target='_blank' rel="noreferrer">{user.name}</a>
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
