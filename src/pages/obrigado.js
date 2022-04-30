import { Fragment } from 'react'
import ContactForm from '../components/contact-form'
import Footer from "../components/footer"
import Header from '../components/header'
import User from "../components/user"
import getUser from "../helpers/getUser"

function Obrigado({ repos, user }) {
	return (
		<Fragment>
			<Header name={user.name} job='Desenvolvedor Fullstack' />
			<div className="container mx-auto mb-10 mt-5">
				<User user={user}>
					<p className='text-center p-10 rounded-md bg-green-400 my-6'>Obrigado pelo contato</p>
				</User>
				<Footer />
			</div>
		</Fragment>
	)
}

export async function getServerSideProps(ctx) {
	const data = await getUser('ArielSNunes', 12)
	return { props: data }
}

export default Obrigado
