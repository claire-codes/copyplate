const path = require("path");

let getFileFromPath = function(path) {
    let splitPath = path.split("/");
    return splitPath[splitPath.length - 1];
}

let getModuleName = function(path) {
    let splitPath = path.split("/");
    let module = splitPath.find(function(element) {
        return element.indexOf("module-") > -1;
    })
    return transformModuleName(module);
}

let transformModuleName = function(vendorModule) {
    // module-wishlist => Magento_Wishlist
    let name = vendorModule.split("-")[1];
    return "Magento_" + capitalizeFirstLetter(name);
}

let capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export {getFileFromPath, getModuleName, transformModuleName};