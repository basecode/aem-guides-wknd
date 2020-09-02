module.exports = {
     context: __dirname,
     clientLibRoot: "./site.template/src/main/content/jcr_root/conf/wkndsk/settings/wcm/clientlibs",
     libs: [
         {
             name: "theme",
             allowProxy: true,
             categories: ["{site-name}.theme"],
             serializationFormat: "xml",
             cssProcessor : ["default:none", "min:none"],
             jsProcessor: ["default:none", "min:none"],
             assets: {
                 js: [
                     "site.theme/dist/js/theme.js"
                 ],
                 css: [
                     "site.theme/dist/css/theme.css"
                 ],
                 resources: {
                     cwd: "site.theme/dist/resources",
                     flatten: false,
                     files: ["**/*.*"]
                 }
             }
         }
     ]
 }
