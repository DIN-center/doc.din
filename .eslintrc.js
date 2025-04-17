module.exports = {
  extends: [
    "plugin:@docusaurus/recommended",
    "plugin:react/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
    createDefaultProgram: true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    '@docusaurus/no-untranslated-text': 0,
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": 0
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": [
        "plugin:@typescript-eslint/recommended"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"],
        "ecmaFeatures": {
          "jsx": true
        }
      }
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["eslint:recommended"],
      "parser": "espree",
      "env": {
        "node": true,
        "browser": true
      },
      "parserOptions": {
        "ecmaVersion": 2020,
        "ecmaFeatures": {
          "jsx": true
        }
      }
    }
  ]
};