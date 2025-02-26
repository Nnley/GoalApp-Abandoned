import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export default function useDarkSide(): [Theme, React.Dispatch<React.SetStateAction<Theme>>] {
	const [theme, setTheme] = useState<Theme>(localStorage.theme as Theme)
	const colorTheme: Theme = theme === 'dark' ? 'light' : 'dark'
	localStorage.setItem('theme', theme)
	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(colorTheme)
		root.classList.add(theme)
		if (localStorage.theme == 'dark') localStorage.removeItem('theme')
		else localStorage.setItem('theme', theme)
	}, [theme, colorTheme])

	return [colorTheme, setTheme]
}
