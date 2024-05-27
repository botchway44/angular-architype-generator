#! /usr/bin/env node

// var shell = require('shelljs');
// import * as chalk from 'chalk'
import { which, echo, exit, exec } from "shelljs"
// const chalk = require('chalk');
// import chalk from 'chalk';
import { blue } from 'colors';
import figlet from "figlet"
import { Command } from "commander"
const program = new Command();

program
  .version("1.0.0")
  .description("An example CLI for managing a directory")
  .option("-l, --ls  [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

console.log(figlet.textSync("Architype"));
program.outputHelp()

// const options = program.opts();

if (!which('ng')) {
  echo('Sorry, this script requires @angular/cli install');
  echo('Sorry, this script requires @angular/cli installed');
  exit(1);
}


console.log(blue("Hello World"));
console.log('hello'.green)

exec("ng new appFolder", () => {
  console.log("Done ... ")

  //create a shared folder

  //
  /** [app]
   * 
   * - modules
   *    - dashboard
   *    - authentication
   * 
   * - shared
   *    - utils
   *    - constants
   *    - models
   *    - services
   *    - lib
   *    - shared.module.ts
   */
})
// console.log("Starting shell", Colors)


