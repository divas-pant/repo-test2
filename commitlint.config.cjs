const RULES = {
    extends: ['@commitlint/config-conventional'], // Start with conventional commit rules as base
    "rules": {
        "body-full-stop": [1, "always", "."], // ensure body ends with a full stop, warn if not
        "body-max-line-length": [0, "always"], // ensures body can be of any length
        "body-case": [2, "always", "lower-case"], // ensure body is written in lower case, error if not
        "scope-case": [2, "always", "lower-case"], // ensures the scope is in lower case, error if not
        "subject-case": [2, "always", "lower-case"], // ensures subject is written in lower case, error if not
        "type-case": [2, "always", "lower-case"], // ensures type of the commit is in lower case, error if not
        "subject-empty": [1, "never"], //makes subject of the message optional, wanrs itf not present
        "type-empty": [1, "never"] // makes type of the message optional, warns if not present
    }
};

module.exports = RULES;
