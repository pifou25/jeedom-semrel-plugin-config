# jeedom-semrel-plugin-config

semantic-release shareable config to publish Jeedom plugins
 with `master` and `beta` branches.

## Repository

see https://www.npmjs.com/package/jeedom-semrel-plugin-config 

## How-to ?

This Semantic-Release configuration is to be used with Github Workflow, and
with the `action-for-semancit-release` using the `extends` keyword:

https://github.com/marketplace/actions/action-for-semantic-release#extends

### Example of command with `master` or `stable` configuration :
```
npx --package=@semantic-release/changelog@6 \
    --package=@semantic-release/exec@6 \
    --package=@semantic-release/git@10 \
    --package=jeedom-semrel-plugin-config@1 \
    semantic-release@21 --extends=jeedom-semrel-plugin-config
```

Available tags are `latest` (optional as a default tag) for the master / stable branch;
 and `beta` for beta configuration.

### Example of command for beta :

```
npx --package=@semantic-release/changelog@6 \
    --package=@semantic-release/exec@6 \
    --package=@semantic-release/git@10 \
    --package=jeedom-semrel-plugin-config@beta \
    semantic-release@21 --extends=jeedom-semrel-plugin-config
```

## Without nodeJS

Using the official Github action `action-for-semancit-release` requires to have
the `package.json` file that contains nodeJS configuration. Without this file, 
for full PHP / python projetcs, you'll have to run `npx` commands instead. Here
is an example of complete Github Workflow :

```yaml
name: Semantic Release

on:
  push:
    # this step for master only
    branches:
      - master
  # this is to manually trigger the worklow
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Reason'     
        default: 'Manual launch'

jobs:
  # one single job
  release:
    name: release
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

        # https://github.com/marketplace/actions/setup-node-js-environment
      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: semantic
        run: |
          npx --package=@semantic-release/changelog@6 \
              --package=@semantic-release/exec@6 \
              --package=@semantic-release/git@10 \
              --package=jeedom-semrel-plugin-config@1 \
              --package=semantic-release@21 \
              semantic-release --extends=jeedom-semrel-plugin-config
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Display Github summary
        if: steps.semantic.outputs.new_release_published == 'true'
        run: |
          echo "New release : ${{ steps.semantic.outputs.new_release_version }}" >> $GITHUB_STEP_SUMMARY
```

### More options

You can override semantic-release configuration with command line options:
https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file
