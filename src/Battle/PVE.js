"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(character, environment) {
        super(character);
        this._character = character;
        this._environment = environment;
    }
    fight() {
        this._environment.forEach((e) => {
            while (this._character.lifePoints > 0 && e.lifePoints > 0)
                ;
            this._character.attack(e);
            e.attack(this._character);
        });
        return this._character.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVE;
