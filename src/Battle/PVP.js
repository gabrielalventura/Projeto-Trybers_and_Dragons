"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(character1, character2) {
        super(character1);
        this._character1 = character1;
        this._character2 = character2;
    }
    fight() {
        while (this._character1.lifePoints > 0 && this._character2.lifePoints > 0) {
            this._character2.attack(this._character1);
            this._character1.attack(this._character2);
        }
        return this._character1.lifePoints === -1 ? -1 : 1;
    }
}
exports.default = PVP;
