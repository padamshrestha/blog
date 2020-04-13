# Personal Blog/Notes..

## Install

```
yarn install
```

## Build

```
yarn build
```

## Run

```
yarn dev:docs
```

## Git publish

```
yarn build:docs (vuepress build docs)
cd docs/.vuepress/dist
git push -f https://github.com/padamshrestha/notes.git master:gh-pages
```

```
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

## All commands

```
    "build": "concurrently \"rimraf lib\" \"npm:build:client\" \"npm:build:node\" \"npm:build:components\"",
    "build:client": "tsc -p tsconfig.client.json",
    "build:components": "cpx \"src/client/components/**/*\" lib/client/components",
    "build:docs": "vuepress build docs --temp docs/.temp",
    "build:node": "tsc -p tsconfig.node.json",
    "dev": "concurrently \"rimraf lib\" \"npm:dev:client\" \"npm:dev:node\" \"nodemon\"",
    "dev:client": "tsc -p tsconfig.client.json --watch",
    "dev:docs": "vuepress dev docs --temp docs/.temp",
    "dev:node": "tsc -p tsconfig.node.json --watch",
    "lint": "eslint src --ext .ts,.vue",
    "prepublishOnly": "npm run build && conventional-changelog -p angular -r 2 -i CHANGELOG.md -s"
```

## Reference

https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#frontmatter-classifier

## Github Action

https://github.com/marketplace/actions/deploy-to-vuepress
