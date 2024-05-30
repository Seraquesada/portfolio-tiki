import Image from 'next/image'
import { FC } from 'react'
import { getPlaiceholder } from 'plaiceholder'
import fs from 'node:fs/promises'
interface Props {
	src: string
	alt: string
}
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const MyImage: FC<Props> = async ({ src, alt }) => {
	const buffer = await fs.readFile(`./public${src}`)
	const { base64, color } = await getPlaiceholder(buffer)
	await delay(2000)
	console.log(color, base64, alt)
	return (
		<Image
			className="h-auto w-auto"
			src={src}
			alt={alt}
			width={500}
			height={500}
			placeholder="blur"
			blurDataURL={base64}
			quality={100}
		/>
	)
}

export default MyImage
