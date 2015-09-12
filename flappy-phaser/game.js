'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;
var player;
var cursors;
var jumpButton;
var jumpTimer;
var pipe;

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image('background','background.gif');
  game.load.image('player','player.gif');
  game.load.image('pipe','pipe.gif')
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE)
  background = game.add.tileSprite(0,0,320,568,'background');
  background.autoScroll(-100,0);
  player = game.add.sprite(20,300,'player');
  pipe = game.add.sprite(400,400,'pipe')
  game.physics.enable(player, Phaser.Physics.ARCADE);
  game.physics.enable(pipe, Phaser.Physics.ARCADE);
  player.body.gravity.y = 300;
  cursors = game.input.keyboard.createCursorKeys();
  pipe.body.velocity.x = -200;

}

function update() {

  // move up
  if (cursors.up.isDown) {
    player.body.velocity.y = -200;  
  }

  if (pipe.x > 300) {
    console.log("test")
  }
}

function render() {
}

