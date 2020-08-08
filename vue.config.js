module.exports = {
  publicPath: "./",

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;//清除console日志
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"],
      },
    },
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true,
    },
  },
};
