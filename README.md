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

To use the packaging script you need to have Maven installed.

### Build

To build the whole starterkit.zip you just need to run:

```
npm run build
```

#### Build step by step

If you want to build startetkit.zip step by step here is full instruction. This is what the full build does behind the scenes.

1. Compile the Starter Kit theme:
```
npm run build:theme
```

2. Create a theme clientlib and put it into template:
```
npm run build:clientlib
```

3. Create a content package from site.template:
```
npm run build:template
```

4. Package everything into starterkit.zip:
```
npm run build:package
```

### Deploy

Deploy startekit.zip to a local AEM instance.

```
npm run deploy
```
