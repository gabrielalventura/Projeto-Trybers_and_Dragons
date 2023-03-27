import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    this._lifePoints = 999;
  }
}
// uma vez que agora _lifePoints é protected na class Monster, é possivel para uma classe herdeira ler e até escrever no atributo, mas não é permitido que classes/situações de fora da classe Monster e suas herdeiras faça o mesmo.