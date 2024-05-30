import MyLink from './Link'

const links = [
	{
		text: 'Inicio',
		href: '/',
	},
	{
		text: 'Sobre mi',
		href: '/about-me',
	},
	{
		text: 'Contacto',
		href: '/contact',
	},
]

const Navbar = () => {
	return (
		<nav className="flex w-full items-end justify-between px-24 pt-12">
			<h1 className="text-4xl font-bold">TIAGO ARANGUREN 8=D</h1>
			<ul className="flex gap-2 ">
				{links.map((l) => (
					<li key={l.text}>
						<MyLink href={l.href} text={l.text} />
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
