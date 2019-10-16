

//region Structs
// Defines the Game data needed to compile properly
class Offsets {
    constructor(
        box,
        trainer,
        ribbon,
        etc
    ) {
        this.box = box;
        this.trainer = trainer;
        this.ribbon = ribbon;
    }
}
class GameData {
    constructor(
        gameID,
        offsetSet,
        mcode,
        antiDMA
    ) {
        this.id = gameID;
        this.offsets = offsetSet;
        this.dma = antiDMA;
        this.mcode = mcode;
    }

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

//endregion

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

    //region Boilerplate
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

    set game(g) {
        this._game = g;
        // Potentially call some kind of update call for the React object we want bound in...
    }
    set trainer(t) {
        this._trainer = t;
        // Potentially call some kind of update call for the React object we want bound in...
    }
    set stats(s) {
        this._stats = s;
    }
    set moves(m) {
        this._moves = m;
    }
    set ribbons(r) {
        this._ribbons = r;
    }
    //endregion

    write(form) {

    }

}

class PokemonForm {
    constructor() {
        this.CodePanel = null;
        this.CodeInfoPanel = null;
        this.PokemonPanel = null;
        this.TrainerPanel = null;
        this.StatsPanel = null;
        this.MovesPanel = null;
        this.RibbonsPanel = null
    }

    bindCodePanel(component) {
        this.CodePanel = component;
        component.form = this;
    }
    bindCodeInfoPanel(component) {
        this.CodeInfoPanel = component;
        component.form = this;
    }
    bindPokemonPanel(component) {
        this.PokemonPanel = component;
        component.form = this;
    }
    bindTrainerPanel(component) {
        this.TrainerPanel = component;
        component.form = this;
    }
    bindStatsPanel(component) {
        this.StatsPanel = component;
        component.form = this;
    }
    bindMovesPanel(component) {
        this.MovesPanel = component;
        component.form = this;
    }
    bindRibbonsPanel(component) {
        this.RibbonsPanel = component;
        component.form = this;
    }

    generate() {
        // take the react components, pull their data, feed it into the back-end code
    }
}

export default PokemonForm;