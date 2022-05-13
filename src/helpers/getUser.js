export default async function getUser(githubUsername, resultsLimit = 0) {
	const response = await fetch(
		`https://api.github.com/users/${githubUsername}/repos?sort=updated`
	)
	const originalRepos = await response.json()

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
		user: {
			"login": "ArielSNunes",
			"id": 22942598,
			"node_id": "MDQ6VXNlcjIyOTQyNTk4",
			"avatar_url": "https://avatars.githubusercontent.com/u/22942598?v=4",
			"gravatar_id": "",
			"url": "https://api.github.com/users/ArielSNunes",
			"html_url": "https://github.com/ArielSNunes",
			"followers_url": "https://api.github.com/users/ArielSNunes/followers",
			"following_url": "https://api.github.com/users/ArielSNunes/following{/other_user}",
			"gists_url": "https://api.github.com/users/ArielSNunes/gists{/gist_id}",
			"starred_url": "https://api.github.com/users/ArielSNunes/starred{/owner}{/repo}",
			"subscriptions_url": "https://api.github.com/users/ArielSNunes/subscriptions",
			"organizations_url": "https://api.github.com/users/ArielSNunes/orgs",
			"repos_url": "https://api.github.com/users/ArielSNunes/repos",
			"events_url": "https://api.github.com/users/ArielSNunes/events{/privacy}",
			"received_events_url": "https://api.github.com/users/ArielSNunes/received_events",
			"type": "User",
			"site_admin": false,
			"name": "Ariel dos Santos Nunes",
			"company": null,
			"blog": "https://arielsn.dev",
			"location": "Brazil",
			"email": null,
			"hireable": null,
			"bio": null,
			"twitter_username": null,
			"public_repos": 50,
			"public_gists": 5,
			"followers": 19,
			"following": 40,
			"created_at": "2016-10-19T18:02:55Z",
			"updated_at": "2022-05-06T00:28:01Z"
		}
	}
}
