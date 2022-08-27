export default async function getUser(githubUsername, resultsLimit = 0) {
	const responseUser = await fetch(
		`https://api.github.com/users/${githubUsername}`
	)

	const originalUser = await responseUser.json()

	return {
		user: originalUser
	}
}
