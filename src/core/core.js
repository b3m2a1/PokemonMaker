
import {GameData, DeviceData} from './data_handles';

//region Structs

// Defines a Trainer and all the data that goes along with that
class Trainer {

}

// Defines the EVs/IVs/Level/Experience
class Stats {
    constructor() {
        this.level = 1;
        this.exp = 0;
        this.IVs = {
            "hp": 0,
            "attack": 0,
            "defense": 0,
            "special_attack": 0,
            "special_defense": 0
        };
        this.EVs = {
            "hp": 0,
            "attack": 0,
            "defense": 0,
            "special_attack": 0,
            "special_defense": 0
        }
    }
}

// Defines the moves and whatnot we'll be working with
class MoveSet {
    constructor() {
        this.moves = [
            {
                "move": null,
                "pp": null,
                "pp_ups": null
            },
            {
                "move": null,
                "pp": null,
                "pp_ups": null
            },
            {
                "move": null,
                "pp": null,
                "pp_ups": null
            },
            {
                "move": null,
                "pp": null,
                "pp_ups": null
            }
        ]
    }

    from_pokeman(p) {

    }

}

// Defines the ribbons attached to our object
class RibbonSet {
    constructor( ribbons ) {
        this.ribbons = ribbons;
    }
}

//endregion

class Pokemon {
    constructor(
        trainer,
        stats,
        moves,
        ribbons
    ) {
        this._trainer = trainer;
        this._stats = stats;
        this._moves = moves;
        this._ribbons = ribbons;
    }

    //region Boilerplate
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
    constructor(
        pokemon = null,
        game = null,
        device = null
    ) {
        if ( pokemon === null ) {
            this.pokemon = new Pokemon(
                new Trainer(),
                new Stats(),
                new MoveSet(),
                new RibbonSet([])
            );
        }
        if ( game === null ) {
            this.game = new GameData(0);
        }
        if ( device === null ) {
            this.device = new DeviceData(3);
        }
        this.CodePanel = null;
        this.OptionsPanel = null;
        this.PokemonPanel = null;
        this.TrainerPanel = null;
        this.StatsPanel = null;
        this.MovesPanel = null;
        this.RibbonsPanel = null
    }

    bindCodePanel(component) {
        this.CodePanel = component;
        return this;
    }
    bindOptionsPanel(component) {
        this.OptionsPanel = component;
        return this;
    }
    bindPokemonPanel(component) {
        this.PokemonPanel = component;
        return this;
    }
    bindTrainerPanel(component) {
        this.TrainerPanel = component;
        return this;
    }
    bindStatsPanel(component) {
        this.StatsPanel = component;
        return this;
    }
    bindMovesPanel(component) {
        this.MovesPanel = component;
        return this;
    }
    bindRibbonsPanel(component) {
        this.RibbonsPanel = component;
        return this;
    }

    generate() {
        // take the react components, pull their data, feed it into the back-end code
    }
}

export default PokemonForm;