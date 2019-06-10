export default {
  methods: {
    /**
     * JavaScriptアンエスケープ
     * @param {String} str 変換したい文字列
     */
    unEscapeJs(str) {
      if (['\\\\n', '\\\\t', '\\\\0'].includes(str)) return str
      return str
        .replace('\\n', '\n')
        .replace('\\t', '\t')
        .replace('\\0', '\0')
    },
    /**
     * アルファベットの先頭大文字化
     * @param {String} str 変換したいアルファベット文字列
     */
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  }
}
