#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const fileTransform = require('./fileTransform');
const mkdirp = require("mkdirp");

const args = process.argv.slice(2);
const vendorPath = args[0];
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

if (!appPath) {
    console.log("Nope");
    process.exit();
}

if (fs.existsSync(appPath)) {
    console.log("It already exists");
    process.exit();
} else {
    console.log("It doesn't exist yet, I'll make it");
    mkdirp(path.dirname(appPath), function() {
        const contents = fs.readFileSync(vendorPath, 'utf8');
        fs.writeFileSync(appPath, contents, 'utf8');
    });
}