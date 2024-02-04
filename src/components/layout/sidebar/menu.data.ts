interface IMenuItem {
	name: string
	link: string
}

interface IMenu {
	[key: string]: IMenuItem
}

export const MENU: IMenu = {
	goals: {
		name: 'Goals',
		link: '/'
	},
	settings: {
		name: 'Settings',
		link: '/settings'
	},
	logout: {
		name: 'Logout',
		link: '/logout'
	}
}
