import { NextResponse, NextRequest } from "next/server"

export async function GET() {
    return NextResponse.json({
        images: [
            {
                text: 'jabiru atardecer',
                src: '/img/AtardecerjabirúSE.webp',
            },
            {
                text: 'jabiru vertical',
                src: '/img/JabiruverticalSE.webp',
            },
            {
                text: 'marcela sin edit',
                src: '/img/Marcelasinedit.webp',
            },
            {
                text: 'marcela 2',
                src: '/img/Marcela2SE.webp',
            },
            {
                text: 'yacare SE',
                src: '/img/YacareSE.webp',
            },
            {
                text: 'yaguarete 2',
                src: '/img/YaguareterioHighExpSE.webp',
            },
            {
                text: 'marcela 2',
                src: '/img/Yaguarete1erplanoSEcopia.webp',
            },
        ]
    })
}

export async function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json(data)
}