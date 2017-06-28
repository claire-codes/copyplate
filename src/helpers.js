const path = require("path");

let getFileSpecificPath = function(filepath) {
    // Get file type and then you know which bit to ignore up to
    let fileType = path.extname(filepath);
    let findMe = getFileTypePath(fileType) + "/";
    return filepath.substring(filepath.indexOf(findMe) + findMe.length);
}

let getModuleName = function(filepath) {
    let splitPath = filepath.split("/");
    let module = splitPath.find(function(element) {
        return element.indexOf("module-") > -1;
    })
    return transformModuleName(module);
}

let transformModuleName = function(vendorModule) {
    // module-wishlist => Magento_Wishlist
    // module-customer-custom-attributes => Magento_CustomerCustomAttributes
    let splitModuleName = vendorModule.split("-");
    splitModuleName.shift();
    let capitalizedNames = splitModuleName.map(function(element) {
        return capitalizeFirstLetter(element);
    });
    return "Magento_" + capitalizedNames.join('');
}

let capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let getFileExtension = function(filepath) {
    let splitPath = filepath.split(".");
    return splitPath[splitPath.length - 1];
}

let getFileTypePath = function(fileType) {
    if (fileType === ".js") {
        return "web/js";
    } else if (fileType === ".phtml") {
        return "templates";
    } else if (fileType === ".xml") {
        return "layout";
    } else if (fileType === ".html") {
        return "web/template"
    }
    return "";
}

export {getFileSpecificPath, getModuleName, transformModuleName, getFileExtension, getFileTypePath};