import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader
} from '@nextui-org/react'

interface UseDisclosureProps {
	isOpen: boolean
	onOpenChange(): void
	onClick(): void
}

export default function RemoveItemModal({
	isOpen,
	onOpenChange,
	onClick
}: UseDisclosureProps) {
	return (
		<>
			<Modal
				backdrop="opaque"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className="flex flex-col gap-1 text-lg">
								Предупреждение
							</ModalHeader>
							<ModalBody className="text-lg">
								<p>Подтверждаете удаление цели?</p>
							</ModalBody>
							<ModalFooter>
								<Button
									className="text-base"
									color="danger"
									variant="light"
									onPress={onClose}
								>
									Нет
								</Button>
								<Button
									className="text-base"
									color="primary"
									onPress={onClose}
									onClick={() => onClick()}
								>
									Да
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
