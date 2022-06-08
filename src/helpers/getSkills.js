export default function getSkills() {
	const maxLevel = 5

	return [
		{
			tech: 'HTML + CSS',
			docs: '',
			level: 3.5,
			maxLevel,
			studying: false
		},
		{
			tech: 'JS',
			docs: '',
			level: 4.5,
			maxLevel,
			studying: false
		},
		{
			tech: 'PHP 7',
			docs: '',
			level: 4.5,
			maxLevel,
			studying: false
		},
		{
			tech: 'MySQl',
			docs: '',
			level: 4,
			maxLevel,
			studying: false
		},
		{
			tech: 'MongoDB',
			docs: '',
			level: 2,
			maxLevel,
			studying: false
		},
		{
			tech: 'NextJS',
			docs: 'https://nextjs.org/',
			level: 3.5,
			maxLevel,
			studying: true
		},
		{
			tech: 'NestJS',
			docs: 'https://nestjs.com/',
			level: 3.5,
			maxLevel,
			studying: true
		},
		{
			tech: 'Tailwind',
			docs: 'https://tailwindcss.com/',
			level: 3,
			maxLevel,
			studying: true
		},
		{
			tech: 'Bootstrap',
			docs: 'https://getbootstrap.com/',
			level: 3.5,
			maxLevel,
			studying: false
		}
	].sort((a, b) => b.level - a.level)
}
