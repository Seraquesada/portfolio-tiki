import Image from 'next/image'
import { FC } from 'react'
import { getPlaiceholder } from 'plaiceholder'
import fs from 'node:fs/promises'
interface Props {
	src: string
	text: string
	alt: string
}

const MyImage: FC<Props> = async ({ src, text, alt }) => {
	const buffer = await fetch(src).then(async (res) => {
		return Buffer.from(await res.arrayBuffer())
	})
	const { base64 } = await getPlaiceholder(buffer)

	return (
		<Image
			className="h-auto w-auto"
			src={src}
			alt={alt}
			width={500}
			height={500}
			placeholder='blur'
			blurDataURL={base64}
		/>
	)
}

export default MyImage
