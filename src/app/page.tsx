import Image from 'next/image'
import jabiruAtardecer from '#/img/AtardecerjabirúSE.webp'
import jabiruVertical from '#/img/JabiruverticalSE.webp'

export default function Home() {
	return (
		<main className=" flex min-h-screen flex-col items-center justify-between p-24 ">
			<div className="flex flex-col">
				<Image
					src={jabiruAtardecer}
					alt="jabiruAtardecer"
					width={undefined}
					height={undefined}
					placeholder="blur"
				/>
				<Image
					src={jabiruVertical}
					alt="jabiruVertical"
					width={undefined}
					height={undefined}
					placeholder="blur"
				/>
			</div>
		</main>
	)
}
