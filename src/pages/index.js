import Repo from "../components/repo"

const githubApiUrl = 'https://api.github.com/users/arielsnunes/repos?sort=updated'

function Home({ currentDate, repos }) {
	return (
		<div>
			Index
			<p>
				{currentDate}
			</p>
			<ul>
				{repos.map((repo, id) => <Repo repo={repo} key={id} />)}
			</ul>
		</div>
	)
}

export async function getServerSideProps(ctx) {
	const response = await fetch(githubApiUrl)
	const originalRepos = await response.json()

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
			repos
		}
	}
}

export default Home
