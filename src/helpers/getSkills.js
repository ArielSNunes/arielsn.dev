export default function getSkills() {
	const maxLevel = 5

	return [
		{
			tech: 'HTML + CSS',
			level: 3.5,
			maxLevel,
			studying: false
		},
		{
			tech: 'JS',
			level: 4.5,
			maxLevel,
			studying: false
		},
		{
			tech: 'PHP',
			level: 4.5,
			maxLevel,
			studying: false
		},
		{
			tech: 'MySQl',
			level: 4,
			maxLevel,
			studying: false
		},
		{
			tech: 'MongoDB',
			level: 2,
			maxLevel,
			studying: true
		},
		{
			tech: 'NextJS',
			level: 3,
			maxLevel,
			studying: true
		},
		{
			tech: 'NestJS',
			level: 2.5,
			maxLevel,
			studying: true
		}
	].sort((a, b) => b.level - a.level)
}
