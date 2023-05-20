# jeedom-semrel-plugin-config

semantic-release shareable config to publish Jeedom Beta plugins

## Repository

see https://www.npmjs.com/package/jeedom-semrel-plugin-config 

## How-to ?

This Semantic-Release configuration is to be used with Github Workflow, and
with the `action-for-semancit-release` using the `extends` keyword:

https://github.com/marketplace/actions/action-for-semantic-release#extends

Example of command:
```
npx --package=@semantic-release/changelog --package=@semantic-release/exec --package=@semantic-release/git --extends=jeedom-semrel-plugin-config  semantic-release
```