import Repo from "../components/repo"
import User from "../components/user"

const githubApiUrl = 'https://api.github.com/users/arielsnunes'

function Home({ repos, user }) {
	return (
		<div className="container mx-auto">
			<User user={user} />
			<div>
				{repos.map((repo, id) => <Repo repo={repo} key={id} />)}
			</div>
		</div>
	)
}

export async function getServerSideProps(ctx) {
	const response = await fetch(`${githubApiUrl}/repos?sort=updated`)
	const responseUser = await fetch(githubApiUrl)
	const originalRepos = await response.json()
	const originalUser = await responseUser.json()

	const repos = originalRepos.map(
		({ created_at, html_url, full_name, fork, updated_at }) => ({
			created_at,
			html_url,
			full_name,
			fork,
			updated_at
		})
	)
	return {
		props: {
			currentDate: (new Date()).toString(),
			repos,
			user: originalUser
		}
	}
}

export default Home
