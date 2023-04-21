import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { useSession, signIn, signOut } from 'next-auth/react'

const links = [
	{ label: 'FAQ', href: '/views/faq' },
	{ label: 'INICIO', href: '/' },
	{ label: 'SOPORTE', href: '/views/support' },
]
const sessionLinks = [
	{ label: 'AVISOS', href: '/views/notificaciones' },
	{ label: 'NUCLEO', href: '/views/nucleo' },
	{ label: 'COMPRAS', href: '/views/compras' },
	{ label: 'MERCADOS', href: '/views/mercados' },
	{ label: 'PRODUCTOS', href: '/views/productos' },
]
const Appbar = () => {
	// Online state
	const [isOnline, setIsOnline] = useState(
		typeof window !== 'undefined' ? navigator.onLine : {}
	)
	const { data: session } = useSession()
	const router = useRouter()
	const [logged, setLogged] = useState(false)
	useEffect(() => {
		// Update network status
		const handleStatusChange = () => {
			setIsOnline(navigator.onLine)
		}

		// Listen to the online status
		window.addEventListener('online', handleStatusChange)

		// Listen to the offline status
		window.addEventListener('offline', handleStatusChange)

		// Specify how to clean up after this effect for performance improvment
		return () => {
			window.removeEventListener('online', handleStatusChange)
			window.removeEventListener('offline', handleStatusChange)
		}
	}, [isOnline])

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe'>
			<header
				className='border-b bg-zinc-100 px-safe dark:border-zinc-800 dark:bg-zinc-900'
				style={{
					background:
						'linear-gradient(180deg, rgb(63, 63, 65) 0%, rgb(36, 35, 36) 100%)',
					border: 'none',
					filter: 'drop-shadow(0px -2px 7px #000)',
					height: '4rem',
				}}
			>
				<div
					className='mx-auto flex  max-w-screen-md items-center justify-between px-6'
					style={{ height: '4rem' }}
				>
					{isOnline ? (
						<h1 className='font-bold text-emerald-500'>EN LINEA</h1>
					) : (
						<h1 className='font-bold text-rose-600'>DESCONECTADO</h1>
					)}
					<nav className='flex items-center space-x-6'>
						<div className='hidden sm:block'>
							<div className='flex items-center space-x-6'>
								{(logged ? sessionLinks : links).map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`text-sm text-neutral-200 ${
												router.pathname === href ? 'font-bold' : 'font-normal'
											}`}
											style={{
												filter:
													router.pathname === href
														? 'drop-shadow(0px 2px 7px #1ab83c)'
														: 'none',
											}}
										>
											{label}
										</a>
									</Link>
								))}
							</div>
						</div>

						<IconButton
							size='small'
							edge='end'
							aria-label='account of current user'
							aria-haspopup='true'
							color='inherit'
						>
							<Avatar
								sx={{ bgcolor: 'indigo' }}
								onClick={() => setLogged(!logged)}
							>
								{`LR ${logged}`}
							</Avatar>
						</IconButton>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
