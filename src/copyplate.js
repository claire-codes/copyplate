#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const fileTransform = require('./fileTransform');
const mkdirp = require("mkdirp");
const chalk = require("chalk");

const args = process.argv.slice(2);
const vendorPath = args[0];
const vendorName = args[1];
const themeName = args[2];
const errorColour = chalk.bold.red;
const successColour = chalk.bold.green;

var appPath;

if (vendorPath) {
    if (fs.existsSync(vendorPath))  {
        appPath = fileTransform(vendorPath, vendorName, themeName);
    } else {
        console.log(errorColour("🚫  File does not exist"));
        process.exit();
    }
} else {
    console.log(errorColour("🚫  You haven't provided me with an argument"));
    process.exit();
}

if (!appPath) {
    console.log(errorColour("🚫  Path to file does not exist"));
    process.exit();
}

if (fs.existsSync(appPath)) {
    console.log(errorColour("🚫  It already exists"));
    process.exit();
} else {
    console.log(successColour("💁  It doesn't exist yet, I'll make it ✨ 📂"));
    mkdirp(path.dirname(appPath), function() {
        const contents = fs.readFileSync(vendorPath, 'utf8');
        fs.writeFileSync(appPath, contents, 'utf8');
    });
}