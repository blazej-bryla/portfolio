/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    email: 'blazej.bryla.kontakt@gmail.com',
    password: 'vtfoeezpjaleucjr'
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
