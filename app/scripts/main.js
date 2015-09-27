

// var models = require('models');
// var views = require('views');
var selectedPlayer;
var delay = 2000;
var selectedEnemy;

//---Jquery magic
  $('body').prepend(JST.application());

   $('.js-character').on('click',function(event,player){
      selectedPlayer = new Player( {name: $(this).text()});
      $('.js-playerName').text(selectedPlayer.name);
      $('.js-playerName').css('display','block');
      $('.js-character').css('display','none');
      console.log(selectedPlayer);
      //return selectedPlayer
    });

      $('.js-startGame').on('click', function(event, player){
        selectedEnemy = _.sample(enemyList);
        $('.js-enemyName').text(selectedEnemy.name);
        $('.js-enemyName').css('display','block');
        $('.js-startGame').css('display','none');
        setTimeout(function(){
          console.log(selectedEnemy);
        }, 1000);
      });

      $('.js-attackButton').on('click', function(){
        selectedPlayer.attack(selectedEnemy);
        $('.js-enemyHealth').text(selectedEnemy.health + "%");
        $('.js-playerHealth').text(selectedPlayer.health + "%");
      });

      $('.js-specialAttack-btn').on('click', function(){
        function button(){
          $('.js-specialAttack-btn').fadeIn('fast').delay(1000).fadeOut('fast').delay(3000)
          .fadeIn('fast').delay(1000).fadeOut('fast').delay(1000);
        }
        button();
        $('.js-specialAttack-btn').css('display', 'none');
        selectedPlayer.specialAttack(selectedEnemy);
        $('.js-enemyHealth').text(selectedEnemy.health + "%");
        $('.js-playerHealth').text(selectedPlayer.health + "%");
      });


      $('.select-player-btn').on('click', function(){
        $(this).slideDown('slow');
      });

      $('.select-player-btn').on('click', function(){
        $('.charactersMenu ul ul').slideUp();
        if(!$(this).next().is(':visible')){
          $(this).next().slideDown();
        }
      });


      //character displays on 'click'
      $('.scorpion-li').on('click',function(){
        $('.scorpion').slideToggle();
      });

      $('.scorpion-li').on('click', function(){
        $('.scorpion').css('display', 'block');
        $('.subzero').css('display','none');
        $('.raiden').css('display', 'none');
        $('.jaxx').css('display', 'none');
      });

      $('.subzero-li').on('click', function(){
        $('.subzero').slideToggle();
      });

      $('.subzero-li').on('click', function(){
       $('.subzero').css('display', 'block');
       $('.raiden').css('display', 'none');
       $('.jaxx').css('display', 'none');
       $('.scorpion').css('display', 'none');
      });

      $('.raiden-li').on('click', function(){
        $('.raiden').slideToggle();
      });

      $('.raiden-li').on('click', function(){
        $('.raiden').css('display', 'block');
        $('.subzero').css('display', 'none');
        $('.jaxx').css('display','none');
        $('.scorpion').css('display', 'none');
      });

      $('.jaxx-li').on('click', function(){
        $('.jaxx').slideToggle();
      });

      $('.jaxx-li').on('click', function(){
        $('.jaxx').css('display', 'block');
        $('.scorpion').css('display','none');
        $('.subzero').css('display','none');
        $('.raiden').css('display','none');
      });
//Enemy Display
$('.js-startGame').on('click', function(){
  $('.' + selectedEnemy.name).slideToggle();
  $('.' + selectedEnemy.name).css('display', 'block');
});



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
  var playerBar = $(".enemy-status-bar").css('width',  enemyHealth / 2 + "%");
  console.log(this.name + " did " + playerAttack + "%" + " damage to " + enemy.name +". " + enemy.name  + " now has " + enemyHealth + "%"  + " health.");
  if(enemyHealth <= 0){
    $('.js-attackButton').css('display', 'none');
    $('.js-specialAttack-btn').css('display', 'none');
    $('.winLose').text(player.name + " has won the Fight!");
    $('.winLose').css('display','block');
  } else if(player.health <= 0) {
    $('.js-attackButton').css('display','none');
    $('.js-specialAttack-btn').css('display','none');
    $('.winLose').text(enemy.name + " has won the Fight!");
    $('.winLose').css('display','block');
  } else{
     enemy.attack(player);
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
  var playerBar = $(".enemy-status-bar").css('width', eHealth / 2 + "%");
  console.log(this.name + " did " + playeratt + "%" + " damage to " + enemy.name + ". " + enemy.name + " now has " + eHealth + "%" + " health.");
  if(eHealth <= 0){
    $('.winLose').text(spPlayer.name + " has won the Fight!");
    $('.winLose').css('display','block');
    $('.js-attackButton').css('display','none');
    $('.js-specialAttack-btn').css('display', 'none');
  } else if(spPlayer.health <= 0) {
    $('.winLose').text(enemy.name + " has won the Fight!");
    $('.winLose').css('display','block');
    $('.js-attackButton').css('display','none');
    $('.js-specialAttack-btn').css('display', 'none');
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
  var enemyBar = $(".player-status-bar").css('width', playerHealth / 2 + "%");
  console.log(this.name + " did " + enemyAttack + "%" + " damage to " + player.name + ". " + player.name + " now has " + playerHealth + "%" + " health.");
  if(playerHealth <= 0 ){
    $('.js-attackButton').css('display','none');
    $('.js-specialAttack-btn').css('display', 'none');
    $('.winLose').text(this.name + " has won the Fight!");
    $('.winLose').css('display','block');
  }else if(enemy.health <= 0) {
    $('.js-attackButton').css('display','none');
    $('.js-specialAttack-btn').css('display', 'none');
    $('.winLose').text(player.name + "has won the Fight!");
    $('.winLose').css('display','block');
  }
};

Enemy.prototype.specialAttack = function(player){
  var spEnemy = this;
  var phealth = player.health;
  var enemyAtt = Math.ceil(Math.random() * 20);
  phealth = phealth - enemyAtt;
  player.health = phealth;
  //player.specialAttack(spEnemy);
  var playerBar = $(".player-status-bar").css('width', phealth / 2 + "%");
  console.log(this.name + " did " + enemyAtt + "%" + " damage to " + player.name + ". " + player.name + " now has " + phealth + "%" + " health.");
  if(phealth <= 0){
    $('.js-attackButton').css('display','none');
    $('.js-specialAttack-btn').css('display', 'none');
    $('.winLose').text(spEnemy.name + " has won the Fight!");
    $('.winLose').css('display','block');
  } else if(phealth.health <= 0) {
    $('.js-attackButton').css('display','none');
    $('.js-specialAttack-btn').css('display', 'none');
    $('.winLose').text(player.name + " has won the Fight!");
    $('.winLose').css('display','block');
  }
};

var reptile = new Enemy({name: 'Reptile'});
var goro = new Enemy({name: 'Goro'});
var sonya = new Enemy({name: 'Sonya'});
var katana = new Enemy({name: 'Katana'});
var enemyList = [reptile, goro, sonya, katana];


var attackSound = new Audio();
attackSound.src = "../sounds/PUNCH.mp3";

var specialAttackSound = new Audio();
specialAttackSound.src = "../sounds/ultra_combo.mp3";
