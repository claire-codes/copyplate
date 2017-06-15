const path = require("path");

let getFileFromPath = function(path) {
    // Get file type and then you know which bit to ignore up to
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
    // module-customer-custom-attributes => Magento_CustomerCustomAttributes
    let name = vendorModule.split("-");
    name.shift();
    let names = name.map(function(element) { 
        return capitalizeFirstLetter(element);
    });
    return "Magento_" + names.join('');
}

let capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let getFileType = function(path) {
    let splitPath = path.split(".");
    return splitPath[splitPath.length - 1];
}

export {getFileFromPath, getModuleName, transformModuleName, getFileType};