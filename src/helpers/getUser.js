export default async function getUser(githubUsername, resultsLimit = 0) {
	const response = await fetch(
		`https://api.github.com/users/${githubUsername}/repos?sort=updated`
	)
	const responseUser = await fetch(
		`https://api.github.com/users/${githubUsername}`
	)
	const originalRepos = await response.json()
	const originalUser = await responseUser.json()


	const repos = (originalRepos.length ? originalRepos : []).map(
		({ created_at, html_url, full_name, fork, updated_at }) => ({
			created_at,
			html_url,
			full_name,
			fork,
			updated_at
		})
	)
		/**
		 * Aplicado map para verificar se a posição é maior do que o item
		 * máximo, e aplicar um limite nos resultados retornados para a view
		   */
		.map((repo, id) => {
			if (resultsLimit <= 0) {
				return repo
			}
			if (id < resultsLimit) {
				return repo
			}
			return false
		}).filter(Boolean)

	return {
		repos: repos.length && repos.length > 0 ? repos : [],
		user: originalUser
	}
}
