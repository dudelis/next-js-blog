/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      pathname: '*',
      
    },
    {
      protocol: 'https',
      hostname: 'gist.github.com',
      pathname: '*',
      
    }],
  }
};

module.exports = nextConfig


