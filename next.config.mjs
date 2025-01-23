/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/2048-in-react",
    output: "export",
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "edwardmelendezm.github.io",
                pathname: '**',
            },
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                pathname: '**',
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                pathname: '**',
            },
        ],
        formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
