const http = require('http');
const connect = require('connect');
const httpProxy = require('http-proxy');
const chokidar = require('chokidar');
const fileSystem = require('fs');

const CONFIG = require('./proxy.config.json');

// Watch Theme changes and update

const watcherCSS = chokidar.watch(CONFIG.css, /^\./, { persistent: true });
const watcherJS = chokidar.watch(CONFIG.js, /^\./, { persistent: true });

const fileChanged = function(target, path) {
  setTimeout(() => {
    fileSystem.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(err)
      } else {
        CHANGES[target] = data;
      }
    });
  });
};

const CHANGES = {
  css: '',
  js: ''
};

const changedCSS = fileChanged.bind(null, 'css');
const changedJS = fileChanged.bind(null, 'js');

watcherCSS
  .on('add', path => changedCSS(path))
  .on('change', path => changedCSS(path));

watcherJS
  .on('add', path => changedJS(path))
  .on('change', path => changedJS(path));


// Append Theme to head of html in proxy response

var app = connect();

// Create proxy server

var proxy = httpProxy.createProxyServer({
  target: CONFIG.url
});

const routeMap = new Map([
  ['/etc.clientlibs/wknd/clientlibs/clientlib-wknd/css/theme.css', './dist/css/theme.css'],
  ['/etc.clientlibs/wknd/clientlibs/clientlib-wknd/js/theme.js', './dist/js/theme.js'],
])

app.use(
  function (req, res) {
    if (routeMap.has(req.url)) {
      fileSystem.createReadStream(routeMap.get(req.url)).pipe(res);
    }
    proxy.web(req, res);
  }
);

http.createServer(app).listen(CONFIG.port);
