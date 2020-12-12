window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if (promptFight === "fight" || promptFight === "FIGHT") {

    enemyHealth = enemyHealth - playerAttack;

    window.alert("Your robot " + playerName + " has just attacked the enemy robot " + enemyName + "!");
    
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        if (enemyHealth <= 0) {
            
            window.alert(enemyName + " has died!");
        } 

        else {
    
            window.alert(enemyName + " now has " + enemyHealth + " health left.");
        }
  
    playerHealth = playerHealth - enemyAttack;

    window.alert("Your robot " + playerName + " was attacked by the enemy robot " + enemyName + "!");
    
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
  
    if (playerHealth <= 0) {
        
        window.alert("Your robot, " + playerName + " has died!");
    } 

    else {
        
        window.alert(playerName + " now has " + playerHealth + " health left.");
    }
} 

else 

    if (promptFight === "skip" || promptFight === "SKIP") {

        var confirmSkip = window.confirm("Are you  sure you'd like to quit?");

        if (confirmSkip){
        
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");

            playerMoney = playerMoney -2;

        }
        else {
            
            promptFight();
        }
    } 

    else {
        x
        window.alert("You need to choose a valid option. Please ensure your answer is in FIGHT, or SKIP; ALL CAPS or ALL LOWERCASE! Try again!");
    }