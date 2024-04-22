/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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

export default nextConfig;
