import { imgs } from '@/img.js'
import MyImage from "@/components/Image"
export default function Home() {
	return (
		<main className=" flex min-h-screen flex-col items-center justify-between  ">
			<div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-8 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
				{imgs.map(img => <MyImage key={img.text} src={img.src} text={img.text} alt={img.text}/>
				)}
			</div>
		</main>
	)
}
