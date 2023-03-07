const RULES = {
    extends: ['@commitlint/config-conventional'],
    "rules": {
        "body-full-stop": [1, "always", "."], // ensure body ends with a full stop, warn if not
        "body-case": [2, "always", "sentence-case"], // ensure body is written in sentence case, error if not
        "scope-case": [2, "always", "lower-case"], // ensures the scope is in lower case, error if not
        "subject-case": [2, "always", "sentence-case"], // ensures subject is written in sentence case, error if not
        "type-case": [2, "always", "lower-case"], // ensures type of the commit is in lower case, error if not
        "subject-empty": [1, "never"], //makes subject of the message optional, wanrs itf not present
        "type-empty": [1, "never"] // makes type of the message optional, warns if not present

    }
}

module.exports = RULES;
