module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        semi: ["error", "always"],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
    },
};
