import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _environment: Fighter[] | SimpleFighter[];

  constructor(character: Fighter, environment: Fighter[] | SimpleFighter[]) {
    super(character);
    this._character = character;
    this._environment = environment;
  }

  fight(): number {
    this._environment.forEach((e) => {
      // while (this._character.lifePoints > 0 && e.lifePoints > 0);
      e.attack(this._character);
      this._character.attack(e);
    });
    return this._character.lifePoints === -1 ? -1 : 1;
  }
}
