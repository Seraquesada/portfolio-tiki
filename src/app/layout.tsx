import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Tiago Aranguren',
	description: 'Fotógrafo Argentino',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar/>
				<main>{children} </main>
			</body>
		</html>
	)
}
