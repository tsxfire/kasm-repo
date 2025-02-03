/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'NerdsWork Registry',
    description: 'The official store for NerdsWork supported workspaces.',
    icon: '\site\public\NerdsworkLogo.png',
    listUrl: 'https://github.com/tsxfire/kasm-repo/',
    contactUrl: 'https://nerdswork.net/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-repo/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
