"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 60;
        Halfling.count += 1;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        return Halfling.count;
    }
}
exports.default = Halfling;
Halfling.count = 0;
