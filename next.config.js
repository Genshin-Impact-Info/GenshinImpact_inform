/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://genshin-impact-info.github.io/GenshinImpact_inform";
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
    trailingSlash: true,
}

module.exports = nextConfig;
