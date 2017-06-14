const path = require("path");

let getFileFromPath = function(path) {
    let splitPath = path.split("/");
    return splitPath[splitPath.length - 1];
}

export {getFileFromPath};