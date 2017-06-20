const path = require("path");
const fs = require("fs");
const fileTransform = require('./fileTransform');

// TODO: Get arg
var args = process.argv.slice(2);
var vendorPath = args[0];
var appPath;

// TODO: Decide whether to make file (are args OK, is fileTransform result OK?)
if (vendorPath) {
    appPath = fileTransform(vendorPath);
} else {
    console.log("You haven't provided me with an argument");
    process.exit();
}
// TODO: Does current one exist - copy content
var filePath = 'foo.txt';

// TODO: Check whether file exists or not already
if (fs.existsSync(filePath)) {
    console.log("It already exists");
} else {
    console.log("It doesn't exist yet, I'll make it");
    fs.closeSync(fs.openSync(filePath, 'w'));
}