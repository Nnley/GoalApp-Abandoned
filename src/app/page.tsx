import { GoalItem } from '@/components/goals/GoalItem/GoalItem'

const data = [
	{
		name: 'Сделать то не знаю что ебаный рот блять этого казино зиноказиноказино',
		id: 1
	},
	{
		name: 'Заработать миллион долларов за 10 минут',
		id: 2
	},
	{
		name: 'Выучить все в этом мире ЕЖЖИ ВУАСЯ',
		id: 3
	}
]

export default function Home() {
	return (
		<>
			<div className="flex flex-col w-full p-20">
				{data.map(item => (
					<GoalItem
						key={item.id}
						name={item.name}
						id={item.id}
					/>
				))}
			</div>
		</>
	)
}
