/** @type {import('next').NextConfig} */

const bundleAnalyzer = require('next-bundle-analyzer')
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

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

module.exports = withBundleAnalyzer(nextConfig)
