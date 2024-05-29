import Link from 'next/link'

const MyLink = ({ href, text }: { href: string; text: string }) => {
	return <Link href={href}> {text} </Link>
}

export default MyLink
