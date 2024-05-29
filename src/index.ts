#! /usr/bin/env node
 
import { which, echo, exit, cp } from 'shelljs';
import { exec } from 'async-shelljs';
import { blue, green, red } from 'colors';
import figlet from 'figlet';
import { Command } from 'commander';
const program = new Command();


program
  .version('0.1.0')
  .description('An example CLI for generating angular projects')
  .option('-g, --generate  <value>', 'Generate new project with Name')
  .parse(process.argv);

echo(figlet.textSync('ArchGen'));
// program.outputHelp();

const options = program.opts();

// console.log("PROGRAM OPTIONS", options)


if (!which('ng')) {
  echo(red('Sorry, this script requires @angular/cli install'));
  exit(1);
}


//if there are no options passed, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
  exit(1);

}

// If there is no program name, stop the program and request for name
if(options.generate && options.generate.length > 2){
  const name= options.name
  echo(green(`Creating prject with name ${name}`));

  exec(`ng new ${name}`);
  echo(green(`Done creating project ${name} 🚀 `));


// console.log(blue('Hello World'));
// console.log('hello'.green);



  // COPY FILES
// cp('-rf', 'samples/shared', 'appFolder/src/app')

exit(0);
}else{
  echo(red('\nProject name should be more than 2 characters'));

  exit(1);
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


