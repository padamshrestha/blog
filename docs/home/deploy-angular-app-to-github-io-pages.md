# Deploy Angular app to github.io pages

Create application using angular-cli ......

```
npm install -g @angular/cli
npm new <appname>
```

Install angular-cli-ghpages

```
npm install -g angular-cli-ghpages
```

Build

```
ng build --prod --base-href="https://<username>.github.io/<reponame>/"
```

Deploy

```
npx angular-cli-ghpages --dir=dist/apps/<appname>
```

Change repo setting to use gh-pages:
![image ghpages](./../images/gh-pages.jpg)
