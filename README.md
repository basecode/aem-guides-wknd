# WKND Sites Starter Kit

This is the Sites Starter Kit for the WKND Reference site: [https://www.wknd.site/](https://www.wknd.site/)

## What does the Starter Kit contain?

<img src="https://user-images.githubusercontent.com/143527/89645292-c1313b80-d8b9-11ea-9ec4-3af8e8b1c92b.png" />

## Site Template

### Build

To generate the site template:
```
cd site.template
mvn clean install
```
It creates an AEM content package (e.g. /aem-sites-starterkit-wknd.site.template-0.0.1-SNAPSHOT.zip) below the `target` folder that contains the templates, the policies and the client library for the site theme.

## Site Theme

### Prerequisite

Before using Site Theme you need to go into the `site.theme` folder and install npm modules.

```
cd site.theme
npm install
```

### Build

Build all JS / SCSS sources into compiled files.

```
npm run dev
```
This command generates the theme js and css files and the resources folder below the `dist` folder:
```
css/theme.css
js/theme.js
resources/
```

### Live preview

Run live preview proxy server for AEM instance to see changes from your code immediately in the browser.

```
npm run live
```
This command runs a proxy server at port 7000.

### Deploy

Deploy the changes to the AEM instance:
```
npm run dev
npm run deploy
```

## Starter kit

To package and deploy starter kit to AEM instance you need to:

### Prerequisite

Install Maven (to be able to use the packaging script).

### Build

To build the starter kit run following command at the project root:

```
npm run build
```
This commands generates the starter kit zip file `starterkit.zip` below the project root.

#### Build step by step

If you want to build `startetkit.zip` step by step here are the full instructions. This is what the full build does behind the scenes.
All the commands need to be run at the project root.

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

Deploy `startekit.zip` to a local AEM instance.

```
npm run deploy
```
