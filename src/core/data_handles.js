// This holds all of the data in a lazy-ish fashion
// We'll allow stuff to load when requested, rather than all at once, cutting down on load times

function pullData(file, callback) {
    return import(`../data/${file}.json`).then( module => callback(module.default) );
}

var MovesDatabase = null;
class MoveData {
    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (MovesDatabase === null) {
            return pullData(
                "moves",
                function (data) {
                    MovesDatabase = data
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve( MovesDatabase ) )
        }
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.Name
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds.Name[this.index]
        ));
    }

    get power() {
        return this._load_db().then((ds) => (
            ds.Power[this.index]
        ));
    }

    get accuracy() {
        return this._load_db().then((ds) => (
            ds.Accuracy[this.index]
        ));
    }

    get PP() {
        return this._load_db().then((ds) => (
            ds.PP[this.index]
        ));
    }

    get type() {
        return this._load_db().then((ds) => (
            ds.Type[this.index]
        ));
    }

    get description() {
        return this._load_db().then((ds) => (
            ds.Description[this.index]
        ));
    }

}

var PokeDatabase = null;
class PokeData {
    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (PokeDatabase === null) {
            return pullData(
                "pokemans",
                function (data) {
                    PokeDatabase = data
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve( PokeDatabase ) )
        }
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.Name
        ));
    }

    get national_dex() {
        return this._load_db().then((ds) => (
            ds.NationalDex[this.index]
        ));
    }

    get hoenn_dex() {
        return this._load_db().then((ds) => (
            ds.HoennDex[this.index]
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds.Name[this.index]
        ));
    }

    get base_stats() {
        return this._load_db().then((ds) => (
            ds.BaseStats[this.index]
        ));
    }

    get evs() {
        return this._load_db().then((ds) => (
            ds.EVs[this.index]
        ));
    }

    get base_experience() {
        return this._load_db().then((ds) => (
            ds.BaseExperience[this.index]
        ));
    }

    get catch_rate() {
        return this._load_db().then((ds) => (
            PokeDatabase.CatchRate[this.index]
        ));
    }

    get type() {
        return this._load_db().then((ds) => (
            ds.Type[this.index]
        ));
    }

    get ability() {
        return this._load_db().then((ds) => (
            ds.Ability[this.index]
        ));
    }

    get gender() {
        return this._load_db().then((ds) => (
            ds.Gender[this.index]
        ));
    }

    get experience_group() {
        return this._load_db().then((ds) => (
            ds.ExperienceGroup[this.index]
        ));
    }

    get egg_group() {
        return this._load_db().then((ds) => (
            ds.EggGroup[this.index]
        ));
    }

    get held_item() {
        return this._load_db().then((ds) => (
            ds.HeldItem[this.index]
        ));
    }

}

var ItemDatabase = null;
class ItemData {
    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (ItemDatabase === null) {
            return pullData(
                "items",
                function (data) {
                    ItemDatabase = data
                }
            );
        } else {
            return {then: (callback) => (callback(ItemDatabase))}
        }
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.map((r) => r[0])
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds[this.index][0]
        ));
    }

    get description() {
        return this._load_db().then((ds) => (
            ds[this.index][1]
        ));
    }

}

var NatureDatabase = null;
class NatureData {
    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (NatureDatabase === null) {
            return pullData(
                "natures",
                function (data) {
                    NatureDatabase = data
                }
            );
        } else {
            return {then: (callback) => (callback(NatureDatabase))}
        }
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.map((r) => r[0])
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds[this.index].Name
        ));
    }

    get modifiers() {
        return this._load_db().then((ds) => (
            ds[this.index].Modifiers
        ));
    }

}

var AbilitiesDatabase = null;
class AbilityData {
    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (AbilitiesDatabase === null) {
            return pullData(
                "abilities",
                function (data) {
                    AbilitiesDatabase = data
                }
            );
        } else {
            return {then: (callback) => (callback(AbilitiesDatabase))}
        }
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.map((r) => r.ability)
        ));
    }

    get ability() {
        return this._load_db().then((ds) => (
            ds[this.index].ability
        ));

    }

    get description() {
        return this._load_db().then((ds) => (
            ds[this.index].description
        ));
    }

}

var BallsDatabase = null;
class BallData {

    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (BallsDatabase === null) {
            return pullData(
                "balls",
                function (data) {
                    BallsDatabase = data
                }
            );
        } else {
            return {then: (callback) => (callback(BallsDatabase))}
        }
    }

    get list() {
        return this._load_db().then((ds) => (
            ds
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds[this.index]
        ));
    }

}

var RibbonsDatabase = null;
class RibbonData {
    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (RibbonsDatabase === null) {
            return pullData(
                "ribbons",
                function (data) {
                    RibbonsDatabase = data
                }
            );
        } else {
            return {then: (callback) => (callback(RibbonsDatabase))}
        }
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.Names
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds.Names[this.index]
        ));
    }

}

var TypesDataset = null;
class TypeData {
    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (TypesDataset === null) {
            return pullData(
                "types",
                function (data) {
                    TypesDataset = data
                }
            );
        } else {
            return {then: (callback) => (callback(TypesDataset))}
        }
    }

    get list() {
        return this._load_db().then((ds) => (
            ds
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds[this.index]
        ));
    }

}

var GamesDataset = null;
class GameData {
    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (GamesDataset === null) {
            return pullData(
                "games",
                function (data) {
                    GamesDataset = data
                }
            );
        } else {
            return {then: (callback) => (callback(GamesDataset))}
        }
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.Specs
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds.Name[this.index]
        ));
    }

    get id() {
        return this._load_db().then((ds) => (
            ds.ID[this.index]
        ));
    }

    get region() {
        return this._load_db().then((ds) => (
            ds.Region[this.index]
        ));
    }

    get game() {
        return this._load_db().then((ds) => (
            ds.Game[this.index]
        ));
    }

    get codes() {
        return this._load_db().then((ds) => (
            ds.Codes[this.index]
        ));
    }

    get addresses() {
        return this._load_db().then((ds) => (
            ds.Addresses[this.index]
        ));
    }

    get ribbon_address() {
        return this.addresses[0];
    }

    get box_address() {
        return this.addresses[1];
    }

}

var DevicesDataset = null;
class DeviceData {
    constructor(index) {
        this.index = index;
    }
    
    _load_db() {
        if (DevicesDataset === null) {
            let prom = pullData(
                "devices",
                function (data) {
                    DevicesDataset = data;
                    return data;
                }
            );
            return prom;
        } else {
            return new Promise((resolve, reject) => resolve( DevicesDataset ) )
        }
    }

    get list() {
        let prom = this._load_db().then( ds => ds.map((d) => d.Name) );
        return prom;
    }

    get name() {
        return this._load_db().then((ds) => (
            ds[this.index].Name
        ));
    }

}

export {
    MoveData,
    PokeData,
    ItemData,
    NatureData,
    AbilityData,
    BallData,
    RibbonData,
    TypeData,
    GameData,
    DeviceData
}