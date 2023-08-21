/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/certificates/**'
      }
    ]
  }
}

module.exports = nextConfig
