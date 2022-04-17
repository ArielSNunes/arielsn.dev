import Repo from "../components/repo"
import User from "../components/user"
import getUser from "../helpers/getUser"

function Home({ repos, user }) {
	return (
		<div className="container mx-auto">
			<User user={user} />
			<div className="container mx-auto px-3 md:px-0">
				{repos.map((repo, id) => <Repo repo={repo} key={id} />)}
			</div>
		</div>
	)
}

export async function getServerSideProps(ctx) {
	const data = await getUser('ArielSNunes', 3)
	return { props: data }
}

export default Home
