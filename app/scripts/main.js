

// var models = require('models');
// var views = require('views');
var selectedPlayer;
var delay = 2000;
// $(document).ready(function(){
  $('body').prepend(JST.application());
  var selectedEnemy;
   $('.js-character').on('click',function(event,player){
      selectedPlayer = new Player( {name: $(this).text()} );
      console.log(selectedPlayer);
      //return selectedPlayer
    });
      $('.js-startGame').on('click', function(event, player){
        selectedEnemy = _.sample(enemyList);
        setTimeout(function(){
          console.log(selectedEnemy);
        }, 2000);
      });
      $('.js-attackButton').on('click', function(){
        selectedPlayer.attack(selectedEnemy);
      });
      $('.js-specialAttack-btn').on('click', function(){
        selectedPlayer.specialAttack(selectedEnemy);
      });
      $('.charactersMenu h2').on('click', function(){
        $('.charactersMenu ul ul').slideUp();
        if(!$(this).next().is(':visible')){
          $(this).next().slideDown();
        }
      });



var scorpion = new Player({name: 'Scorpion'});
var subZero = new Player({name: 'SubZero'});
var raiden = new Player({name: 'Raiden'});
var jaxx = new Player({name: 'Jaxx'});
var playerList = [scorpion, subZero, raiden, jaxx];
function Player(character) {
  // character = character || {};
  this.health = 100;
  this.name = character.name;
}
Player.prototype.attack = function(enemy){
  var player = this;
  var enemyHealth = enemy.health;
  var playerAttack =  Math.ceil(Math.random() * 10);
  enemyHealth = enemyHealth - playerAttack;
  enemy.health = enemyHealth;
  var playerBar = $(".player-status-bar").css('width', enemyHealth / 2 + "%");
  console.log(this.name + " did " + playerAttack + "%" + " damage to " + enemy.name +". " + enemy.name  + " now has " + enemyHealth + "%"  + " health.");
  if(enemyHealth <= 0){
    console.log(player.name + " has won the Fight!");
  } else if(player.health <= 0) {
    console.log(enemy.name + " has won the Fight!");
  } else{
       return enemy.attack(player);
  }
};
Player.prototype.specialAttack = function(enemy){
  var spPlayer = this;
  var eHealth = enemy.health;
  var playeratt = Math.ceil(Math.random() * 20);
  eHealth = eHealth - playeratt;
  enemy.health = eHealth;
  console.log(eHealth);
  //enemy.specialAttack(spPlayer);
  var playerBar = $(".player-status-bar").css('width', eHealth / 2 + "%");
  console.log(this.name + " did " + playeratt + "%" + " damage to " + enemy.name + ". " + enemy.name + " now has " + eHealth + "%" + " health.");
  if(eHealth <= 0){
    console.log(spPlayer.name + " has won the Fight!");
  } else if(spPlayer.health <= 0) {
    console.log(enemy.name + " has won the Fight!");
  } else {
    enemy.specialAttack(spPlayer);
  }
};
function Enemy(character){
  // character = character || {};
  this.health = 100;
  this.name = character.name;
}
Enemy.prototype.attack = function(player){
  var enemy = this;
  var playerHealth = player.health;
  var enemyAttack = Math.ceil(Math.random() * 10.1);
  playerHealth = playerHealth - enemyAttack;
  player.health = playerHealth;
  var enemyBar = $(".enemy-status-bar").css('width', playerHealth / 2 + "%");
  console.log(this.name + " did " + enemyAttack + "%" + " damage to " + player.name + ". " + player.name + " now has " + playerHealth + "%" + " health.");
};
Enemy.prototype.specialAttack = function(player){
  var spEnemy = this;
  var phealth = player.health;
  var enemyAtt = Math.ceil(Math.random() * 20);
  phealth = phealth - enemyAtt;
  player.health = phealth;
  console.log(phealth);
  //player.specialAttack(spEnemy);
  var playerBar = $(".player-status-bar").css('width', phealth / 2 + "%");
  console.log(this.name + " did " + enemyAtt + "%" + " damage to " + player.name + ". " + player.name + " now has " + phealth + "%" + " health.");
  if(phealth <= 0){
    console.log(spEnemy.name + " has won the Fight!");
  } else if(phealth.health <= 0) {
    console.log(player.name + " has won the Fight!");
  }
};
var reptile = new Enemy({name: 'Reptile'});
var goro = new Enemy({name: 'Goro'});
var sonya = new Enemy({name: 'Sonya'});
var katana = new Enemy({name: 'Katana'});
var enemyList = [reptile, goro, sonya, katana];
// function player1Choice(){
//
// }
// });
