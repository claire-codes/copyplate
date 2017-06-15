const path = require("path");
import { getFileFromPath, getModuleName, getFileType } from "./helpers";

// Example:
// 'vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'
// app/design/frontend/Regatta/default/Magento_Wishlist/web/js/wtf.js
function fileTransform(vendorPath) {
    // TODO: check absolute or relative
    // Check vendor is valid and exists (does it have to though?)
    let area = "frontend";
    let vendor = "Regatta";
    let theme = "default";

    let module = getModuleName(vendorPath);
    let appPath;

    // TODO: Template or xml or JS
    // TODO: Find type from extension and remove 2nd param (xml, phtml, html or js or even scss)
    let fileType = getFileType(vendorPath);
    let fileTypePath = "web/js";
    if (fileType === "js") {
        fileTypePath  = "web/js";
    } else if (fileType === "phtml") {
        fileTypePath = "templates";
    }

    let filename = getFileFromPath(vendorPath);

    // Construct path
    appPath = path.join("app/design/", area, vendor, theme, module, fileTypePath, filename);

    return appPath;
}

module.exports = fileTransform;