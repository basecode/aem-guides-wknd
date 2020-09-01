# WKND Sites Starter Kit

This is the Sites Starter Kit for the WKND Reference site: [https://www.wknd.site/](https://www.wknd.site/)

## What does the Starter Kit contain?

<img src="https://user-images.githubusercontent.com/143527/89645292-c1313b80-d8b9-11ea-9ec4-3af8e8b1c92b.png" />

## Site Template

### Build

```
cd site.template
mvn clean install
```

## Site Theme

### Prerequisite

Before using Site Theme you need to go into `site.theme` folder and install npm modules.

```
cd site.theme
npm install
```

### Build

Build all JS / SCSS sources into compiled files.

```
npm run dev
```

### Live preview

Run live preview proxy server for AEM instance to see changes from your code immediately in the browser.

```
npm run live
```

### Proxy

Run proxy proxy server to preview AEM instance with compiled version of Starter Kit Theme.

```
npm run live
```

## Packaging and deployment

To package and deploy starter kit to AEM instance you need to:

### Prerequisite

Build Site template:

```
cd site.template
mvn clean install
```

### Package

Starter kit zip will be created.

```
npm run build
```

### Package and deploy

Starter kit zip will be created and deployed to local AEM instance.

```
npm run deploy
```
