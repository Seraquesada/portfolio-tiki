'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const MyLink = ({ href, text }: { href: string; text: string }) => {
	const pathname = usePathname()
	return (
		<Link
			className={clsx(
				'text-2xl font-medium text-black hover:font-bold ',
				{
					'font-bold': pathname === href,
				},
			)}
			href={href}
		>
			{text}
		</Link>
	)
}

export default MyLink
