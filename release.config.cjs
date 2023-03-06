module.exports = {
  "ci": false,
  "dryRun": false,
  "release": {
    "branches": ["master"]
  },
  "plugins": [
    ["@semantic-release/commit-analyzer", {
      "preset": "conventionalcommits",
      "releaseRules": [
        {"type": "docs", "scope":"README", "release": "patch"},
        {"type": "refactor", "release": "patch"},
        {"type": "style", "release": "patch"}
      ],
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
      }
    }],
    ["@semantic-release/release-notes-generator", {
      "preset": "conventionalcommits",
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      },
      "writerOpts": {
        "commitsSort": ["subject", "scope"]
      }
    }],
    "@semantic-release/npm",
    "@semantic-release/git"
  ]
}
