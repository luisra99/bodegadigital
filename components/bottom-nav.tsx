import Link from 'next/link'
import { useRouter } from 'next/router'
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded'

const BottomNav = () => {
	const router = useRouter()
	return (
		<div className='sm:hidden'>
			<nav
				className='fixed bottom-0 w-full border-t bg-zinc-100 pb-safe dark:border-zinc-800 dark:bg-zinc-900'
				style={{
					background:
						'linear-gradient(180deg, rgb(63, 63, 65) 0%, rgb(36, 35, 36) 100%)',
					border: 'none',
					filter: 'drop-shadow(0px 2px 7px #000)',
				}}
			>
				<div className='mx-auto flex h-16 max-w-md items-center justify-around px-6'>
					{sessionLinks.map(({ label, href, icon }) => {
						const active = router.pathname === href
						const style = {
							color: '#e8e8e8',
							filter: active ? 'drop-shadow(0px 2px 7px #1ab83c)' : 'none',
						}
						return (
							<Link key={label} href={href}>
								<a
									style={style}
									className={`flex h-full w-full flex-col items-center justify-center space-x-2`}
								>
									{icon}
									<span className='text-sm' style={style}>
										{label}
									</span>
								</a>
							</Link>
						)
					})}
				</div>
			</nav>
		</div>
	)
}

export default BottomNav
const sessionLinks = [
	{
		label: 'AVISOS',
		href: '/views/notificaciones',
		icon: <NotificationsRoundedIcon />,
	},

	{
		label: 'COMPRAS',
		href: '/views/compras',
		icon: <ShoppingCartRoundedIcon />,
	},
	{ label: 'NUCLEO', href: '/views/nucleo', icon: <Diversity3RoundedIcon /> },
	{
		label: 'MERCADOS',
		href: '/views/mercados',
		icon: <StorefrontRoundedIcon />,
	},
	{
		label: 'PRODUCTOS',
		href: '/views/productos',
		icon: <ShoppingBagRoundedIcon />,
	},
]
const links = [
	{
		label: 'FAQ',
		href: '/views/faq',
		icon: <QuestionAnswerRoundedIcon />,
	},
	{
		label: 'INICIO',
		href: '/',
		icon: <HomeRoundedIcon />,
	},
	{
		label: 'SOPORTE',
		href: '/views/support',
		icon: <SupportAgentRoundedIcon />,
	},
]
