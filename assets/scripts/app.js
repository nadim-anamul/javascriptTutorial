const ATTACK_VALUE = 10;
const HEAL_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;

const enteredValue = prompt('Maximum life for you and monster.','100');


let chosenMaxLife = parseInt(enteredValue);

/**
 * check if the entered number is valid or not
 */
if ( isNaN(chosenMaxLife) || chosenMaxLife < 0) {
    chosenMaxLife = 100;
}

let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

/**
 * reset the game and 
 * reset to initial value
 */
function reset() {
    currentPlayerHealth = chosenMaxLife;
    currentMonsterHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

/**
 * check the win or lose condition
 */

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but bonus life saved you.')
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You Win!');
        reset();
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You Lose!');
        reset();
    } else if (currentPlayerHealth === 0 && currentMonsterHealth === 0) {
        alert('You Lose!');
        reset();
    }
}

/**
 * 
 * @param {attack Mode} mode 
 */

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
    
    
}

/**
 * attack button function
 */

function attackHandler() {
    attackMonster('ATTACK');
}

/**
 * strong attack button function
 */

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

/**
 * heal button function
 */
function healAttackHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("you can't heal more than max health value");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
        
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healAttackHandler);