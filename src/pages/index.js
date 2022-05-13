import { Fragment } from 'react'
import Footer from "../components/footer"
import Header from '../components/header'
import Repo from "../components/repo"
import User from "../components/user"
import UserSkills from "../components/user-skills"
import getUser from "../helpers/getUser"

function Home({ repos, user }) {
	return (
		<Fragment>
			<Header name={user.name} job='Desenvolvedor Fullstack' />
			<div className="container mx-auto mb-10" >
				<User user={user}>
					<UserSkills />
				</User>
				{(repos && repos.length > 0) && (
					<div className="container mx-auto px-3 md:px-0">
						<h3 className="text-orange text-center text-2xl uppercase">
							Repositórios
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-3 mt-3">
							{repos.map((repo, id) => <Repo repo={repo} key={id} />)}
						</div>
					</div>
				)}
				<Footer />
			</div>
		</Fragment>
	)
}

export async function getStaticProps(ctx) {
	const data = await getUser('ArielSNunes', 12)
	return { props: data }
}

export default Home
