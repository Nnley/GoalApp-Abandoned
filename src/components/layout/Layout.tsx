'use client'

import type { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'
import { Sidebar } from './sidebar/Sidebar'

export function Layout({ children }: PropsWithChildren) {
	return (
		<div className={styles.layout}>
			<Sidebar />
			<main className={styles.main}>{children}</main>
		</div>
	)
}
