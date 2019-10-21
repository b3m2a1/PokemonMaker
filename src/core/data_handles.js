// This holds all of the data in a lazy-ish fashion
// We'll allow stuff to load when requested, rather than all at once, cutting down on load times

function pullData(file, callback) {
    return import(`../data/${file}.json`).then(module => callback(module.default));
}

function pullObject(ds, index, key_mapping = null) {
    return Object.keys(ds).reduce(
        (cur, key) => (
            [
                cur[(key_mapping === null) ? key : key_mapping[key]] = ds[key][index],
                cur
            ][1]
        ),
        {}
    );
}

function pullObjectList(ds, key_mapping = null) {
    let wow_how_is_there_no_range_function = [];

    let len;
    if (key_mapping === null) {
        const last_key = Object.keys(ds)[-1];
        len = ds[last_key].length;
    } else {
        const first_key = Object.keys(key_mapping)[0];
        len = ds[first_key].length;
    }
    for (let i = 0; i < len; i++) {
        wow_how_is_there_no_range_function.push(
            pullObject(ds, i, key_mapping)
        )
    }
    return wow_how_is_there_no_range_function;
}

var MovesDatabase = null;
class MoveData {
    constructor(index) {
        this.index = index;
    }

    get ds() {
        return MovesDatabase;
    }

    _load_db() {
        if (MovesDatabase === null) {
            return pullData(
                "moves",
                function (data) {
                    MovesDatabase = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(MovesDatabase))
        }
    }

    static key_name_remapping = {
        Name: "name",
        Power: "power",
        Accuracy: "accuracy",
        PP: "pp",
        Type: "type",
        Description: "description"
    };

    get l_object() {
        return pullObject(this.ds, this.index, MoveData.key_name_remapping);
    }

    get object() {
        return this._load_db().then(ds => pullObject(ds, this.index, MoveData.key_name_remapping));
    }

    get l_object_list() {
        return pullObjectList(this.ds, MoveData.key_name_remapping);
    }

    get object_list() {
        return this._load_db().then(ds => pullObjectList(ds, MoveData.key_name_remapping));
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

    get ds() {
        return PokeDatabase;
    }

    _load_db() {
        if (PokeDatabase === null) {
            return pullData(
                "pokemans",
                function (data) {
                    PokeDatabase = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(PokeDatabase))
        }
    }

    get l_list() {
        return this.ds.Name;
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.Name
        ));
    }

    static key_name_remapping = {
        NationalDex: "national_dex",
        HoennDex: "hoenn_dex",
        Name: "name",
        Form: "form",
        BaseStats: "base_stats",
        EVs: "evs",
        BaseExperience: "base_experience",
        CatchRate: "catch_rate",
        Type: "type",
        Ability: "ability",
        Gender: "gender",
        ExperienceGroup: "experience_group",
        EggGroup: "egg_group",
        HeldItem: "held_item"
    };

     get l_object() {
        return pullObject(this.ds, this.index, PokeData.key_name_remapping);
    }
    get object() {
        return this._load_db().then(ds => pullObject(ds, this.index, PokeData.key_name_remapping));
    }

    get object_list() {
        return this._load_db().then(ds => pullObjectList(ds, PokeData.key_name_remapping));
    }

    _nat_dex(ds) {
        return ds.NationalDex[this.index];
    }

    get l_national_dex() {
        return this._nat_dex(this.ds);
    }

    get national_dex() {
        return this._load_db().then(this._nat_dex);
    }

    _hoenn_dex(ds) {
        return ds.HoennDex[this.index];
    }

    get l_hoenn_dex() {
        return this._hoenn_dex(this.ds);
    }

    get hoenn_dex() {
        return this._load_db().then((ds) => (
            this._hoenn_dex(ds)
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
            ds.CatchRate[this.index]
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

    get ds() {
        return ItemDatabase;
    }

    _load_db() {
        if (ItemDatabase === null) {
            return pullData(
                "items",
                function (data) {
                    ItemDatabase = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(PokeDatabase))
        }
    }

    static key_name_remapping = {
        Name: "name",
        Description: "effect"
    };

     get l_object() {
        return pullObject(this.ds, this.index, ItemData.key_name_remapping);
    }
    get object() {
        return this._load_db().then(ds => pullObject(ds, this.index, ItemData.key_name_remapping));
    }

    get object_list() {
        return this._load_db().then(ds => pullObjectList(ds, ItemData.key_name_remapping));
    }

    get l_list() {
        return this.ds.Name;
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

    get effect() {
        return this._load_db().then((ds) => (
            ds.Description[this.index]
        ));
    }

}

var NatureDatabase = null;
class NatureData {
    constructor(index) {
        this.index = index;
    }

    get ds() {
        return NatureDatabase;
    }

    _load_db() {
        if (NatureDatabase === null) {
            return pullData(
                "natures",
                function (data) {
                    NatureDatabase = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(NatureDatabase))
        }
    }

    static key_name_remapping = {
        Name: "name",
        Modifiers: "modifiers"
    };

    get l_object() {
        return pullObject(this.ds, this.index, NatureData.key_name_remapping);
    }

    get object() {
        return this._load_db().then(ds => pullObject(ds, this.index, NatureData.key_name_remapping));
    }

    get object_list() {
        return this._load_db().then(ds => pullObjectList(ds, NatureData.key_name_remapping));
    }

    get l_list() {
        return this._load_db().then((ds) => (
            ds.Name
        ));
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

    get modifiers() {
        return this._load_db().then((ds) => (
            ds.Modifiers[this.index]
        ));
    }

}

var AbilitiesDatabase = null;
class AbilityData {
    constructor(index) {
        this.index = index;
    }

    get ds() {
        return AbilitiesDatabase;
    }

    _load_db() {
        if (AbilitiesDatabase === null) {
            return pullData(
                "abilities",
                function (data) {
                    AbilitiesDatabase = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(AbilitiesDatabase))
        }
    }

    static key_name_remapping = {
        ability: "name",
        description: "effect"
    };

    get l_object() {
        return pullObject(this.ds, this.index, AbilityData.key_name_remapping);
    }

    get object() {
        return this._load_db().then(ds => pullObject(ds, this.index, AbilityData.key_name_remapping));
    }

    get object_list() {
        return this._load_db().then(ds => pullObjectList(ds, AbilityData.key_name_remapping));
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.ability
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds.ability[this.index]
        ));

    }

    get effect() {
        return this._load_db().then((ds) => (
            ds.description[this.index]
        ));
    }

}

var BallsDatabase = null;

class BallData {

    constructor(index) {
        this.index = index;
    }

    get ds() {
        return BallsDatabase;
    }

    _load_db() {
        if (BallsDatabase === null) {
            return pullData(
                "balls",
                function (data) {
                    BallsDatabase = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(BallsDatabase))
        }
    }

    static key_name_remapping = {
        Name: "name"
    };

     get l_object() {
        return pullObject(this.ds, this.index, BallData.key_name_remapping);
    }
    get object() {
        return this._load_db().then(ds => pullObject(ds, this.index, BallData.key_name_remapping));
    }

    get object_list() {
        return this._load_db().then(ds => pullObjectList(ds, BallData.key_name_remapping));
    }

    get l_list() {
        return this.ds.Name;
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

}

var LocationsDatabase = null;

class LocationData {

    constructor(index) {
        this.index = index;
    }

     get ds() {
        return LocationsDatabase;
    }

    _load_db() {
        if (LocationsDatabase === null) {
            return pullData(
                "meet_locations",
                function (data) {
                    LocationsDatabase = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(LocationsDatabase))
        }
    }

    static key_name_remapping = {
        MainSeries: "name",
        Colliseum: "colliseum_name",
        Key: "key"
    };

    get l_object() {
        return pullObject(this.ds, this.index, LocationData.key_name_remapping);
    }

    get object() {
        return this._load_db().then(ds => pullObject(ds, this.index, LocationData.key_name_remapping));
    }

    get object_list() {
        return this._load_db().then(ds => pullObjectList(ds, LocationData.key_name_remapping));
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.MainSeries
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds.MainSeries[this.index]
        ));
    }

}

var RibbonsDatabase = null;

class RibbonData {
    constructor(index) {
        this.index = index;
    }

    get ds() {
        return RibbonsDatabase;
    }

    _load_db() {
        if (RibbonsDatabase === null) {
            return pullData(
                "ribbons",
                function (data) {
                    RibbonsDatabase = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(RibbonsDatabase))
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

    get ds() {
        return TypesDataset;
    }

    _load_db() {
        if (TypesDataset === null) {
            return pullData(
                "types",
                function (data) {
                    TypesDataset = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(TypesDataset))
        }
    }

    static key_name_remapping = {
        Name: "name",
        Key: "key"
    };

    get l_object() {
        return pullObject(this.ds, this.index, TypeData.key_name_remapping);
    }

    get object() {
        return this._load_db().then(ds => pullObject(ds, this.index, TypeData.key_name_remapping));
    }

    get object_list() {
        return this._load_db().then(ds => pullObjectList(ds, TypeData.key_name_remapping));
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

    get key() {
        return this._load_db().then((ds) => (
            ds.Key[this.index]
        ));
    }

}

var GamesDataset = null;

class GameData {
    constructor(index) {
        this.index = index;
    }

    get ds() {
        return GamesDataset;
    }

    _load_db() {
        if (GamesDataset === null) {
            return pullData(
                "games",
                function (data) {
                    GamesDataset = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(GamesDataset));
        }
    }

    get list() {
        return this._load_db().then((ds) => (
            ds.Name
        ));
    }

    static key_name_remapping = {
        Name: "name",
        ID: 'id',
        Region: "region",
        Game: "game",
        Codes: "codes",
        Addresses: "addresses"
    };

    get object() {
        return this._load_db().then(ds => pullObject(ds, this.index, GameData.key_name_remapping));
    }

    get object_list() {
        return this._load_db().then(ds => pullObjectList(ds, GameData.key_name_remapping));
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
        return this.addresses.then(a => a[0]);
    }

    get box_address() {
        return this.addresses.then(a => a[1]);
    }

}

var DevicesDataset = null;

class DeviceData {
    constructor(index) {
        this.index = index;
    }

    get ds() {
        return DevicesDataset;
    }

    _load_db() {
        if (DevicesDataset === null) {
            return pullData(
                "devices",
                function (data) {
                    DevicesDataset = data;
                    return data;
                }
            );
        } else {
            return new Promise((resolve, reject) => resolve(DevicesDataset))
        }
    }

    get list() {
        return this._load_db().then(ds => ds.map((d) =>
            d.Name
        ));
    }

    get name() {
        return this._load_db().then((ds) => (
            ds[this.index].Name
        ));
    }

}

// Simple object to track genders through the code
class GenderData {
    constructor(
        someID
    ) {
        this.index = null;
        this.init(someID);
    }

    static gender_names = ["neuter", "male", "female"];

    get name() {
        return GenderData.gender_names[this.index];
    }

    get code() {
        return this.name.charAt(0).toUpperCase();
    }

    get flag() {
        return this.index - 1;
    }

    init(id) {
        let nid = (typeof id === "string") ? id.toLowerCase() : id;
        switch (nid) {
            case "female":
            case "f":
                this.index = 2;
                break;
            case "male":
            case "m":
                this.index = 1;
                break;
            case "neuter":
            case "n":
                this.index = 0;
                break;
            default:
                this.index = 2;
                break;
        }
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
    DeviceData,
    GenderData,
    LocationData
}