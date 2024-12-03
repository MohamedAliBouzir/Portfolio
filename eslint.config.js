import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "plugin:react/recommended",
      "airbnb-typescript",
      "plugin:eslint-comments/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:prettier/recommended",
      "prettier",
      "react-app"
    ],
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "plugins": ["import", "prettier", "eslint-comments", "react", "jsx-a11y", "react-hooks"],
    "rules": {
      "prettier/prettier": ["warn"],
      "no-use-before-define": "off",
      "no-case-declarations": "off",
      "no-underscore-dangle": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
      "no-param-reassign": "off",
      "no-empty": "warn",
      "import/no-extraneous-dependencies": "warn",
      "react/jsx-props-no-spreading": "warn",
      "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }],
      "jsx-a11y/label-has-associated-control": [
        "warn",
        {
          "depth": 3
        }
      ],
      "react-hooks/exhaustive-deps": "error",
      "react-hooks/rules-of-hooks": "error",
      "react/function-component-definition": [
        2,
        {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
        }
      ],
      "react/no-arrow-function-lifecycle": "off",
      "react/no-invalid-html-attribute": "off",
      "react/no-unused-class-component-methods": "off",
      "import/no-anonymous-default-export": [
        "error",
        {
          "allowArray": true,
          "allowArrowFunction": false,
          "allowAnonymousClass": false,
          "allowAnonymousFunction": false,
          "allowCallExpression": true, // The true value here is for backward compatibility
          "allowLiteral": false,
          "allowObject": true
        }
      ]
    },
    "parser": "@typescript-eslint/parser",
    "settings": {
      "import/ignore": ["node_modules"]
    }
  },
)
