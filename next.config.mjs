/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';
const nextConfig = {
  output: 'export',
  basePath: isVercel ? '' : (process.env.NODE_ENV === 'production' ? '/pruthviraj-portfolio' : ''),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

