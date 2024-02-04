'use client'

import RemoveItemModal from '@/components/ui/modals/RemoveItemModal'
import { useDisclosure } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { Check, Pencil, Trash2 } from 'lucide-react'
import { useState } from 'react'
import styles from './GoalItem.module.scss'

interface IGoalItem {
	name: string
	id: number
}

export function GoalItem({ name, id }: IGoalItem) {
	const [visible, setVisible] = useState<boolean>(true)
	const [animation, setAnimation] = useState<boolean>(false)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const RemoveItem = () => {
		setAnimation(true)

		setTimeout(() => {
			setVisible(false)
		}, 500)
	}

	return (
		<>
			<RemoveItemModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				onClick={RemoveItem}
			/>
			{visible && (
				<motion.div
					animate={
						animation && {
							opacity: 0,
							height: 0,
							padding: 0,
							border: 0,
							marginBottom: 0,
							scale: 0
						}
					}
					transition={{ ease: 'easeOut', duration: 0.5 }}
					className={styles.item}
				>
					<motion.span
						animate={animation && { opacity: 0 }}
						transition={{ ease: 'easeOut', duration: 0.4 }}
					>
						{name}
					</motion.span>
					<motion.div
						animate={animation && { opacity: 0 }}
						transition={{ ease: 'easeOut', duration: 0.4 }}
						className={styles.buttons}
					>
						<button onClick={() => RemoveItem()}>
							<Check
								color="#669D5D"
								size={42}
							/>
						</button>
						<button>
							<Pencil
								color="#D2A856"
								size={32}
							/>
						</button>
						<button onClick={onOpen}>
							<Trash2
								color="#D23A3A"
								size={36}
							/>
						</button>
					</motion.div>
				</motion.div>
			)}
		</>
	)
}
