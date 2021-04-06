# Starter project for Phaser3.js tutorial in VS Code

This starter project is designed to let you implement the tutorial [Making your first Phaser 3 Game](http://phaser.io/tutorials/making-your-first-phaser-3-game/part1) using Visual Studio Code. 

Changes from the original tutorial files:

1) The code now lives entirely in `index.js`. This is the empty version - a fully completed version with the working code is available 
   
2) I have added type definitions, a jsconfig.json, and the //@ts-check command so that Visual Studio Code will give detailed warnings and feedback based on the Phaser.js API
   
3) I have add regions and instructions for where to declare global variables and custom functions. 

## Want to add intellisense to another project?

These instructions work as of April 6, 2021.

1) Download the latest type definition files from https://github.com/photonstorm/phaser/tree/master/types

2) Put them in a folder in your root project directory called 'typings'

3) Create a file called `jsconfig.json` in your root directory if it does not exist, and simply add the blank object `{}`. (See https://code.visualstudio.com/docs/languages/jsconfig) for more details about this file you may need for more advanced projects.)

4) Add the line `//@ts-check` as the first line in all of your javascript files.

Good luck!

