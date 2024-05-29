import MyLink from "./Link"

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
	}
]

const Navbar = () => {
	return (
		<nav className="px-24">
			<h1>TIAGO ARANGUREN 8==D</h1>
            <ul>
                {links.map(l => 
                    (<li key={l.text}>
                        <MyLink href={l.href} text={l.text}/>
                    </li>)
                )}
            </ul>
		</nav>
	)
}

export default Navbar
