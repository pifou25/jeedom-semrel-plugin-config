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
npx --package=@semantic-release/changelog@6 \
    --package=@semantic-release/exec@6 \
    --package=@semantic-release/git@10 \
    --package=jeedom-semrel-plugin-config@1 \
    semantic-release@21 --extends=jeedom-semrel-plugin-config
```

Available tags are `latest` (optional as a default tag) for the master / stable branch;
 and `beta` or `dev` for beta configuration.