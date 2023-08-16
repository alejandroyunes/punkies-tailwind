/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
}

module.exports = nextConfig