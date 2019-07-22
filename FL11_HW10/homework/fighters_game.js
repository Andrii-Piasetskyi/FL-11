function Fighter(params) {
    this.name = params.name;
    this.damage = params.damage;
    this.hp = params.hp;
    this.agility = params.agility;
    const a = 0,
          contecst = this;
    
    Object.defineProperty(this, 'fName', {
        get: function() {
            return this.name;
        }
    });
    Object.defineProperty(this, 'fDamage', {
        get: function() {
            return this.damage;
        }
    });
    Object.defineProperty(this, 'getAgility', {
        get: function() {
            return this.agility;
        }
    });
    Object.defineProperty(this, 'fHealth', {
        get: function() {
            return this.hp;
        }
    });    
    
    this.shock = function(anotherpoint) {
        const fullHp = 100,
              point = 1;
        let anotherAg = anotherpoint.getAgility,     
            tryFight = Math.floor(Math.random() * (fullHp - a + point)) + a;        
        if (tryFight < fullHp - anotherAg) {
            console.log(`${contecst.fName} shock ${contecst.fDamage} and get ${anotherpoint.fName}`);            
            anotherpoint.getDamage(contecst.fDamage);
        } else {
            console.log(`${anotherpoint.fName} shock lose`);            
        }
    }
    
    let losses = 0,
        wins = 0;
    
    this.log = function() {        
        console.log(`Name: ${contecst.fName}, Wins: ${wins}, Losses: ${losses}`);
    }
    let currentHP = contecst.fHealth;
    this.heal = function(addHP) {        
        if (currentHP < contecst.fHealth) {
            if (currentHP + addHP > contecst.fHealth) {
                currentHP = contecst.fHealth;
                return currentHP;
            } else {
                currentHP = currentHP + addHP;
                return currentHP;
            }                            
        }         
    }
    this.getDamage = function(deductHP) {        
        if (currentHP - deductHP < 0) {
            currentHP = a;
            return currentHP;
        } else { 
            currentHP = currentHP - deductHP;
            return currentHP;
        }        
    }
    this.wining = function() {
        wins++;        
        return wins;
    }
    this.loosing = function() {
        losses++;        
        return losses;
    }
}

const subzero = new Fighter({
    name: 'John',
    damage: 20,
    hp: 100,
    agility: 25
});

const scorpion = new Fighter({
    name: 'Jim',
    damage: 10,
    hp: 120,
    agility: 40
});

function fight (scorpion, subzero) {
    const iterationsLimit = Infinity;
    for (let i = 0; i < iterationsLimit; i++) {
        if (i === 0 && scorpion.getDamage(0) === 0) {
            console.log(`${scorpion.fName} is dead and can't fight.`);
            break;
        } else if (i === 0 && subzero.getDamage(0) === 0) {
            console.log(`${subzero.fName} is dead and can't fight.`);
            break;
        } else if (scorpion.getDamage(0) !== 0 && subzero.getDamage(0) !== 0) {
            scorpion.shock(subzero);        
            subzero.shock(scorpion);            
        } else if (scorpion.getDamage(0) !== 0 && subzero.getDamage(0) === 0) {
            scorpion.wining();
            subzero.loosing();            
            console.log(scorpion.getDamage(0));
            console.log(subzero.getDamage(0));
            scorpion.log();
            subzero.log();
            break;
        } else if (scorpion.getDamage(0) === 0 && subzero.getDamage(0) !== 0) {
            subzero.wining();
            scorpion.loosing();         
            console.log(scorpion.getDamage(0));
            console.log(subzero.getDamage(0));
            scorpion.log();
            subzero.log();
            break;
        }
    }    
}

fight(subzero, scorpion);