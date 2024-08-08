const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer()({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twitter Profile Picture,
      'res.cloudinary.com',
      'flagcdn.com'
    ]
  },
  // webpack: (config, { dev, isServer }) => {
  //   // Replace React with Preact only in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: 'preact/compat',
  //       'react-dom/test-utils': 'preact/test-utils',
  //       'react-dom': 'preact/compat'
  //     });
  //   }

  //   return config;
  // },

  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/Omkar_Kulkarni_7387710594_Resume.pdf',
        permanent: true
      },
      {
        source: '/gg',
        destination: '/ggwp.zip',
        permanent: true
      }
    ];
  }
});
