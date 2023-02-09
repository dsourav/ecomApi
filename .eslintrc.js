module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "strict": ["error", "module"],
        "no-var": "error",
        "camelcase": ["error", { "properties": "never" }],
        "semi": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "no-console": "error",
        "no-unused-vars": ["error", { "args": "none" }]
    }
};
