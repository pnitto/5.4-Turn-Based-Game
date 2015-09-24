var models = require('models');
var views = require('views');

$(document).ready(function(){
  $('body').prepend(JST.application());

function Player(character) {
  this.health = 100,
  this.name = character.name
}


Player.prototype.attack = function(min,max){
  return Math.ceil(Math.random() * 10);
}

Player.prototype.specialAttack = function(attack){
  return  Math.ceil(Math.random() * 20) - attack.name
}

var scorpion = new Player({name: 'Scorpion'});
var subZero = new Player({name: 'SubZero'});
var raiden = new Player({name: 'Raiden'});
var jaxx = new Player({name: 'Jaxx'});

});
