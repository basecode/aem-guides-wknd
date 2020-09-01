module.exports = {
     context: __dirname,
     clientLibRoot: "./site.template/src/main/content/jcr_root/conf/wkndsk/settings/wcm/clientlibs",
     libs: [
         {
             name: "clientlib-wkndsk",
             allowProxy: true,
             categories: ["wkndsk.theme"],
             serializationFormat: "xml",
             cssProcessor : ["default:none", "min:none"],
             jsProcessor: ["default:none", "min:none"],
             assets: {
                 js: [
                     "site.theme/dist/theme/theme.js"
                 ],
                 css: [
                     "site.theme/dist/theme/theme.css"
                 ],
                 resources: {
                     cwd: "site.theme/dist/theme/resources",
                     flatten: false,
                     files: ["**/*.*"]
                 }
             }
         }
     ]
 }
