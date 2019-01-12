# ESLint Setting

***for React-Native***

<strong>.eslintrc.json</strong>
```json

// es6 & node & browser 기반, es8 문법 & 리액트 & 리액트 네이티브 & jsx 사용
// rules: 세미콜론 항상, indentation-Tab, 문자열 '', var 사용 금지, 화살표 함수 콜백, 사용안된 변수 경고, 콘솔 경고, 변경되지 않은 변수 const로 경고

{
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-var": [
            "error"
        ],
        "prefer-arrow-callback": [
            "error"
        ],
        "no-unused-vars": [
            "warn"
        ],
        "no-console": [
            "warn"
        ],
        "prefer-const": [
            "warn"
        ]
    }
}

```

<strong>package.json</strong>
```json

"scripts": {
    "lint": "eslint *.js app/*"
  }

```

<strong>module</strong>
```

eslint
eslint-plugin-react
eslint-plugin-react-native
babel-eslint

```



