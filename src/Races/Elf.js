"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 99;
        Elf.count += 1;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        return Elf.count;
    }
}
exports.default = Elf;
Elf.count = 0;
