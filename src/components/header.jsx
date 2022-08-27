import Head from "next/head"

const Header = ({ name, job }) => {
	const desc = "Portfólo de um desenvolvedor de software apaixonado por escrever códigos e desenvolver projetos interessantes."
	const myName = name || "Ariel dos Santos Nunes"
	const myJob = job || "Dev Fullstack"
	const url = 'https://arielsn.dev'
	const githubUrl = 'https://github.com/arielsnunes'
	return (
		<Head>
			<title>{myName} - {myJob}</title>
			<link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/manifest.json" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="theme-color" content="#ffffff"></meta>
			<meta name="author" content={myName} />
			<meta name="keywords" content="desenvolvedor, software, php, node, next, nest, tailwind, bootstrap, sql, mongodb, mysql, javascript, js" />
			<meta name="description" content={desc} />
			<meta name="robots" content="index, follow" />
			<meta charSet="UTF-8" />
			<link rel="canonical" href={url} />
			<meta itemProp="url" content={url} />
			<meta itemProp="name" content={`${myName} - ${myJob}`} />
			<meta itemProp="description" content={desc} />
			<meta property="og:title" content={`${myName} - ${myJob} - ${desc}`} />
			<meta property="og:description" content={`${myName} - ${myJob} - ${desc}`} />
			<meta property="og:image:alt" content={`${myName} - ${myJob} - ${desc}`} />
			<meta property="og:url" content={url} />
			<meta property="og:site_name" content={`${myName} - ${myJob}`} />
			<meta property="og:locale" content="pt_BR" />
			<meta property="article:author" content={githubUrl} />
			<meta property="article:publisher" content={url} />
			<meta property="twitter:domain" content={url} />
			<meta property="twitter:title" content={`${myName} - ${myJob} - ${desc}`} />
			<meta property="twitter:description" content={url} />
			<meta property="twitter:url" content={url} />
		</Head>
	)
}

export default Header
