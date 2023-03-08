module.exports = {
  "ci": false,
  "dryRun": false,
  "release": {
    "branches": ["master"],
    "prepare": [
      "@semantic-release/changelog",
      "@semantic-release/npm",
      {
        "path": "@semantic-release/git",
        "assets": [
          "package.json", "CHANGELOG.md"
        ],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
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
    ["@semantic-release/exec", {
      "publishCmd": "echo This is a test command "
    }],
    "@semantic-release/npm",
    "@semantic-release/git"
  ]
}
