import Image from "next/image"
import { VscGithub, VscMail } from 'react-icons/vsc'

const User = ({ user }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 mb-10 my-5 mx-3 md:mx-0">
			<div className="flex flex-col justify-end items-start">
				<h1 className="text-4xl">
					Olá, eu sou o <br /><a href={user.html_url} target='_blank' rel="noreferrer">{user.name}</a>
				</h1>
				<p className="text-3xl font-bold">Desenvolvedor de Software</p>
				<div className="flex gap-1">
					<span>Reposítórios públicos: {user.public_repos}</span>
					/
					<span>Gists públicos: {user.public_gists}</span>
					/
					<span>Seguidores: {user.followers}</span>
				</div>
				<h3 className="text-2xl mt-3">Contato</h3>
				<ul className="text-3xl flex justify-start gap-3">
					<li>
						<a href={user.html_url}>
							<VscGithub />
						</a>
					</li>
					<li>
						<a href='mailto:arielsn@outlook.com'>
							<VscMail />
						</a>
					</li>

				</ul>
			</div>
			<div className="hidden md:flex justify-center items-center">
				<a href={user.html_url} className='ml-1' target='_blank' rel="noreferrer">
					<Image src='/images/me.jpg' height={200} width={200} className='rounded-full' />
				</a>
			</div>
		</div>
	)
}

export default User
