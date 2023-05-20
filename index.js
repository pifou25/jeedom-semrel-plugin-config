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
        "@semantic-release/exec",
        {
            "prepare": "sed -i 's/\"pluginVersion\": \".*\"/\"pluginVersion\": \"${nextRelease.version}\"/' plugin_info/info.json"
        }
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
