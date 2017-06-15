const path = require("path");
import {getFileFromPath, getModuleName, getFileType} from "./helpers";

// TODO: Toggle between app/design and app/code

// Example:
// 'vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'
// app/design/frontend/Regatta/default/Magento_Wishlist/web/js/wtf.js
function fileTransform(vendorPath) {
    // TODO: check absolute or relative
    let area = "frontend";
    let vendor = "Regatta";
    let theme = "default";
    let module = getModuleName(vendorPath);
    let fileType = getFileType(vendorPath);
    let filename = getFileFromPath(vendorPath);
    let fileTypePath = "/";

    // TODO: Knockout html
    // TODO: Module specific JS
    if (fileType === "js") {
        fileTypePath = "web/js";
    } else if (fileType === "phtml") {
        fileTypePath = "templates";
    } else if (fileType === "xml") {
        fileTypePath = "layout";
    }

    // Construct path
    return path.join("app/design/", area, vendor, theme, module, fileTypePath, filename);
}

module.exports = fileTransform;
