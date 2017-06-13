const path = require("path");

function fileTransform(vendorPath, fileType) {
    'use strict';
    // Check vendor is valid and exists (does it have to though?)
    let area = "frontend";
    let vendor = "Regatta";
    let theme = "default-desktop";
    // 'vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'
    // app / design / frontend / Regatta / default - desktop / Magento_Wishlist / web / js / wtf.js
    // TODO: Find module and construct app version
    let module = "Magento_Wishlist";
    let appPath;
    // TODO: Template or xml or JS
    let fileTypePath = "web/js";
    // TODO: filename
    let filename = "wtf.js";
    // TODO: Construct path
    appPath = path.join("app/design/", area, vendor, theme, module, fileTypePath, filename);
    // TODO: Check path doesn't exist already
    return appPath;
}
module.exports = fileTransform;