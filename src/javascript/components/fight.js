import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
    let firstFighterHealthValue = secondFighter.health;
    let firstFighterHealthIndicatorElement = document.getElementById('left-fighter-indicator');
    firstFighterHealthIndicatorElement.style.width = firstFighterHealthValue + '%';

    let secondFighterHealthValue = secondFighter.health;
    let secondFighterHealthIndicatorElement = document.getElementById('right-fighter-indicator');
    secondFighterHealthIndicatorElement.style.width = secondFighterHealthValue + '%';

    document.addEventListener('keydown', function (event) {
      if(event.code == controls.PlayerTwoAttack) {
        
        firstFighterHealthValue = firstFighterHealthValue - getDamage(firstFighter, secondFighter);
        firstFighterHealthIndicatorElement.style.width = firstFighterHealthValue + '%';
        if(firstFighterHealthValue < 0) {
          resolve(secondFighter);
        }
      };

      if(event.code == controls.PlayerOneAttack) {
        secondFighterHealthValue = secondFighterHealthValue - getDamage(firstFighter, secondFighter);
        secondFighterHealthIndicatorElement.style.width = secondFighterHealthValue + '%';
        if(secondFighterHealthValue < 0) {
          resolve(firstFighter);
        }
      }
    });
  });
}

export function getDamage(attacker, defender) {
  // return damage
  let damage = getHitPower(attacker) - getBlockPower(defender);
  damage = damage > 0 ? damage : 0;
  return damage;
}

export function getHitPower(fighter) {
  // return hit power
  let criticalHitChance = Math.random() + 1;
  let power = fighter.attack * criticalHitChance;
  return power;
}

export function getBlockPower(fighter) {
  // return block power
  const dodgeChance = Math.random() + 1;
  const blockPower = fighter.defense * dodgeChance;
  return blockPower;
}
