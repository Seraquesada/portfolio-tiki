/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next'

const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
	}
}

export default withPlaiceholder(nextConfig)
