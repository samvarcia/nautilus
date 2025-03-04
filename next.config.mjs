/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: '',
          pathname: '/a/h8b8ligav2/**',
        },
        {
          protocol: 'https',
          hostname: 'h8b8ligav2.ufs.sh',
          port: '',
          pathname: '/f/**',
        },
      ],
    },
};

export default nextConfig;
