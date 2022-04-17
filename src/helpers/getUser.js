export default async function getUser(githubUsername) {
	const response = await fetch(
		`https://api.github.com/users/${githubUsername}/repos?sort=updated`
	)
	const responseUser = await fetch(
		`https://api.github.com/users/${githubUsername}`
	)
	const originalRepos = await response.json()
	const originalUser = await responseUser.json()

	const repos = originalRepos || [].map(
		({ created_at, html_url, full_name, fork, updated_at }) => ({
			created_at,
			html_url,
			full_name,
			fork,
			updated_at
		})
	)

	return {
		repos: typeof repos === 'array' ? repos : [],
		user: originalUser
	}
}
