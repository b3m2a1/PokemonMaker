import React from 'react';
import {
    Collapse, Card, Button,
    Form, Nav, Tab,
    Row, Col
} from 'react-bootstrap';

// import PokemonPanel from './pokemon_panel';

class OptionsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: ('form' in props) ? props.form.bindOptionsPanel(this): null,
        }
    }

    render() {
        return (
            <Card className={"options-panel"}>
                <Card.Header>
                    {this.props.header}
                </Card.Header>
                <Collapse in={this.state.open}>
                    <Card.Body className={"code-panel-body"}>
                        <Row noGutters>
                            <Col>
                                <Tab.Container defaultActiveKey="pokemon" id="code-tabs">
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
                            </Col>
                        </Row>
                        <Row noGutters>
                            <Col>
                                <Card.Body>
                                    <Button onClick={() => (this.state.form.generate())}>Generate Code</Button>
                                </Card.Body>
                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="device">
                                    <Form.Label column={true}>Device</Form.Label>
                                    <Form.Control as="select" value={this.state.form.device.index}>
                                        {
                                            ('form' in this.state) ? (
                                                (this.state._devices === null ) ? (
                                                    this.getDeviceList()
                                                ): this.state._devices
                                            ) : null

                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
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