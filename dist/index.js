#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const chalk = require('chalk');
// import chalk from 'chalk';
const colors_1 = require("colors");
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .version("1.0.0")
    .description("An example CLI for managing a directory")
    .option("-l, --ls  [value]", "List directory contents")
    .option("-m, --mkdir <value>", "Create a directory")
    .option("-t, --touch <value>", "Create a file")
    .parse(process.argv);
console.log(figlet_1.default.textSync("Architype"));
program.outputHelp();
program.summary();
const options = program.opts();
// console.log(program);
// if (which('ng')) {
//   echo('Sorry, this script requires @angular/cli install');
//   echo('Sorry, this script requires @angular/cli installed');
//   // exit(1);
// }
console.log((0, colors_1.blue)("Hello World"));
console.log('hello'.green);
// console.log("Starting shell", Colors)
//# sourceMappingURL=index.js.map