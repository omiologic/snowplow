module.exports = {
    extends: "eslint-config-standard",
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 8
    },
    ecmaFeatures: {
        jsx: true
    },
    plugins: ['react', 'import'],
    rules: {
        "space-before-function-paren": ["warn", "never"],
        "prefer-const": "warn",
        "comma-dangle": ["error", "only-multiline"],
        "space-infix-ops": "off",      // Until eslint #7489 lands
        "new-cap": "off",
        "no-unused-vars": ["error", { "varsIgnorePattern": "^_" }],
        "no-return-assign": "off",
        "no-unused-expressions": "off",
        "one-var": "off",
        "new-parens": "off",
        "indent": ["error", 2,
            {
                "SwitchCase": 1,
                "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }
            }
        ],
        "arrow-body-style": ["warn", "as-needed"],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "no-unused-vars": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": "error",
        "no-tabs": "off",
        "import/first": "off",
        "import/export": "off",

        "semi": ["error", "always"],
        // This rule enforces a comma-first style, such as
        // npm uses. I think it's great, but it can look a bit weird,
        // so we're leaving it off for now (although stock Bones passes
        // the linter with it on). If you decide you want to enforce
        // this rule, change "off" to "error".
        "comma-style": ["off", "first", {
            exceptions: {
                ArrayExpression: true,
                ObjectExpression: true,
            }
        }]
    }
}
