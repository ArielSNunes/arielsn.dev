import Image from "next/image"
import { VscGithub, VscMail } from 'react-icons/vsc'
import { FiLink, FiLink2 } from 'react-icons/fi'
const User = ({ user }) => {
	return (
		<div className="mb-10 my-5 mx-3 md:mx-0">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col justify-end items-start">
					<h1 className="text-4xl">
						Olá, eu sou o <br /><a href={user.html_url} target='_blank' rel="noreferrer">{user.name}</a>
					</h1>
					<p className="text-3xl font-bold">Desenvolvedor de Software Fullstack</p>
					<div className="flex gap-1">
						<span>Repositórios públicos: {user.public_repos}</span>
						/
						<span>Gists públicos: {user.public_gists}</span>
						/
						<span>Seguidores: {user.followers}</span>
					</div>
					<div className="relative border-2 border-gray-700 rounded-lg mt-10">
						<h3 className="text-2xl text-center relative -m-9 text-orange">
							Contato
						</h3>
						<ul className="text-3xl flex justify-start gap-3 px-5 py-2 mt-10">
							<li>
								<a className="hover:text-orange" href={user.html_url}>
									<VscGithub />
								</a>
							</li>
							<li>
								<a className="hover:text-orange" href='mailto:arielsn1.dev@gmail.com'>
									<VscMail />
								</a>
							</li>
							<li>
								<a className="hover:text-orange" href='https://arielsn.dev' target='_blank' rel="noreferrer">
									<FiLink2 />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="hidden md:flex justify-end items-center">
					<a href={user.html_url} className='ml-1' target='_blank' rel="noreferrer">
						<Image src='/images/me.jpg' height={200} width={200} className='rounded-full' />
					</a>
				</div>
			</div>
			<div className="bg-white mt-6 rounded-md p-4 shadow-lg">
				<h3 className="text-center uppercase text-2xl text-orange font-medium">
					Habilidades
				</h3>
				<ul className="text-lg pl-3">
					<li>Análise de requisitos</li>
					<li>Software escrito seguindo os melhores padrões e práticas</li>
					<li>Desenvolvimento de rotinas e filas de processamento assíncrono</li>
					<li>Desenvolvimento de mapas interativos</li>
				</ul>
			</div>
			<div className="mt-6 bg-white p-3 shadow-lg rounded-md">
				<div className="p-4">
					<h3 className="text-center uppercase text-2xl text-orange font-medium mb-3">
						Formação acadêmica
					</h3>
					<h4 className="text-orange text-lg font-bold uppercase">
						Ensino superior
					</h4>
					<h4 className="text-xl font-bold uppercase">
						Engenharia da computação
					</h4>
					<small>
						ETEP - São José dos Campos/SP
						<br />
						(2012 - 2017)
					</small>
				</div>

			</div>
		</div>
	)
}

export default User
