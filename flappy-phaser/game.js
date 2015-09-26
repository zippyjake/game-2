'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;
var player;
var cursors;
var jumpButton;
var jumpTimer;
var bpipe;
var tpipe;
var bird;
var flappy;

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.spritesheet('background','background.png', 258, 258);
  game.load.image('player','player.gif');
  game.load.image('bpipe','bpipe.gif')
  game.load.image('tpipe','tpipe.gif')
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  background = game.add.tileSprite(0,0,320,568,'background');
  background.autoScroll(-100,0)
  player = game.add.sprite(20,300,'player');
  bpipe = game.add.sprite(400,400,'bpipe')
  tpipe = game.add.sprite(400,-50,'tpipe')
  background.smoothed = false;
  background.animations.add('an',[0,1,2,3,4,5], 5, true)
  background.play('an')
  game.physics.enable(player, Phaser.Physics.ARCADE);
  game.physics.enable(tpipe, Phaser.Physics.ARCADE);
  game.physics.enable(bpipe, Phaser.Physics.ARCADE);
  player.body.gravity.y = 300;
  cursors = game.input.keyboard.createCursorKeys();
  bpipe.body.velocity.x = -200;
  tpipe.body.velocity.x = -200;
  //sapce to flapp
  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    .onDown.add(function (){
      player.body.velocity.y = -400;
  })




  //this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
  //var flapKey = this.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);
  //flapKey.onDown.add(this.bird.flap, this.bird);
  //this.input.onDown.add(this.bird.flap, this.bird);
}
function update() {

  // move up
  if (cursors.up.isDown) {
    player.body.velocity.y = -200;  
  }

  //reset if off screen
  if (bpipe.x <= 0)  {
    bpipe.x = 300
  }

  if (tpipe.x <= 0) {
    tpipe.x = 300
  }
}

function render() {

}

function collisionHandler(player, pipe) {
  missileReset();
  repositionEnemy();
}
