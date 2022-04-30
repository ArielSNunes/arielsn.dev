import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import classNames from "classnames"
import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"

const formSchema = z.object({
	name: z.string({ required_error: 'Campo obrigatório' })
		.regex(/^[A-Za-z\s]+$/, { message: 'Caracteres inválidos' })
		.min(3, { message: 'Campo deve ter pelo menos 3 caracteres' }),
	email: z.string({ required_error: 'Campo obrigatório' })
		.email({ message: 'Deve ser informado um e-mail válido' }),
	message: z.string({ required_error: 'Campo obrigatório' })
		.min(15, { message: 'Campo deve ter pelo menos 15 caracteres' }),
})

const ContactForm = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm({
		resolver: zodResolver(formSchema)
	})
	const [apiError, setApiError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const nextRouter = useRouter()
	const nameClassnames = classNames(
		'w-full',
		'bg-gray-100',
		'bg-opacity-50',
		'rounded',
		'border',
		'border-gray-300',
		{ 'focus:border-green-500': !errors.name?.message },
		{ 'focus:border-red-500': errors.name?.message },
		'focus:bg-white',
		'focus:ring-2',
		{ 'focus:ring-green-200': !errors.name?.message },
		{ 'focus:ring-red-200': errors.name?.message },
		'text-base',
		'outline-none',
		'text-gray-700',
		'py-1',
		'px-3',
		'leading-8',
		'transition-colors',
		'duration-200',
		'ease-in-out',
	)
	const emailClassnames = classNames(
		'w-full',
		'bg-gray-100',
		'bg-opacity-50',
		'rounded',
		'border',
		'border-gray-300',
		{ 'focus:border-green-500': !errors.email?.message },
		{ 'focus:border-red-500': errors.email?.message },
		'focus:bg-white',
		'focus:ring-2',
		{ 'focus:ring-green-200': !errors.email?.message },
		{ 'focus:ring-red-200': errors.email?.message },
		'text-base',
		'outline-none',
		'text-gray-700',
		'py-1',
		'px-3',
		'leading-8',
		'transition-colors',
		'duration-200',
		'ease-in-out',
	)
	const messageClassnames = classNames(
		'w-full',
		'bg-gray-100',
		'bg-opacity-50',
		'rounded',
		'border',
		'border-gray-300',
		{ 'focus:border-green-500': !errors.message?.message },
		{ 'focus:border-red-500': errors.message?.message },
		'focus:bg-white',
		'focus:ring-2',
		{ 'focus:ring-green-200': !errors.message?.message },
		{ 'focus:ring-red-200': errors.message?.message },
		'h-32',
		'text-base',
		'outline-none',
		'text-gray-700',
		'py-1',
		'px-3',
		'resize-none',
		'leading-6',
		'transition-colors',
		'duration-200',
		'ease-in-out',
	)
	const buttonClassnames = classNames(
		'flex',
		'mx-auto',
		'text-white',
		'items-center',
		'bg-orange',
		'border-0',
		'py-2',
		'px-8',
		'focus:outline-none',
		'hover:bg-red-400',
		'rounded',
		'text-lg',
	)

	const onSubmit = async (data) => {
		setIsLoading(true)

		const response = await fetch(
			'/api/saveData',
			{ method: 'POST', body: JSON.stringify(data) }
		)
		const json = await response.json()

		setIsLoading(false)

		if (json.success === true) {
			nextRouter.push('/obrigado')
			return
		}

		if (json.success === false) {
			setApiError(true)
		}
	}

	if (apiError) {
		return (
			<div className="text-center mt-5 bg-red-500 p-3 rounded-md text-white">
				Ocorreu um erro ao submeter os dados.
				<br />
				Tente novamente na
				<span className='text-blue-400 cursor-pointer ml-2'>
					<Link href='/contato'>página de contato</Link>
				</span>
			</div>
		)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="container px-5 py-16 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Entre em contato</h1>
				</div>
				<div className="lg:w-1/2 md:w-2/3 mx-auto">
					<div className="flex flex-wrap -m-2">
						<div className="p-2 md:w-1/2 w-full">
							<div className="relative">
								<label htmlFor="name" className="leading-7 text-sm text-gray-600">Nome</label>
								<input
									type="text"
									id="name"
									name="name"
									{...register('name')}
									autoComplete='off'
									className={nameClassnames} />
								{errors.name?.message && <p className="text-red-400">{errors.name?.message}</p>}
							</div>
						</div>
						<div className="p-2 md:w-1/2 w-full">
							<div className="relative">
								<label htmlFor="email" className="leading-7 text-sm text-gray-600">E-mail</label>
								<input
									type="text"
									id="email"
									name="email"
									{...register('email')}
									className={emailClassnames} />
								{errors.email?.message && <p className="text-red-400">{errors.email?.message}</p>}
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensagem</label>
								<textarea
									id="message"
									name="message"
									{...register('message')}
									className={messageClassnames}></textarea>
								{errors.message?.message && <p className="text-red-400">{errors.message?.message}</p>}
							</div>
						</div>
						<div className="p-2 w-full">
							<button disabled={isLoading} type="submit" className={buttonClassnames}>
								{isLoading && <span className="loader mr-2"></span>}
								Enviar contato
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default ContactForm
