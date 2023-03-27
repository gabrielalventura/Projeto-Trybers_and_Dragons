import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster('monster1');
const monster2 = new Dragon('monster2');

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
};