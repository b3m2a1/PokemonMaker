import React from 'react';
import {
    Collapse, Card, Button,
    Form, Nav, Tab,
    Row, Col
} from 'react-bootstrap';

class OutputTextArea extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Form.Group controlId={this.props.id} className="text-tab">
                <Form.Control plaintext readOnly
                              as="textarea"
                              rows="12"
                              value={this.props.text}
                              onChange={this.props.handler}
                />
            </Form.Group>
        )
    }
}

class ResultsPanel extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Form.Group as={Col} controlId={this.props.id} className="text-tab">
                <Form.Group as={Row} controlId={this.props.id + "_PIDs"}>
                    <Col sm="2">
                        <Form.Check
                            type="checkbox"
                            id={this.props.id + "_useRandomPID"}
                            label="Random PID"
                        />
                    </Col>
                    <Col sm="10">
                        <Form.Control id={this.props.id + "_PID"} defaultValue={this.props.attrs['PID']}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId={this.props.id + "_XKey"}>
                    <Form.Label column={true} sm="2">
                        XKey:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={this.props.attrs['XKey']}/>
                    </Col>
                </Form.Group>

                {this.props.blocks.map(
                    (block, i) => (
                        <Form.Group as={Row} controlId={this.props.id + "_block" + toString(i)}>
                            <Col sm="2">
                                <Form.Label column={true} sm="2">
                                    {"Block " + toString(i) + ":"}
                                </Form.Label>
                            </Col>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={block}/>
                            </Col>
                        </Form.Group>
                    )
                )}
            </Form.Group>
        )
    }
}

class CodePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: ('form' in props) ? props.form.bindCodePanel(this): null,
            code: ('code' in props) ? props.code : "",
            log: ('log' in props) ? props.log : "",
            blocks: ('blocks' in props) ? props.blocks : [],
            attrs: ('attrs' in props) ? props.attrs : {},
            _devices: null,
            open: true
        };
        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleLogChange = this.handleLogChange.bind(this);
    }

    setForm(form) {
        this.setState({form: form.bindCodePanel(this)});
    }

    setCode(code) {
        this.setState({code: code});
    }

    setLog(log) {
        this.setState({log: log});
    }

    setBlocks(blocks) {
        this.setState({blocks: blocks});
    }

    setAttrs(attrs) {
        this.setState({attrs: attrs});
    }


    handleLogChange(event) {
        this.setLog(event.target.value);
    }

    handleCodeChange(event) {
        this.setCode(event.target.value);
    }

    toggleOpen() {
        this.setState({open:!this.state.open})
    }

    getDeviceList() {
        this.state.form.device.list.then(
            (data)=>this.setState(
                {
                    _devices: data.map(
                        (dev, i) => (
                            <option value={i} key={i}>
                                {dev}
                            </option>
                        )
                    )
                }
            )
        )
    }

    render() {
        return (
            <Card border="primary" className={"code-panel"}>
                <Card.Header>
                    <Button variant='link'
                            onClick={() => this.toggleOpen()}
                            aria-controls="example-collapse-text"
                            aria-expanded={this.state.open}
                    >
                        {this.props.header}
                    </Button>
                </Card.Header>
                <Collapse in={this.state.open}>
                    <Card.Body className={"code-panel-body"}>
                        <Row noGutters>
                            <Col>
                                <Tab.Container defaultActiveKey="code" id="code-tabs">
                                    <Nav fill variant="pills" className="bar-nav-pills">
                                        <Nav.Item>
                                            <Nav.Link eventKey="code">Code</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="log">Log</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="blocks">Blocks</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="code" title="Code">
                                            <Card.Body className="bg-white">
                                                <OutputTextArea
                                                    id="CodePane"
                                                    text={this.state.code}
                                                    handler={this.handleCodeChange}
                                                />
                                            </Card.Body>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="log" title="Log">
                                            <Card.Body className="bg-white">
                                                <OutputTextArea
                                                    id="LogPane"
                                                    text={this.state.log}
                                                    handler={this.handleLogChange}
                                                />
                                            </Card.Body>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="blocks" title="Blocks">
                                            <Card.Body className="bg-white">
                                                <ResultsPanel blocks={this.state.blocks} attrs={this.state.attrs}/>
                                            </Card.Body>
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

export default CodePanel;