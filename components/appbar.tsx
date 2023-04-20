import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

const links = [
	{ label: 'FAQ', href: '/views/faq' },
	{ label: 'INICIO', href: '/' },
	{ label: 'SOPORTE', href: '/views/support' },
]

const Appbar = () => {
	// Online state
	const [isOnline, setIsOnline] = useState(
		typeof window !== 'undefined' ? navigator.onLine : {}
	)

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
	const router = useRouter()

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-zinc-900 pt-safe'>
			<header className='border-b bg-zinc-100 px-safe dark:border-zinc-800 dark:bg-zinc-900'>
				<div className='mx-auto flex h-20 max-w-screen-md items-center justify-between px-6'>
					{isOnline ? (
						<h1 className='font-bold text-emerald-500'>EN LINEA</h1>
					) : (
						<h1 className='font-bold text-rose-600'>DESCONECTADO</h1>
					)}
					<nav className='flex items-center space-x-6'>
						<div className='hidden sm:block'>
							<div className='flex items-center space-x-6'>
								{links.map(({ label, href }) => (
									<Link key={label} href={href}>
										<a
											className={`text-sm ${
												router.pathname === href
													? 'text-indigo-500 dark:text-indigo-400'
													: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
											}`}
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
							<Avatar sx={{ bgcolor: 'indigo' }}>LR</Avatar>
						</IconButton>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
