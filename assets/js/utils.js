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
    }
  }
}
