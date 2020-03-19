module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',  // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-namespace": "off"
    },
};
