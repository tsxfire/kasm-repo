/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'NerdsWork Registry',
    description: 'The official store for NerdsWork supported workspaces.',
    icon: 'https://tsxfire.github.io/kasm-repo/1.1/NerdsworkLogo.png',
    listUrl: 'https://tsxfire.github.io/kasm-repo/',
    contactUrl: 'https://github.com/tsxfire/kasm-repo/issues',
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
