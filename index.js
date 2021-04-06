//@ts-check

class mainScreen extends Phaser.Scene {

  /** Load assets into RAM */
  preload() {
  }

  /** Create and initialize scene components */
  create() {
  }
  
  /** runs in a loop, used to check for input changes */
  update() {

  }
}

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 600 },
      debug: false,
    },
  },
  scene: mainScreen
};

var game = new Phaser.Game(config);