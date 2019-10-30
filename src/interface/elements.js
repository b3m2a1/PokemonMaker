/*
    We'll define a pile of very simple elements here that can use BoundField and friends to bind state in a very
    targeted way -- in doing so we can make sure that everything responds only to the simplest changes possible
 */

import React from "react";
import BoundField from '../core/utilities';
import {Form, Col, Row} from "react-bootstrap";

class ControlError extends Error {} // python style empty error for instanceof usage

class ControlField extends React.Component {
    // we'll have this be a simple input field that binds a specific property
    // it'll feed through into a Bootstrap FormGroup-type control with the ability
    // to get a label and all the rest of it
    // we can add detailed controls and things on it as we go, but for now we'll keep it simple
    constructor(props) {
        super(props);
        this.state = {
            label: ('label' in props) ? props.label : null,
            control_options: ('control_options' in props) ? props.control_options : {}
        };
        this.field = BoundField(this, props.object, props.field_name,
            ('field_options' in props) ? props.field_options : {}
            );
    }

    renderCore() {
       throw new ControlError("renderCore() isn't implemented -- all subclasses must implement it");
    }

    render() {
        let base_expr = this.renderCore();
        if ( this.state.label !== null ) {
            base_expr = <Form.Group as={Row}>
                <Form.Label column={true} sm="4">{this.state.label}</Form.Label>
                <Col sm="8">
                    {this.renderCore}
                </Col>
            </Form.Group>
        }

    }

}

class InputField extends ControlField {
    constructor(props) {
        super(props);
    }

    renderCore() {
        return <Form.Control {...this.state.control_options} value={this.field.value} onChange={this.field.change}/>
    }

}

class ListSelector extends ControlField {
    constructor(props) {
        super(props);
        this.state['item_options'] = ('item_options' in props) ? props.item_options : {};
        this.state['prep_item'] = ('prep_item' in props) ? props.prep_item : o => o.data;
        this.state['_selector_list'] = null; // state setup in ControlField
    }

    getList() {
        const list = this.field.list; // we enforce _some_ type of list implementation onto our object
        if ('then' in list) { // Promise-like object
            list.then((l)=>this.setState({ _selector_list: l }))
        } else {
            this.setState({ _selector_list: list })
        }
    }

    renderList() {
        if (this.state._selector_list === null) {
            this.getList();
            return [];
        } else {
            this.state._selector_list.map(
                (item) =>
                    <option value={item.index} key={item.key} {...this.state.item_options}>
                        {this.state.prep_item(item)}
                    </option>
            )
        }

    }

    renderCore() {
        return <Form.Control as="select" value={this.field.value} onChange={this.field.change}>
            {
                this.renderList()
            }
        </Form.Control>
    }

}

export {
    InputField,
    ListSelector
}