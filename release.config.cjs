module.exports = {
  ci: true, // Setting this to false allows program to make release from local repository
  dryRun: false, // Allows to make releases when running in local env, otherwise program prints out new version number
  release: {
      branches: ['master'], // Default branch from where the release was made
  },
  plugins: [
      [
          '@semantic-release/commit-analyzer', { // Analyzes the commit messages to identify type of release
              preset: 'conventionalcommits', // Using Conventional commit as base for
              releaseRules: [ // Custom release rules for types other than feat and fix
                  {
                      type: 'docs', // if type is docs and scope is readme file bump patch
                      scope: 'README',
                      release: 'patch',
                  },
                  {
                      type: 'refactor', // if type is refactor, bump patch
                      release: 'patch',
                  },
                  {
                      type: 'style', // if type is style, bump patch
                      release: 'patch',
                  },
              ],
              parserOpts: { // Pass keywords for parser to look for Breaking change
                  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
              },
          },
      ],
      [
          '@semantic-release/release-notes-generator', { // Configure release notes generator
              preset: 'conventionalcommits', // Use conventional commits as preset
              writerOpts: {
                  commitsSort: ['subject', 'scope'],
              },
          },
      ],
      [
        "@semantic-release/changelog",
        {
          "changelogFile": "docs/CHANGELOG.md"
        }
      ],
    //   '@semantic-release/npm', // Plugin to publish package on npm registry
      [
        '@semantic-release/git',
        {
            "assets": ["docs/CHANGELOG.md"]
        }
        ],
      [
          '@semantic-release/github', { // Plugin to publish package on github as new release
              assets: ['package.json'], // Define any assets that needs to be published in github, for eg. the build folder
          },
      ],
  ],
};
