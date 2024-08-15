/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
        config.module.rules.push({
            test: /\.html$/i,
            loader: "raw-loader",
          });
      // Important: return the modified config
      return config
    },
  };

export default nextConfig;



