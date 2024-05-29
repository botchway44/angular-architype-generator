#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = require("shelljs");
const async_shelljs_1 = require("async-shelljs");
const colors_1 = require("colors");
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .version('0.1.0')
    .description('An example CLI for generating angular projects')
    .option('-g, --generate  <value>', 'Generate new project with Name')
    .parse(process.argv);
(0, shelljs_1.echo)(figlet_1.default.textSync('ArchGen'));
// program.outputHelp();
const options = program.opts();
// console.log("PROGRAM OPTIONS", options)
if (!(0, shelljs_1.which)('ng')) {
    (0, shelljs_1.echo)((0, colors_1.red)('Sorry, this script requires @angular/cli install'));
    (0, shelljs_1.exit)(1);
}
//if there are no options passed, show help
if (!process.argv.slice(2).length) {
    program.outputHelp();
    (0, shelljs_1.exit)(1);
}
// If there is no program name, stop the program and request for name
if (options.generate && options.generate.length > 2) {
    const name = options.name;
    (0, shelljs_1.echo)((0, colors_1.green)(`Creating prject with name ${name}`));
    (0, async_shelljs_1.exec)(`ng new ${name}`);
    (0, shelljs_1.echo)((0, colors_1.green)(`Done creating project ${name} 🚀 `));
    // console.log(blue('Hello World'));
    // console.log('hello'.green);
    // COPY FILES
    // cp('-rf', 'samples/shared', 'appFolder/src/app')
    (0, shelljs_1.exit)(0);
}
else {
    (0, shelljs_1.echo)((0, colors_1.red)('\nProject name should be more than 2 characters'));
    (0, shelljs_1.exit)(1);
}
// ng new appFolder
// exec('mkdir test', () => {
//   console.log('Done ... ')
//   //create a shared folder
//   //
//   /** [app]
//    * 
//    * - modules
//    *    - dashboard
//    *    - authentication
//    * 
//    * - shared
//    *    - utils
//    *    - constants
//    *    - models
//    *    - services
//    *    - lib
//    *    - shared.module.ts
//    */
//   cp('-rf', 'samples/shared', 'appFolder/src/app')
// })
// // console.log('Starting shell', Colors)
//# sourceMappingURL=index.js.map