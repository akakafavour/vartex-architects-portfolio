/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**',
            },
        ],
        // Cap generated srcSet widths at 2048. The default list tops out at
        // 3840, which hi-DPI screens pick for full-width images — wider than
        // the 3344px Sanity originals, so each request costs more to encode
        // for zero extra detail (and times out under dev).
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    },
    typescript: {
        ignoreBuildErrors: false,
    },
};

export default nextConfig;
