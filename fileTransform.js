const path = require("path");
import { getFileFromPath, getModuleName } from "./helpers";

function fileTransform(vendorPath, fileType = 'js') {
    // TODO: check absolute or relative
    // Check vendor is valid and exists (does it have to though?)
    let area = "frontend";
    let vendor = "Regatta";
    let theme = "default-desktop";
    // 'vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'
    // app/design/frontend/Regatta/default-desktop/Magento_Wishlist/web/js/wtf.js

    let module = getModuleName(vendorPath);
    let appPath;

    // TODO: Template or xml or JS
    let fileTypePath;
    if (fileType === "js") {
        fileTypePath  = "web/js";
    }

    let filename = getFileFromPath(vendorPath);

    // Construct path
    appPath = path.join("app/design/", area, vendor, theme, module, fileTypePath, filename);

    return appPath;
}

module.exports = fileTransform;