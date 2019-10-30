import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { InputField, ListSelector } from './elements';

class PokemonPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: props.form.pokemon,
            base_data: props.form.pokemon.base_data,

            pokeman_list: null,
            ability_list: null,
            nature_list: null,
            loc_list: null,
            item_list: null
        };

        this.updateBaseData = this.updateBaseData.bind(this);
        this.ready = this.ready.bind(this);

        // we can use the ListSelector stuff to move most of this into the render call
        this.index = new ListSelector(this, props.form.pokemon, 'index',
            { default_value: 0, ready: this.ready }
            );
        this.nickname = new InputField(this, props.form.pokemon, 'name',
            { default_value: "", ready: this.ready, validator: (v) => v.slice(0, 10) }
            );
        this.ability = new BoundField(this, props.form.pokemon, 'ability_index',
            { default_value: 0, ready: this.ready }
            );
        this.level_met = new BoundField(this, props.form.pokemon, 'level_met',
            { default_value: 24, ready: this.ready }
            );

        this.nature = new BoundField(this, props.form.pokemon.nature, 'nature_index',
            { accessor_field : "index", default_value: 24, ready: this.ready }
            );
        this.ball = new BoundField(this, props.form.pokemon.ball, 'ball_index',
            { accessor_field : "index", default_value: 4, ready: this.ready }
            );
        this.item = new BoundField(this, props.form.pokemon.item, 'item_index',
            { accessor_field : "index", default_value: 0, ready: this.ready }
            );
        this.location = new BoundField(this, props.form.pokemon.location, 'loc_index',
            { accessor_field : "index", default_value: 0, ready: this.ready }
            );

        this.pokemans_list = new BoundField(this, props.form.pokemon.data, 'pokeman_list',
            {
                getter : () => (
                    (this.state.pokeman_list === null) ? (this.getPokemanList()) : this.state.pokeman_list
                )
            }
            )

        // because we want to write on pokemon directly rather than managing both the backend and front-end data,
        // so we also need so set some hooks to call into setState
        // this.state.pokemon.update_hooks["base_data"].method = this.updateBaseData;
    }

    ready() {
        return this.state.pokemon.loaded;
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
        if (this.state.pokemon.abilities.length === 2) {
            return <>
                <option value={0} key={0}>
                    {this.state.pokemon.abilities[0].name}
                </option>
                <option value={1} key={1}>
                    {this.state.pokemon.abilities[1].name}
                </option>
            </>
        } else {
            return <option value={0} key={0}>
                {this.state.pokemon.abilities[0].name}
            </option>
        }
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
        // this.setState({
        //     base_data: Object.assign({}, this.state.pokemon.base_data)
        // })
    }

    //endregion

    render() {

        return (
            <>
                <Row>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label column={true} sm="4">Species:</Form.Label>
                            <Col sm="8">
                                <Form.Control as="select"
                                              value={this.index.value}
                                              onChange={this.index.change}>
                                    {
                                        this.pokemans_list.value
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
                                              value={this.nickname.value}
                                              onChange={this.nickname.change}
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
                                              value={this.ready() ? this.state.pokemon.ability_index : 0}
                                              onChange={this.handleAbilityChange}
                                >
                                    {
                                        this.ready() ? (
                                            this.getAbilityList()
                                        ) : null
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
                                      value={this.ready() ? this.state.pokemon.location.index : 0}
                                      onChange={this.handleLocationChange}
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