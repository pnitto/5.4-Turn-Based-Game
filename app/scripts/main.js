var models = require('models');
var views = require('views');

$(document).ready(function(){
  $('body').prepend(JST.application());


var selectedEnemy = _.sample(enemyList);

var selectedPlayer =
  $('.Character').on('click', function(event, character){
  selectedPlayer = character;
});


function Player(character) {
  this.health = 100;
  this.name = character.name;
}
Player.prototype.attack = function(min,max){
  var playerAttack =  Math.ceil(Math.random() * 10);
  return ( - playerattack);
};

Player.prototype.specialAttack = function(attack){
  return  Math.ceil(Math.random() * 20);
};
var scorpion = new Player({name: 'Scorpion'});
var subZero = new Player({name: 'SubZero'});
var raiden = new Player({name: 'Raiden'});
var jaxx = new Player({name: 'Jaxx'});
var playerList = [scorpion, subZero, raiden, jaxx];





function Enemy(character){
  this.health = 100;
  this.name = character.name;
}

Enemy.prototype.attack = function(min,max){
  return Math.ceil(Math.random() * 10);
};

Enemy.prototype.specialAttack = function(attack){
  return  Math.ceil(Math.random() * 20) - attack.name;
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
