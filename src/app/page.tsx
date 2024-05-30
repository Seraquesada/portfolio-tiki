import imgs from '@/img.json'
import MyImage from '@/components/Image'

export default function Home() {
	return (
		<main className=" flex min-h-screen flex-col items-center justify-between  ">
			<div className="columns-1 gap-4 px-12 pt-6 md:columns-2 md:px-24  lg:columns-3 lg:gap-6  [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
				{/* {imgs.map(img => <MyImage key={img.text} src={img.src}  alt={img.text}/>
				)} */}
				<MyImage
					src={'/img/AtardecerjabirúSE.webp'}
					alt={'jabiru atardecer'}
				/>
				<MyImage
					src={'/img/JabiruverticalSE.webp'}
					alt={'jabiru vertical'}
				/>
				<MyImage
					src={'/img/Marcelasinedit.webp'}
					alt={'marcela sin edit'}
				/>
				<MyImage src={'/img/Marcela2SE.webp'} alt={'marcela 2'} />
				<MyImage src={'/img/YacareSE.webp'} alt={'yacare SE'} />
				<MyImage
					src={'/img/YaguareterioHighExpSE.webp'}
					alt={'yaguarete 2'}
				/>
				<MyImage
					src={'/img/Yaguarete1erplanoSEcopia.webp'}
					alt={'yaguarete primer plano'}
				/>
			</div>
		</main>
	)
}
