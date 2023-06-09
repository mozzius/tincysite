import { withPlausibleProxy } from "next-plausible";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fontLoaders: [
    {
      loader: "@next/font/google",
      options: { subsets: ["latin"] },
    },
  ],
  experimental: {
    appDir: true,
    // typedRoutes: true,
  },
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@tincy/components", "@tincy/db"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  typescript: { ignoreBuildErrors: !!process.env.CI },
};

export default withPlausibleProxy()(nextConfig);
