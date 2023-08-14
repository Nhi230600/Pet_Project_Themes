const path = require('path');
const WebpackBar = require('webpackbar');
const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.REACT_INTERACTIVE_ANALYZE
        ? [
            new BundleAnalyzerPlugin({
              openAnalyzer: true,
            }),
          ]
        : []),
    ],
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {}, // https://github.com/DocSpring/craco-antd#customize-ant-design-theme
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function (lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = path.join(__dirname, 'node_modules');
          return lessRule;
        },
      },
    },
  ],
};
