import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _environment: SimpleFighter[] | Fighter[];

  constructor(character: Fighter, environment: SimpleFighter[] | Fighter[]) {
    super(character);
    this._character = character;
    this._environment = environment;
  }
}