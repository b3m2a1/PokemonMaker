
// Defines the Game data needed to compile properly
class GameData {

}

// Defines a Trainer and all the data that goes along with that
class Trainer {

}

// Defines the stats
class Stats {

}

// Defines the moves and whatnot we'll be working with
class MoveSet {

}

// Defines the ribbons attached to our object
class RibbonSet {

}

class Pokemon {
    constructor(
        game,
        trainer,
        stats,
        moves,
        ribbons
    ) {
        this._game = game;
        this._trainer = trainer;
        this._stats = stats;
        this._moves = moves;
        this._ribbons = ribbons;
    }

    get game() {
        return this._game;
    }
    get trainer() {
        return this._trainer;
    }
    get stats() {
        return this._stats;
    }
    get moves() {
        return this._moves;
    }
    get ribbons() {
        return this._ribbons;
    }



}