import Image from "next/image"
import { VscGithub, VscMail } from 'react-icons/vsc'
import { FiLink2 } from 'react-icons/fi'
import Link from "next/link"
import profilePic from '../../public/images/me.jpg'

const User = ({ user, children }) => {
	return (
		<div className="mb-10 my-5 mx-3 md:mx-0">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col justify-end items-start">
					<h1 className="text-4xl">
						Olá, eu sou o <br /><Link href='/'>{user.name || 'Ariel Nunes'}</Link>
					</h1>
					<p className="text-3xl font-bold">Desenvolvedor de Software Fullstack</p>
					<div className="flex gap-1">
						<span className="border-2 border-orange px-3 py-1 rounded-md">Repositórios públicos: {user.public_repos}</span>
						<span className="text-lg h-100 flex justify-center align-middle items-center">/</span>
						<span className="border-2 border-orange px-3 py-1 rounded-md">Gists públicos: {user.public_gists}</span>
						<span className="text-lg h-100 flex justify-center align-middle items-center">/</span>
						<span className="border-2 border-orange px-3 py-1 rounded-md">Seguidores: {user.followers}</span>
					</div>
					<h3 className="text-2xl text-orange mt-3">
						Contato
					</h3>
					<div className="relative border-2 border-orange rounded-lg">
						<ul className="text-3xl flex justify-start gap-3 px-5 py-2">
							<li>
								<Link passHref href='/'><FiLink2 className="hover:text-orange hover:cursor-pointer" /></Link>
							</li>
							<li>
								<Link passHref href='/contato'><VscMail className="hover:text-orange hover:cursor-pointer" /></Link>
							</li>
							<li>
								<a className="hover:text-orange" href={user.html_url || 'https://github.com/ArielSNunes'} target='_blank' rel="noreferrer">
									<VscGithub />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="hidden md:flex justify-end items-center">
					<a href={user.html_url} className='ml-1' target='_blank' rel="noreferrer">
						<Image src={profilePic} height={200} width={200} className='rounded-full' alt="Ariel dos Santos Nunes" priority />
					</a>
				</div>
			</div>
			{children}
		</div>
	)
}

export default User
