const path = require("path");
import {getFileSpecificPath, getModuleName, getFileTypePath, transformModuleName} from "./helpers";

// TODO: Toggle between app/design and app/code

// Example:
// 'vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'
// app/design/frontend/Vendor/default/Magento_Wishlist/web/js/wtf.js
function fileTransform(vendorPath, vendor = "Vendor", theme = "default") {
    // TODO: check absolute or relative
    if (vendorPath.indexOf("vendor/") !== 0) {
        return false;
    }
    // TODO: Make theme dynamic
    let area = "frontend";
    let moduleName = transformModuleName(getModuleName(vendorPath));
    let fileType = path.extname(vendorPath);
    let fileSpecificPath = getFileSpecificPath(vendorPath);
    let fileTypePath = "/";

    // TODO: Module specific JS
    fileTypePath = getFileTypePath(fileType);

    // Construct path
    return path.join("app/design/", area, vendor, theme, moduleName, fileTypePath, fileSpecificPath);
}

module.exports = fileTransform;
