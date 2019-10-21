import {DeviceData, GameData} from "./data_handles";
import {Pokemon, BoxData} from "./core";

class PokemonForm {
    constructor(
        {
            pokemon = null,
            game = null,
            device = null,
            box = null
        } = {}
    ) {
        this.pokemon = (pokemon === null) ? new Pokemon(0) : pokemon;
        this.game = ( game === null ) ? new GameData(0) : game;
        this.device = ( device === null ) ? new DeviceData(3) : device;
        this.box = ( box === null ) ? new BoxData() : box;

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
        // take the back-end stuff
        // feed it through the encoder
        // shove it into the CodePanel
        let [
            code,
            log,
            blocks,
            attrs
        ] = [
            'fake code',
            'fake log',
            ['fake', 'blocks'],
            {xkey: 'fake key', pid: "fake pid"}
        ];
        this.CodePanel.setState({
            code: code,
            log: log,
            blocks: blocks,
            attrs: attrs
        })
    }
}

export default PokemonForm;