module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "prettier",
        "plugin:prettier/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": 'error',
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "tabWidth": 2,
                "useTabs": false,
                "semi": true,
                "singleQuote": true,
                "arrowParens": "always",
                "bracketSpacing": true,
                "endOfLine": "auto",
                "importOrder": [
                    "^components/(.*)$",
                    "^[./]"
                ],
                "importOrderSeparation": true,
                "importOrderSortSpecifiers": true,
                "plugins": [
                    "@trivago/prettier-plugin-sort-imports"
                ]
            }
        ],
    },
    "ignorePatterns": ['.eslintrc.js']
}
