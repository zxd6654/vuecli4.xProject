module.exports = {
  plugins: {
    "postcss-px2rem-exclude": {
      remUnit: 100,
      exclude: /node_modules|otherFolder/i,
    },
  },
};
// remUnit设置为37.5是为了引用不同的第三方UI框架，
// 因为第三方框架没有兼容px2rem，
// 将remUnit的值设置为设计图宽度（这里为750px）75的一半，
// 即可以1:1还原第三方的组件，否则会样式会有变化，例如按钮会变小。
// 如果设置成了37.5 ，我们就需要在（750px）写样式时，将值改为设计图的一半。
