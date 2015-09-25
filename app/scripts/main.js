var models = require('models');
var views = require('views');

$(document).ready(function(){
  $('body').prepend(JST.application());


var selectedEnemy = _.sample(enemyList);

var selectedPlayer = $('.character').on('click',function(event){
      $(this).css({color : 'red'});
});


console.log(selectedPlayer)



var scorpion = new Player({name: 'Scorpion'});
var subZero = new Player({name: 'SubZero'});
var raiden = new Player({name: 'Raiden'});
var jaxx = new Player({name: 'Jaxx'});
var playerList = [scorpion, subZero, raiden, jaxx];


function Player(character) {
  this.health = 100;
  this.name = character.name;
}
Player.prototype.attack = function(enemy){
  var player = this;
  var enemyHealth = enemy.health;
  var playerAttack =  Math.ceil(Math.random() * 10);
  enemyHealth = enemyHealth - playerAttack;
  enemy.health = enemyHealth;
  console.log(this.name + " did " + playerAttack + "%" + " damage to " + enemy.name +"." + " Jaxx now has " + enemyHealth + "%"  + " health.");
};

Player.prototype.specialAttack = function(attack){
  return  Math.ceil(Math.random() * 20);
};

function Enemy(character){
  this.health = 100;
  this.name = character.name;
}

Enemy.prototype.attack = function(player){
  var enemy = this;
  var playerHealth = player.health;
  var enemyAttack = Math.ceil(Math.random() * 10);
  playerHealth = playerHealth - enemyAttack;
  player.health = playerHealth;
  console.log(this.name + " did " + enemyAttack + "damage to " + player.name + ".");
};

Enemy.prototype.specialAttack = function(attack){
  Math.ceil(Math.random() * 20) - attack.name;
  };
var reptile = new Enemy({name: 'Reptile'});
var goro = new Enemy({name: 'Goro'});
var sonya = new Enemy({name: 'Sonya'});
var katana = new Enemy({name: 'Katana'});
var enemyList = [reptile, goro, sonya, katana];



// function player1Choice(){
//
// }
});
