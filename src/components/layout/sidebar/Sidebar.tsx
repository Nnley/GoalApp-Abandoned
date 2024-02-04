import { ClipboardList, LogOut, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Sidebar.module.scss'
import { MENU } from './menu.data'

export function Sidebar() {
	const [active, setActive] = useState<string>('')
	const path = usePathname()

	useEffect(() => {
		const foundItem = Object.values(MENU).find(item => item.link === path)
		if (foundItem) {
			setActive(foundItem.name)
		}
	}, [path])

	return (
		<aside className={styles.sidebar}>
			<button>
				<Sun
					className="transition ease-in-out stroke-zinc-600 hover:scale-125 hover:stroke-zinc-300 duration-300"
					name="sun-medium"
					size={36}
				/>
			</button>
			<div className="flex flex-col gap-6">
				<Link href={MENU.goals.link}>
					<ClipboardList
						className={`${
							active === MENU.goals.name
								? 'stroke-zinc-300 scale-125'
								: 'stroke-zinc-600'
						} transition ease-in-out hover:scale-125 hover:stroke-zinc-300 duration-300`}
						size={36}
					/>
				</Link>
				<Link href={MENU.settings.link}>
					<Settings
						className={`${
							active === MENU.settings.name
								? 'stroke-zinc-300 scale-125'
								: 'stroke-zinc-600'
						} transition ease-in-out hover:scale-125 hover:stroke-zinc-300 duration-300`}
						size={36}
					/>
				</Link>
			</div>
			<Link href={MENU.logout.link}>
				<LogOut
					className={`${
						active === MENU.logout.name
							? 'stroke-zinc-300 scale-125'
							: 'stroke-zinc-600'
					} transition ease-in-out hover:scale-125 hover:stroke-zinc-300 duration-300`}
					size={36}
				/>
			</Link>
		</aside>
	)
}
