interface Image {
    src: string
    href: string
}

const url = "http://localhost:3000/"
export const getImages = async(): Promise<Image[]> => {
    const res = await fetch(`${url}/api`)
    return res.json();
}