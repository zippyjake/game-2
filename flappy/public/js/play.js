// play.js

Flappy.Play = function () {
  this.player = null;
};

Flappy.Play.prototype = {

  init: function () {
    this.game.renderer.renderSession.roundPixels = true;
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.background = null;
  },

  preload: function () {
    //this.load.image("background","assets/background.png")
  },

  create: function() {
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(-100,0);
  },

  update: function () {
  }

};

game.state.add('Play',Flappy.Play);
