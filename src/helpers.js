let getFileFromPath = function(path) {
    // Get file type and then you know which bit to ignore up to
    let findMe;
    let fileType = getFileExtension(path);
    if (fileType === "phtml") {
        findMe = "templates/";
    } else if (fileType === "js") {
        findMe = "web/js/";
    } else if (fileType === "xml") {
        findMe = "layout/";
    } else if (fileType === "html") {
        findMe = "web/template/";
    } else {
        findMe = "/";
    }
    return path.substring(path.indexOf(findMe) + findMe.length);
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

let getFileExtension = function(path) {
    let splitPath = path.split(".");
    return splitPath[splitPath.length - 1];
}

export {getFileFromPath, getModuleName, transformModuleName, getFileExtension};