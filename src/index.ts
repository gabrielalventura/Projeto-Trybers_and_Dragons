import Character from './Character';

const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

export {
  player1,
  player2,
  player3,
};