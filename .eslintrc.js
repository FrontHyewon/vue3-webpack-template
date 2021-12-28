module.exports = {
  env: {
    // 코드 검사 여부
    browser: true,
    node: true
  },
  extends: [
    // 코드 검사 규칙 명시
    // vue
    // 세가지 옵션 중 하나 선택. 엄격한 정도에 따라 Lv다름
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3

    // js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // extends에서 정한 규칙 중 마음에 들지 않은 것 따로 수정
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}