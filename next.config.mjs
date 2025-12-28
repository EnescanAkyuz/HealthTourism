/** @type {import('next').NextConfig} */
const basePathRaw = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const basePath = basePathRaw
  ? basePathRaw.startsWith('/')
    ? basePathRaw
    : `/${basePathRaw}`
  : undefined;

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
