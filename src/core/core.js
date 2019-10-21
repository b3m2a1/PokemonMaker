
import {
    GenderData,
    MoveData, RibbonData, PokeData,
    NatureData, AbilityData, TypeData,
    LocationData, BallData, ItemData
} from './data_handles';


// Two utility classes for hooking up with the actual interface -- we'll be using a callback type system to do this
class UpdateHook {
    constructor({
                    method = null,
                    defaults = null
                } = {}
    ) {
        this.method = method;
        this.defaults = (defaults === null) ? [] : [...defaults];
    }
    bind(...args) {
        this.defaults = [...this.defaults, ...args];
        return this;
    }
    apply(...args) {
        if (this.method !== null) {
            this.method(...args);
        }
    }
}

class DataHandler {
    constructor(
        index,
        data_type,
        {
            update_hook = null
        } = {}
    ) {
        const hook = (update_hook === null) ? new UpdateHook({defaults : [this]}) : update_hook;
        this.props = null;
        this._data_handler = data_type;
        this._data = new data_type(index);
        this.update_hook = hook;
        this._load_base_data = this._load_base_data.bind(this);
        this.load_base_data();
    }

    //region Load Data
    load_base_data() {
        return this._data.object.then(this._load_base_data);
    }
    _load_base_data(
        data
    ) {
        this.props = data;
    }
    //endregion

    get index() {
        return this._data.index;
    }
    get data() {
        return this._data;
    }
    set index(i) {
        this._data.index = i;
        if (this._data.ds === null) {
            this._data.object.then(d => [
                this._load_base_data(d),
                this.update_hook.apply(i, 'index', this)
            ])
        } else {
            this._load_base_data(this._data.l_object);
            this.update_hook.apply(i, 'index', this);
        }
    }

}

//region Structs
// Defines a common "Identifier" structure with a name, gender, ID, etc.
class Identifier {
    constructor(
        {
            name = null,
            gender = null,
            id = null,
            update_hook = null
        } = {}
    ) {
        this._name = name;
        this._gender = (gender === null) ? null: new GenderData(gender);
        this._id = id;
        this.update_hook = (update_hook === null)? new UpdateHook() : update_hook;
    }
    setUpdateHook(hook) { this.update_hook = hook; }
    get name() {
        return this._name;
    }
    get gender() {
        return this._gender;
    }
    get id() {
        return this._id;
    }
    set name(n) {
        this._name = n;
        this.update_hook.apply(n, 'name', this);
    }
    set gender(g) {
        this._gender = g;
        this.update_hook.apply(g, 'gender', this);
    }
    set id(i) {
        this._id = i;
        this.update_hook.apply(i, 'id', this);
    }
}

// Defines a Trainer and all the data that goes along with that
class Trainer {
    constructor(
        {
            identifier = null,
            secret_id = null,
            update_hook = null
        } = {}
    ) {
        const hook = (update_hook === null) ? new UpdateHook({defaults : [this]}) : update_hook;
        this.update_hook = hook;
        this._identifier = new Identifier({
            name: "b3m2a1",
            gender: "F",
            id: Math.floor((10**8) * Math.random()),
            update_hook: hook
        });
        this.secret_id = secret_id;
    }
    setUpdateHook(hook) { this.update_hook = hook; }
}

// Defines the EVs/IVs/Level/Experience
class StatsField { // to allow setter callback on subfields
    constructor(
        {
            hp = 0,
            attack = 0,
            defense = 0,
            special_attack = 0,
            special_defense = 0,
            update_hook = null
        } = {}
    ) {
        this._hp = hp;
        this._attack = attack;
        this._defense = defense;
        this._sp_attack = special_attack;
        this._sp_defense = special_defense;
        this.update_hook = update_hook
    }


}
class Stats {
    constructor(
        {
            level = 1,
            exp = 0,
            ivs = {},
            evs = {},
            update_hook = null
        }
    ) {
        const hook = (update_hook === null) ? new UpdateHook({defaults : [this]}) : update_hook;
        this._level = 1;
        this._exp = 0;

        ivs["update_hook"] = hook;
        this.ivs = new StatsField(ivs);
        evs["update_hook"] = hook;
        this.evs = new StatsField(evs);

        this.update_hook = hook;
    }
    setUpdateHook(hook) {
        this.update_hook = hook;
        this.ivs.update_hook = hook;
        this.evs.update_hook = hook;
    }

    get level() {
        return this._level;
    }
    get exp() {
        return this._exp;
    }
    set level(l) {
        this._level = l;
        this.update_hook.apply(l, 'level', this);
    }
    set exp(e) {
        this._exp = e;
        this.update_hook.apply(e, 'exp', this);
    }


    compute_stat(which, level, base_stats, evs, ivs, modifiers) {
        const base = Math.floor( (2*base_stats[which] + ivs[which] + Math.floor(evs[which]/4))  * (level / 100) );
        return (which === "hp") ? (
            base + level + 10
        ) : (
            Math.floor(
                ( base + 5 ) * (modifiers[0] === which) ? 1.1 : (modifiers[1] === which) ? .9 : 1
            )
        );
    }
    hp(pokeman) {
        return this.compute_stat(
            'hp', this.level, pokeman.base_stats, this.evs, this.ivs, pokeman.nature.modifiers
        );
    }
    attack(pokeman) {
        return this.compute_stat(
            'attack', this.level, pokeman.base_stats, this.evs, this.ivs, pokeman.nature.modifiers
        );
    }
    defense(pokeman) {
        return this.compute_stat(
            'defense', this.level, pokeman.base_stats, this.evs, this.ivs, pokeman.nature.modifiers
        );
    }
    special_attack(pokeman) {
        return this.compute_stat(
            'special_attack', this.level, pokeman.base_stats, this.evs, this.ivs, pokeman.nature.modifiers
        );
    }
    special_defense(pokeman) {
        return this.compute_stat(
            'special_defense', this.level, pokeman.base_stats, this.evs, this.ivs, pokeman.nature.modifiers
        );
    }
    speed(pokeman) {
        return this.compute_stat(
            'speed', this.level, pokeman.base_stats, this.evs, this.ivs, pokeman.nature.modifiers
        );
    }

}

// Defines the moves and whatnot we'll be working with
class Move extends DataHandler {
    constructor(
        index,
        {
            pp = 'full',
            pp_ups = 0,
            update_hook = null
        } = {}
    ) {
        super(index, MoveData, {update_hook : update_hook});
        this._pp = pp;
        this._pp_ups = pp_ups;
    }

    get name() {
        return (this.props === null) ? "" : this.props.name;
    }
    get power() {
        return (this.props === null) ? 0 : this.props.power;
    }
    get max_pp() {
        let base_pp = this.props.pp;
        let frac = Math.floor(base_pp/5);
        return base_pp + frac * this.pp_ups;
    }
    get pp() {
        // this will really never be anything _other_ than 'full'
        if (this._pp === "full") {
            return this.max_pp;
        } else {
            return this._pp;
        }
    }
    set pp(p) {
        this._pp = p;
        this.update_hook.apply(p, 'pp', this);
    }
    get pp_ups() {
        return this._pp_ups;
    }
    set pp_ups(p) {
        this._pp_ups = p;
        this.update_hook.apply(p, 'pp_ups', this);
    }
    get accuracy() {
        return (this.props === null) ? 0 : this.props.accuracy;
    }
    get description() {
        return (this.props === null) ? "" : this.props.description;
    }
}
class Moves {
    constructor(
        {
            moves = null,
            update_hook = null
        } = {}
    ) {
        const hook = (update_hook === null) ? new UpdateHook({defaults : [this]}) : update_hook;
        let moos = (moves === null) ? [1, 0, 0, 0] : moves;
        for (let i = 0; i < (4 - moos.length); i++) {
            moos.push(0);
        }
        this.update_hook = hook;
        this.moves = moos.map(
            function(m) {
                if (m instanceof Move) {
                    m.update_hook = hook;
                    return m;
                } else {
                    return new Move(m, {update_hook: hook});
                }
            }
        );
    }
    setUpdateHook(hook) { // generally won't need this, but it'll just keep state in sync if I do
        this.update_hook = hook;
        for (let m of this.moves) {
            m.update_hook = hook;
        }
    }
}

// These are a bunch of simple types that basically represent data from one of the loaded datasets + and update_hook so
// that they can sync up with the actual interface
class Type extends DataHandler {
    constructor(
        index,
        {
            update_hook = null
        } = {}
    ) {
        super(index, TypeData, {update_hook : update_hook});
    }

    get name() {
        return (this.props === null) ? "" : this.props.name;
    }
    get key() {
        return (this.props === null) ? 0 : this.props.key;
    }

}
class Nature extends DataHandler {
    constructor(
        index,
        {
            update_hook = null
        } = {}
    ) {
        super(index, NatureData, {update_hook : update_hook});
    }

    get name() {
        return (this.props === null) ? "" : this.props.name;
    }
    get modifiers() {
        return (this.props === null) ? [null, null] : this.props.modifiers;
    }
    get modifier_display_names() {
        if (this.props === null) {
            return [ "", ""];
        }

        let mods = this.modifiers;
        let base = [null, null];
        for (let i = 0; i<2; i++) {
            switch (mods[i]) {
                case "hp":
                    base[i] = "Hit Points";
                    break;
                case "attack":
                    base[i] = "Attack";
                    break;
                case "defense":
                    base[i] = "Defense";
                    break;
                case "speed":
                    base[i] = "Speed";
                    break;
                case "special_attack":
                    base[i] = "Special Attack";
                    break;
                case "special_defense":
                    base[i] = "Special Defense";
                    break;
                default:
                    base[i] = "None";
                    break;
            }
        }
        return base;
    }
}
class Ability extends DataHandler {
    constructor(
        index,
        {
            update_hook = null
        } = {}
    ) {
        super(index, AbilityData, {update_hook : update_hook});
    }

    get name() {
        return (this.props === null) ? "" : this.props.name;
    }
    get effect() {
        return (this.props === null) ? "" : this.props.effect;
    }

}
class Location extends DataHandler {
    constructor(
        index,
        {
            update_hook = null
        } = {}
    ) {
        super(index, LocationData, {update_hook : update_hook});
    }

    get name() {
        return (this.props === null) ? "" : this.props.name;
    }

}
class Ball extends DataHandler {
    constructor(
        index,
        {
            update_hook = null
        } = {}
    ) {
        super(index, BallData, {update_hook : update_hook});
    }

    get name() {
        return (this.props === null) ? "" : this.props.name;
    }

}
class Item extends DataHandler {
    constructor(
        index,
        {
            update_hook = null
        } = {}
    ) {
        super(index, ItemData, {update_hook : update_hook});
    }

    get name() {
        return (this.props === null) ? "" : this.props.name;
    }
    get effect() {
        return (this.props === null) ? "" : this.props.effect;
    }

}
class Ribbon extends DataHandler {
    constructor(
        index,
        {
            update_hook = null
        } = {}
    ) {
        super(index, RibbonData, {update_hook : update_hook});
    }

    get name() {
        return (this.props === null) ? "" : this.props.name;
    }

}

// Defines the ribbons attached to our object
class RibbonSet {
    constructor( ribbons ,
                 {
                     update_hook = null
        } = {}
                 ) {
        this.ribbons = ribbons;
        this.update_hook = update_hook;
    }
}

// Defines the box data attached to our object
class BoxData {
    constructor({
                    box = 1,
                    slot = 1,
                    marks = null,
                    update_hook = null
                } = {}) {
        this.box = box;
        this.slot = slot;
        this.marks = (marks instanceof Object) ? marks : {
            "Circle": false,
            "Square": false,
            "Triangle": false,
            "Heart": false
        };
        this.update_hook = (update_hook instanceof UpdateHook) ? update_hook : new UpdateHook({defaults : [this]});
    }
}

//endregion
class Pokemon {
    constructor(
        // this allows us to support a kwargs-like structure which is what I usually want here
        index,
        {
            identifier = null,
            trainer = null,
            nature = 24,
            ability = 0,
            stats = null,
            moves = null,
            ribbons = null,
            is_egg = false,
            pokerus_flag = 0,
            shiny_flag = false,
            level_met = 0,
            held_item = 0,
            meet_location = 0,
            ball_used = 4 // pokeball
        } = {}
    ) {
        // note that 'index' doesn't necessarily correspond to species because things can have multiple forms which
        // increases the number of entries in the database but not the species numbers
        this._data = new PokeData(index);
        this.base_props = null;
        this.update_hooks = {
            // where we'll stick all the hooks to call when updating the trainer, or the name, or ID, or any of it
            'base_data': new UpdateHook({default: [this]}),
            'trainer': new UpdateHook({default: [this]}),
            'stats': new UpdateHook({default: [this]}),
            'moves': new UpdateHook({default: [this]}),
            'ribbons': new UpdateHook({default: [this]})
        };

        this._types = [
            new Type(0, {update_hook : this.update_hooks['base_data']}),
            new Type(0, {update_hook : this.update_hooks['base_data']})
        ];
        this._ability = new Ability(ability, {update_hook : this.update_hooks['base_data']});
        this._nature = new Nature(nature, {update_hook : this.update_hooks['base_data']});
        this._item = new Item(held_item, {update_hook : this.update_hooks['base_data']});
        this._ball = new Ball(ball_used, {update_hook : this.update_hooks['base_data']});
        this._location = new Location(meet_location, {update_hook : this.update_hooks['base_data']});

        this._level_met = level_met;
        this._is_egg = is_egg;
        this._pokerus_flag = pokerus_flag;
        this._shiny = shiny_flag;

        if (identifier instanceof Identifier) {
            identifier.setUpdateHook(this.update_hooks['base_data']);
            this._identifier = identifier;
        } else if (identifier instanceof Object) {
            identifier['update_hook'] = this.update_hooks['base_data'];
            this._identifier = new Identifier(identifier);
        } else {
            this._identifier = new Identifier({update_hook: this.update_hooks['base_data']} );
        }
        this._trainer = (trainer === null) ? (new Trainer({update_hook : this.update_hooks['trainer']})) : trainer;
        this._stats = (stats === null) ? (new Stats({update_hook : this.update_hooks['stats']})) : stats;
        this._moves = (moves === null) ? (new Moves({update_hook : this.update_hooks['moves']})) : moves;
        this._ribbons = (ribbons === null) ? (new RibbonSet([], {update_hook : this.update_hooks['ribbons']})) : ribbons;

        this.loaded = false;
        this._load_base_data = this._load_base_data.bind(this);
        this.load_base_data();
        // we're gonna assume from here on out that all data has been loaded even though this is a terrible assumption
        // that we'll have to relax at some point in the future
    }

    //region Load Data
    // I low-key regret making this async, now, but it's good practice I guess
    load_base_data() {
        if (this._data.ds !== null) {
            this._load_base_data(this._data.l_object);
        } else {
            this._data.object.then(this._load_base_data);
        }
    }

    _load_base_data(data) {

        this.base_props = data;

        if (this._identifier.name === null) {
            this._identifier.name = data.name.toUpperCase();
        }

        const gg = data.gender;
        if (gg === -1) {
            this._identifier.gender = new GenderData("N");
        } else if (this._identifier.gender === null) {
            const r = Math.random();
            this._identifier.gender = new GenderData( (100*r < gg) ? "M": "F" );
        }

        this._types[0].index = this.base_props.type[0];
        this._types[1].index = this.base_props.type[1];
        this._ability.index = this.base_props.ability[0];

        this.loaded = true;
    }
    //endregion

    //region Getters and Setters

    // Get the primary fields
    //region primary getters
    get data() {
        return this._data;
    }
    get index() {
        return this._data.index;
    }
    get identifier() {
        return this._identifier;
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
    get nature() {
        return this._nature;
    }
    get ability() {
        return this._ability;
    }
    get ball() {
        return this._ball;
    }
    get item() {
        return this._item;
    }
    get location() {
        return this._location;
    }
    get level_met() {
        return this._level_met;
    }
    //endregion

    // Get the subfields
    //region base_props fields
    get national_dex() {
        return this.base_props.national_dex;
    }
    get hoenn_dex() {
        return this.base_props.hoenn_dex;
    }
    get species() {
        return this.base_props.name;
    }
    get base_stats() {
        return this.base_props.base_stats;
    }
    get ev_yields() {
        return this.base_props.evs;
    }
    get exp_yield() {
        return this.base_props.base_experience;
    }
    get catch_rate() {
        return this.base_props.catch_rate;
    }
    get gender_group() {
        return this.base_props.gender;
    }
    get experience_group() {
        return this.base_props.experience_group;
    }
    get egg_group() {
        return this.base_props.egg_group;
    }
    get possible_held_item() {
        return this.base_props.held_item;
    }
    //endregion

    //region ID fields
    get name() {
        return this._identifier.name;
    }
    get gender() {
        return this._identifier.gender;
    }
    get id() {
        return this._identifier.id;
    }
    //endregion

    //region type fields

    get type_names() {
        return [
            this._types[0].name,
            this._types[1].name,
        ];
    }

    //endregion

    //region Stats fields
    get level() {
        return this._stats.level;
    }
    get exp() {
        return this._stats.exp;
    }
    get evs() {
        return this.stats.evs;
    }
    get ivs() {
        return this.stats.ivs;
    }
    get hp() {
        return this._stats.hp(this);
    }
    get attack() {
        return this._stats.attack(this);
    }
    get defense() {
        return this._stats.defense(this);
    }
    get special_attack() {
        return this._stats.special_attack(this);
    }
    get special_defense() {
        return this._stats.special_defense(this);
    }
    get speed() {
        return this._stats.speed(this);
    }
    //endregion

    // Set the primary fields
    //region primary setters
    set trainer(t) {
        this._trainer = t;
        // Potentially call some kind of update call for the React object we want bound in...
        this.update_hooks['trainer'].apply(t, 'trainer', this);
    }
    set stats(s) {
        this._stats = s;
        this.update_hooks['stats'].apply(s, 'stats', this);
    }
    set moves(m) {
        this._moves = m;
        this.update_hooks['moves'].apply(m, 'moves', this);
    }
    set ribbons(r) {
        this._ribbons = r;
        this.update_hooks['ribbons'].apply(r, 'ribbons', this);
    }

    set index(n) {
        this._data.index = n;
        this._identifier.name = null;
        this._identifier.gender = null;
        this.load_base_data();
        this.update_hooks['base_data'].apply(n, 'index', this);
    }
    //endregion

    //region subfield setters

    set name(n) {
        this._identifier.name = n;
    }
    set gender(g) {
        this._identifier.gender = g;
    }

    set level_met(l) {
        this._level_met = l;
        this.update_hooks['base_data'].apply(l, 'level_met', this);
    }

    //endregion

    //endregion

    get next_level_exp() {
        let exp = this.exp;
        let lvl = this.level;
        const exp_grp = this.experience_group;
        const exp_grp_map = [
            "Erratic",
            "Fast",
            "Medium Fast",
            "Medium Slow",
            "Slow",
            "Fluctuating"
        ];

        let next_exp;
        switch (exp_grp_map[exp_grp]) {
            case "Erratic":
                next_exp = (
                    (lvl < 50) ? (
                        (lvl ** 3) * (100 - lvl) / 50
                    ) : (lvl < 68) ? (
                        (lvl ** 3) * (150 - lvl) / 100
                    ) : (lvl < 98) ? (
                        (lvl ** 3) * Math.floor((1911 - 10*lvl ) / 3) / 500
                    ) :
                        (lvl ** 3) * (160 - lvl) / 100
                );
                break;
            case "Fast":
                next_exp = 4/5 * (lvl ** 3);
                break;
            case "Medium Fast":
                next_exp = (lvl ** 3);
                break;
            case "Medium Slow":
                next_exp = 6/5 * (lvl ** 3) - 15 * (lvl ** 2) + 100 * lvl - 140;
                break;
            case "Slow":
                next_exp = 5/4 * (lvl ** 3);
                break;
            case "Fluctuating":
                next_exp = (
                    (lvl < 15) ? (
                        (lvl ** 3) / 50 * (Math.floor((lvl + 1) / 3) + 24)
                    ) : (lvl < 36) ? (
                        (lvl ** 3) / 50 * (lvl + 14)
                    ) : (
                        (lvl ** 3) / 50 * (Math.floor((lvl / 2)) + 32)
                    )
                );
                break;
            default:
                next_exp = 0;
                break;
        }

        return Math.floor(next_exp - exp);
    }

    write(form) {

    }

}

export {
    Pokemon,
    BoxData
};