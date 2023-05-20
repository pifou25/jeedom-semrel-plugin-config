/**
 * Semantic Release shareable config
 * for Jeedom Beta
 * with changelog genetaror, pluginVersion replacement
 */
module.exports = {
  branches: [
    "master",
    {
      name: "dev",
      prerelease: true
    },
    {
      name: "test",
      prerelease: true
    }
  ],
  tagFormat: "${version}",
  dryRun: false,
  debug: false,
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "docs/fr_FR/changelog_beta.md"
      }
    ],
    [
      "@semantic-release/npm",
      {
        "npmPublish": false
      }
    ],
    "@semantic-release/github",
    [
      "@google/semantic-release-replace-plugin",
      {
        replacements: [
          {
            files: ["plugin_info/info.json"],
            from: '"pluginVersion": ".*",',
            to: '"pluginVersion": "${nextRelease.version}",',
            results: [
              {
                file: "plugin_info/info.json",
                hasChanged: true,
                numMatches: 1,
                numReplacements: 1,
              },
            ],
            countMatches: true,
          },
        ],
      },
    ],
    [
      "@semantic-release/git",
      {
        message: `chore(release): \${nextRelease.version} [skip ci]`,
        assets: ["plugin_info/info.json", "docs/fr_FR/changelog_beta.md"],
      },
    ],
  ],
};
