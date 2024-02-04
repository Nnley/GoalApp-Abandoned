import { Layout } from '@/components/layout/Layout'
import type { Metadata } from 'next'
import { Exo_2 } from 'next/font/google'
import './globals.scss'

const exo2 = Exo_2({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500'],
	display: 'swap',
	variable: '--font-exo2',
	style: ['normal', 'italic']
})

export const metadata: Metadata = {
	title: 'Goal App',
	description: 'App for creating goal list'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`dark ${exo2.className}`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
