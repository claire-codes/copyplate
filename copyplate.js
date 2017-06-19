const path = require("path");
const fs = require("fs");


// TODO: Get arg

// TODO: Decide whether to make file (are args OK, is fileTransform result OK?)
// TODO: Does current one exist - copy content
var filePath = 'foo.txt';

// TODO: Check whether file exists or not already
if (fs.existsSync(filePath)) {
    console.log("It already exists");
} else {
    console.log("It doesn't exist yet, I'll make it");
    fs.closeSync(fs.openSync(filePath, 'w'));
}