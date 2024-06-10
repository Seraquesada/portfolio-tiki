import Image from 'next/image'
import { FC } from 'react'
import { getPlaiceholder } from 'plaiceholder'
import fs from 'node:fs/promises'
interface Props {
	src: string
	alt: string
}

const MyImage: FC<Props> = async ({ src, alt }) => {

	const buffer = await fs.readFile(`./public${src}`)
	const { base64 } = await getPlaiceholder(buffer)

	return (
		<Image
			className="h-auto w-auto animate-fade-in duration-2000"
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
