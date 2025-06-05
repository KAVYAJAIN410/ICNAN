let userConfig = undefined;

try {
  // try to import ESM user config first
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    // fallback to CJS user config
    userConfig = await import('./v0-user-next.config');
  } catch (innerError) {
    // ignore error, no user config found
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enable static HTML export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

if (userConfig) {
  const config = userConfig.default || userConfig;
  for (const key in config) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = { ...nextConfig[key], ...config[key] };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
