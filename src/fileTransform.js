const path = require("path");
import {getFileSpecificPath, getModuleName, getFileTypePath} from "./helpers";

// TODO: Toggle between app/design and app/code

// Example:
// 'vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'
// app/design/frontend/Regatta/default/Magento_Wishlist/web/js/wtf.js
function fileTransform(vendorPath) {
    // TODO: check absolute or relative
    if (vendorPath.indexOf("vendor/") !== 0) {
        return false;
    }
    let area = "frontend";
    let vendor = "Regatta";
    let theme = "default";
    let moduleName = getModuleName(vendorPath);
    let fileType = path.extname(vendorPath);
    let fileSpecificPath = getFileSpecificPath(vendorPath);
    let fileTypePath = "/";

    // TODO: Module specific JS
    // TODO: Move this into a function to
    fileTypePath = getFileTypePath(fileType);

    // Construct path
    return path.join("app/design/", area, vendor, theme, moduleName, fileTypePath, fileSpecificPath);
}

module.exports = fileTransform;
