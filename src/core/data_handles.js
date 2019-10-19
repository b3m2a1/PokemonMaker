// This holds all of the data in a lazy-ish fashion
// We'll allow stuff to load when requested, rather than all at once, cutting down on load times

function pullData(file, callback, error_handler)  {
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                callback(JSON.parse(request.responseText));
            } else {
                if (error_handler) { error_handler(request); }
            }
        }
    };
    // not sure how best to encode that this should be called from the main file?
    request.open("GET", "data/"+ file + ".json", true);
    request.send();
}

var MovesDatabase = null;
class MoveData {
    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (MovesDatabase === null) {
            pullData("moves", (data) => (MovesDatabase = data), null);
        }
    }

    get list() {
        this._load_db();
        return MovesDatabase.Name;
    }

    get name() {
        this._load_db();
        return MovesDatabase.Name[this.index];
    }
    get power() {
        this._load_db();
        return MovesDatabase.Power[this.index];
    }
    get accuracy() {
        this._load_db();
        return MovesDatabase.Accuracy[this.index];
    }
    get PP() {
        this._load_db();
        return MovesDatabase.PP[this.index];
    }
    get type() {
        this._load_db();
        return MovesDatabase.Type[this.index];
    }
    get description() {
        this._load_db();
        return MovesDatabase.Description[this.index];
    }

}

var PokeDatabase = null;
class PokeData {
    constructor(index) {
        this.index = index;
    }

    _load_db() {
        if (PokeDatabase === null) {
            pullData("pokemans", (data) => (PokeDatabase = data), null);
        }
    }

    get list() {
        this._load_db();
        return PokeDatabase.Name;
    }

    get national_dex() {
        this._load_db();
        return PokeDatabase.NationalDex[this.index];
    }
    get hoenn_dex() {
        this._load_db();
        return PokeDatabase.HoennDex[this.index];
    }
    get name() {
        this._load_db();
        return PokeDatabase.Name[this.index];
    }
    get base_stats() {
        this._load_db();
        return PokeDatabase.BaseStats[this.index];
    }
    get evs() {
        this._load_db();
        return PokeDatabase.EVs[this.index];
    }
    get base_experience() {
        this._load_db();
        return PokeDatabase.BaseExperience[this.index];
    }
    get catch_rate() {
        this._load_db();
        return PokeDatabase.CatchRate[this.index];
    }
    get type() {
        this._load_db();
        return PokeDatabase.Type[this.index];
    }
    get ability() {
        this._load_db();
        return PokeDatabase.Ability[this.index];
    }
    get gender() {
        this._load_db();
        return PokeDatabase.Gender[this.index];
    }
    get experience_group() {
        this._load_db();
        return PokeDatabase.ExperienceGroup[this.index];
    }
    get egg_group() {
        this._load_db();
        return PokeDatabase.EggGroup[this.index];
    }
    get held_item() {
        this._load_db();
        return PokeDatabase.HeldItem[this.index];
    }

}

var ItemDatabase = null;
class ItemData {
    constructor(index) {
        this.index = index;
    }

    get list() {
        this._load_db();
        return ItemDatabase.map( (r) => r[0] );
    }

    _load_db() {
        if (ItemDatabase === null) {
            pullData("items", (data) => (ItemDatabase = data), null);
        }
    }

    get name() {
        this._load_db();
        return ItemDatabase[this.index][0];
    }
    get description() {
        this._load_db();
        return ItemDatabase[this.index][1];
    }

}

var NatureDatabase = null;
class NatureData {
    constructor(index) {
        this.index = index;
    }

    get list() {
        this._load_db();
        return NatureDatabase.map( (r) => r[0] );
    }

    _load_db() {
        if (NatureDatabase === null) {
            pullData("items", (data) => (NatureDatabase = data), null);
        }
    }

    get name() {
        this._load_db();
        return NatureDatabase[this.index].Name;
    }
    get modifiers() {
        this._load_db();
        return NatureDatabase[this.index].Modifiers;
    }

}

var AbilitiesDatabase = null;
class AbilityData {
    constructor(index) {
        this.index = index;
    }

    get list() {
        this._load_db();
        return AbilitiesDatabase.map( (r) => r.ability );
    }

    _load_db() {
        if (AbilitiesDatabase === null) {
            pullData("abilities", (data) => (AbilitiesDatabase = data), null);
        }
    }

    get ability() {
        this._load_db();
        return AbilitiesDatabase[this.index].ability;
    }
    get description() {
        this._load_db();
        return AbilitiesDatabase[this.index].description;
    }

}

var BallsDatabase = null;
class BallData {
    constructor(index) {
        this.index = index;
    }

    get list() {
        this._load_db();
        return BallsDatabase;
    }

    _load_db() {
        if (BallsDatabase === null) {
            pullData("balls", (data) => (BallsDatabase = data), null);
        }
    }

    get name() {
        this._load_db();
        return BallsDatabase[this.index];
    }

}

var RibbonsDatabase = null;
class RibbonData {
    constructor(index) {
        this.index = index;
    }

    get list() {
        this._load_db();
        return RibbonsDatabase.Names;
    }

    _load_db() {
        if (RibbonsDatabase === null) {
            pullData("ribbons", (data) => (RibbonsDatabase = data), null);
        }
    }

    get name() {
        this._load_db();
        return RibbonsDatabase.Names[this.index];
    }

}

var TypesDataset = null;
class TypeData {
    constructor(index) {
        this.index = index;
    }

    get list() {
        this._load_db();
        return TypesDataset;
    }

    _load_db() {
        if (TypesDataset === null) {
            pullData("types", (data) => (TypesDataset = data), null);
        }
    }

    get name() {
        this._load_db();
        return TypesDataset[this.index];
    }

}

var GamesDataset = null;
class GameData {
    constructor(index) {
        this.index = index;
    }

    get list() {
        this._load_db();
        return GamesDataset.Specs;
    }

    _load_db() {
        if (GamesDataset === null) {
            pullData("games", (data) => (GamesDataset = data), null);
        }
    }

    get name() {
        this._load_db();
        return GamesDataset.Name[this.index];
    }

    get id() {
        this._load_db();
        return GamesDataset.ID[this.index];
    }

    get region() {
        this._load_db();
        return GamesDataset.Region[this.index];
    }

    get game() {
        this._load_db();
        return GamesDataset.Game[this.index];
    }

    get codes() {
        this._load_db();
        return GamesDataset.Codes[this.index];
    }

    get addresses() {
        this._load_db();
        return GamesDataset.Addresses[this.index];
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

    get list() {
        this._load_db();
        return DevicesDataset.map( (d) => d.Name );
    }

    _load_db() {
        if (DevicesDataset === null) {
            pullData("devices", (data) => (DevicesDataset = data), null);
        }
    }

    get name() {
        this._load_db();
        return DevicesDataset[this.index].Name;
    }

}