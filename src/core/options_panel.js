import React from 'react';
import {
    Collapse, Card,
    Nav, Tab,
} from 'react-bootstrap';
import PokemonPanel from './pokemon_panel';

class OptionsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: ('form' in props) ? props.form.bindOptionsPanel(this) : null,
            open: true
        }
    }

    render() {
        return (
            <Card className={"options-panel"}>
                <Card.Header>
                    {this.props.header}
                </Card.Header>
                <Collapse in={this.state.open}>
                    <Card.Body className={"options-panel-body"}>
                        <Tab.Container defaultActiveKey="pokemon" id="options-tabs">
                            <Nav fill variant="pills" className="bar-nav-pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="pokemon">Pokemon</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="trainer">Trainer</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="stats">Stats</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="moves">Moves</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="ribbons">Ribbons</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="pokemon" title="Pokemon">
                                    <PokemonPanel
                                        form={this.state.form}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="trainer" title="Trainer">

                                </Tab.Pane>
                                <Tab.Pane eventKey="stats" title="Stats">

                                </Tab.Pane>
                                <Tab.Pane eventKey="moves" title="Moves">

                                </Tab.Pane>
                                <Tab.Pane eventKey="ribbons" title="Ribbons">

                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Card.Body>
                </Collapse>
                {
                    (typeof this.props.footer === 'undefined') ? null : (
                        <Card.Footer>
                            {this.props.footer}
                        </Card.Footer>
                    )
                }
            </Card>
        )
    }

}

export default OptionsPanel;