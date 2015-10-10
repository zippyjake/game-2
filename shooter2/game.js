'use strict';

var game = new Phaser.Game(800,600,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});
  
  var player;
  var cursors;
  var background;
  var missile;
  var enemy;
  
function preload() {
  game.stage.backgroundColor = '#4444FF';
  game.load.image('background', 'background.gif');
  game.load.image('player', 'player.gif');
  game.load.image('missile', 'missle.gif');
  game.load.image('enemy', 'enemy.gif');
}
function create() {
  background = game.add.tileSprite(0,0,800,600,'background');
  background.autoScroll(-100,0);
  missile = game.add.sprite(20,300,'missile');
  player = game.add.sprite(20,300,'player');
  enemy = game.add.sprite(600,300,'enemy');
  game.physics.enable(player, Phaser.Physics.ARCADE);
  game.physics.enable(missile, Phaser.Physics.ARCADE);
  game.physics.enable(enemy, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
  player.scale.x = .5;
  player.scale.y = .5;
}

function update() {
  game.physics.arcade.overlap(missile, enemy, collisionHandler, null, this);
  
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;
  
  if (! missile.shooting) {
    missile.body.velocity.x = 0;
    missile.body.velocity.y = 0;
    missile.x = player.x + 15;
    missile.y = player.y + 30;
    missile.renderable = true;
  }

  //move up
  if (cursors.up.isDown) {
    player.body.velocity.y = -300;
    if(! missile.shooting) {
      missile.body.velocity.y
    }
  }

  //move down
  else if (cursors.down.isDown) {
    player.body.velocity.y = 300;
    if (! missile.shooting) {
      missile.body.velocity.y = 300;
    }
  }

  //reset if off screen
  if (missile.x > 800)  {
    missile.shooting = false;
    missile.renderable = false;
    missile.body.velocity.x = 0;
    missile.body.velocity.y = 0;
    missile.x = player.x;
    missile.y = player.y
  }

  // shoot
  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
    missile.body.velocity.x = 1000;
    missile.shooting = true;
  }
}

function render() {
}

function collisionHandler(missile, enemy) {
    missileReset();
    repositionEnemy();
}

function repositionEnemy() {
    enemy.x = game.rnd.integerInRange(100, 780);
    enemy.y = game.rnd.integerInRange(20, 540);
}

function missileReset() {
    missile.shooting = false;
    missile.body.velocity.x = 0;
    missile.body.velocity.y = 0;
}
