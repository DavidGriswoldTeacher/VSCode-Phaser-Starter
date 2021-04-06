//@ts-check
// The line above enables intellisense in VS Code

// #region Global Variables ------------------------//

/** Configuration settings */
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

/** base game variable */
var game = new Phaser.Game(config);

// Declare any global variables below this line!
// This will include things like players, platforms,
// enemies, cursors, etc - elements accessible throughout the program.

// #endregion Global Variables --------------------//

/**
 * Runs before the game starts.
 * Use it to load assets into RAM.
 */
function preload() {}

/**
 * Runs at the beginning of the program.
 * Use it to initialize variables and set physics and animations.
 */
function create() {}

/**
 * Runs over and over again. Use it to check for things that
 * might change, like user inputs, and change appropriately.
 */
function update() {}

// #region custom functions
// Put your own custom functions in this region.

// #endregion custom functions
