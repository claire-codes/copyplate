const path = require("path");
const fs = require("fs");
const fileTransform = require('./fileTransform');

var args = process.argv.slice(2);
var vendorPath = args[0];
var appPath;

if (vendorPath) {
    if (fs.existsSync(vendorPath))  {
        appPath = fileTransform(vendorPath);
    } else {
        console.log("File does not exist");
        process.exit();
    }
} else {
    console.log("You haven't provided me with an argument");
    process.exit();
}

// TODO: Copy content rather than create blank file
var filePath = 'foo.txt';

if (fs.existsSync(filePath)) {
    console.log("It already exists");
    process.exit();
} else {
    console.log("It doesn't exist yet, I'll make it");
    fs.closeSync(fs.openSync(filePath, 'w'));
}