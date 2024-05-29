import Image from 'next/image'
import { FC } from 'react'

interface Props {
	src: string
	text: string
}

const MyImage: FC<Props> = ({ src, text }) => {
	return <Image src={src} alt={text} />
}

export default MyImage
