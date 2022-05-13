import { Fragment } from 'react'
import ContactForm from '../components/contact-form'
import Footer from "../components/footer"
import Header from '../components/header'
import User from "../components/user"
import getUser from "../helpers/getUser"

function Contato({ repos, user }) {
	return (
		<Fragment>
			<Header name={user.name} job='Desenvolvedor Fullstack' />
			<div className="container mx-auto mb-10" >
				<User user={user}>
					<ContactForm />
				</User>
				<Footer />
			</div>
		</Fragment>
	)
}

export async function getStaticProps(ctx) {
	const data = await getUser('ArielSNunes', 12)
	return { props: data, revalidate: 1800 }
}

export default Contato
