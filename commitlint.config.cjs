const RULES = {
    extends: ['@commitlint/config-conventional'],
    "rules": {
        "body-full-stop": [1, "always", "."],
        "body-case": [2, "always", "sentence-case"]

    }
}

module.exports = RULES;
