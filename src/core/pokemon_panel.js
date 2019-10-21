import React from 'react';
import {
    Form,
    Row, Col
} from 'react-bootstrap';

class PokemonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: props.form.pokemon,
            index: props.form.pokemon.index,
            base_data: props.form.pokemon.base_data,

            pokeman_list: null,
            ability_list: null,
            nature_list: null,
            loc_list: null,
            item_list: null
        };
        // Bind the object to the handlers it'll need
        this.handleIndexChange = this.handleIndexChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAbilityChange = this.handleAbilityChange.bind(this);
        this.handleNatureChange = this.handleNatureChange.bind(this);
        this.handleLevelMetChange = this.handleLevelMetChange.bind(this);
        this.handleBallChange = this.handleBallChange.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        this.updateBaseData = this.updateBaseData.bind(this);

        // because we want to write on pokemon directly rather than managing both the backend and front-end data,
        // so we also need so set some hooks to call into setState
        this.state.pokemon.update_hooks["base_data"].method = this.updateBaseData;
    }

    getPokemanList() {
        this.state.pokemon.data.object_list.then(
            (data) => this.setState(
                {
                    pokeman_list: data.map(
                        (dat, i) => (
                            <option value={i} key={i}>
                                {dat.name + ((dat.form === null) ? "" : " (" + dat.form + ")")}
                            </option>
                        )
                    )
                }
            )
        )
    }

    getAbilityList() {
        this.state.pokemon.ability.data.list.then(
            (data) => this.setState(
                {
                    ability_list: data.map(
                        (dat, i) => (
                            <option value={i} key={i}>
                                {dat}
                            </option>
                        )
                    )
                }
            )
        )
    }

    getNatureList() {
        this.state.pokemon.nature.data.list.then(
            (data) => this.setState(
                {
                    nature_list: data.map(
                        (dat, i) => (
                            <option value={i} key={i}>
                                {dat}
                            </option>
                        )
                    )
                }
            )
        )
    }

    getItemList() {
        this.state.pokemon.item.data.list.then(
            (data) => this.setState(
                {
                    item_list: data.map(
                        (dat, i) => (
                            <option value={i} key={i}>
                                {dat}
                            </option>
                        )
                    )
                }
            )
        )
    }

    getLocList() {
        this.state.pokemon.location.data.list.then(
            (data) => this.setState(
                {
                    loc_list: data.map(
                        (dat, i) => (
                            <option value={i} key={i}>
                                {dat}
                            </option>
                        )
                    )
                }
            )
        )
    }

    //region UpdateHooks
    updateBaseData(value, field, ...obj) {
        this.setState({
            index: this.state.pokemon.index,
            base_data: Object.assign({}, this.state.pokemon.base_data)
        })
    }

    //endregion

    //region Change Handlers
    handleIndexChange(event) {
        this.state.pokemon.index = event.target.value;
    }
    handleNameChange(event) {
        this.state.pokemon.name = event.target.value.slice(0, 10);
    }
    handleAbilityChange(event) {
        this.state.pokemon.ability.index = event.target.value;
    }
    handleNatureChange(event) {
        this.state.pokemon.nature.index = event.target.value;
    }
    handleItemChange(event) {
        this.state.pokemon.item.index = event.target.value;
    }
    handleBallChange(event) {
        this.state.pokemon.ball.index = event.target.value;
    }
    handleLevelMetChange(event) {
        this.state.pokemon.level_met = event.target.value;
    }

    //

    ready() {
        return this.state.pokemon.loaded;
    }

    render() {

        return (
            <>
                <Row>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">Species:</Form.Label>
                            <Col sm="8">
                                <Form.Control as="select" value={this.state.pokemon.index}
                                              onChange={this.handleIndexChange}>
                                    {
                                        (this.state.pokeman_list === null) ? (
                                            this.getPokemanList()
                                        ) : this.state.pokeman_list
                                    }
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">No.</Form.Label>
                            <Col sm="8">
                                <Form.Control readOnly plaintext as="input"
                                              value={this.ready() ? this.state.pokemon.national_dex : ""}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">Type:</Form.Label>
                            <Col sm="4">
                                <Form.Control readOnly plaintext as="input"
                                              value={this.ready() ? this.state.pokemon.type_names[0] : ""}
                                />
                            </Col>
                            <Col sm="4">
                                <Form.Control readOnly plaintext as="input"
                                              value={this.ready() ? this.state.pokemon.type_names[1] : ""}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">Name:</Form.Label>
                            <Col sm="8">
                                <Form.Control as="input"
                                              value={this.ready() ? this.state.pokemon.name : ""}
                                              onChange={this.handleNameChange}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">Ability:</Form.Label>
                            <Col sm="8">
                                <Form.Control as="select"
                                              value={this.ready() ? this.state.pokemon.ability.index : 0}
                                              onChange={this.handleAbilityChange}
                                >
                                    {
                                        (this.state.ability_list === null) ? (
                                            this.getAbilityList()
                                        ) : this.state.ability_list
                                    }
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Control readOnly plaintext as="textarea"
                                      value={this.ready() ? this.state.pokemon.ability.effect : ""}
                                      rows={3}
                        />
                    </Col>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">Nature:</Form.Label>
                            <Col sm="8">
                                <Form.Control as="select"
                                              value={this.ready() ? this.state.pokemon.nature.index : 0}
                                              onChange={this.handleNatureChange}
                                >
                                    {
                                        (this.state.nature_list === null) ? (
                                            this.getNatureList()
                                        ) : this.state.nature_list
                                    }
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">1.1x</Form.Label>
                            <Col sm="8">
                                <Form.Control readOnly plaintext as="input"
                                              value={this.ready() ? this.state.pokemon.nature.modifier_display_names[0] : ""}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">.9x</Form.Label>
                            <Col sm="8">
                                <Form.Control readOnly plaintext as="input"
                                              value={this.ready() ? this.state.pokemon.nature.modifier_display_names[1]: ""}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">Item:</Form.Label>
                            <Col sm="8">
                                <Form.Control as="select"
                                              value={this.ready() ? this.state.pokemon.item.index : 0}
                                              onChange={this.handleItemChange}
                                >
                                    {
                                        (this.state.item_list === null) ? (
                                            this.getItemList()
                                        ) : this.state.item_list
                                    }
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Control readOnly plaintext as="textarea"
                                      value={this.ready() ? this.state.pokemon.item.effect : ""}
                                      rows={3}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Control as="select"
                                      value={this.state.pokemon.location}
                                      onChange={this.handleIndexChange}
                        >
                            {
                                (this.state.loc_list === null) ? (
                                    this.getLocList()
                                ) : this.state.loc_list
                            }
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">Met At:</Form.Label>
                            <Col sm="8">
                                <Form.Control as="input"
                                              value={this.ready() ? this.state.pokemon.level_met : 0}
                                              onChange={this.handleLevelMetChange}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                       <ul>
                           <li>If 'Met At' > 0, Level Met = Met At</li>
                           <li>If 'Met At' == 0 and OT is not Trainer, Level Met = 5</li>
                           <li>If 'Met At' == 0 and OT is Trainer, Level Met = 5 (hatched)</li>
                       </ul>
                    </Col>
                </Row>
            </>
        )
    }
}

export default PokemonPanel;