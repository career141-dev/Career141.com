import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const shouldUseRepoBasePath = repositoryName.length > 0 && !repositoryName.endsWith('.github.io')
const basePath = isGitHubActions && shouldUseRepoBasePath ? `/${repositoryName}` : ''
const shouldUseStaticExport = isGitHubActions

const nextConfig: NextConfig = {
  ...(shouldUseStaticExport ? { output: 'export' as const } : {}),
  images: {
    unoptimized: true,
  },
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
