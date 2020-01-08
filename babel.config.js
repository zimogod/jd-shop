module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      // style设置成false，则不加载样式，一般都是设置成true
      style: true
    }, 'vant']
  ],
}
