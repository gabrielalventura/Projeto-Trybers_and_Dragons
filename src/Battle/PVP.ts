import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _character1: Fighter;
  private _character2: Fighter;

  constructor(character1: Fighter, character2: Fighter) {
    super(character1);
    this._character1 = character1;
    this._character2 = character2;
  }

  fight(): number {
    while (this._character1.lifePoints > 0 && this._character2.lifePoints > 0) {
      this._character2.attack(this._character1);
      this._character1.attack(this._character2);
    }
    return this._character1.lifePoints === -1 ? -1 : 1;
  }

  // Inicialmente pensei na lógica para sobrescrever fight utilizando operador ||, no entanto utilizando operador || não passa pois para haver vitória uma dos characteres deve necessariamente ter lifePoints > 0 então a condição só se repetira enquanto os dois forem maior que zero, obrigatoriamente tendo um chegado a zero, o laço de repetição se encerra retornando o vencedor;
}