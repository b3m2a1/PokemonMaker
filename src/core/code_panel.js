import React from 'react';
import {
    Accordion, Card, Button,
    Form, TabContainer, Tabs, Tab,
    Row, Col
} from 'react-bootstrap';
import PokemonForm from './core';

class CodePanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            code:('code' in props) ? props.code: "",
            log:('log' in props) ? props.log: ""
        }
        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleLogChange = this.handleLogChange.bind(this);
    }

    setCode(code) {
        this.setState({code:code});
    }
    setLog(log) {
        this.setState({log:log});
    }
    handleLogChange(event){
        this.setLog(event.target.value);
    }
    handleCodeChange(event){
        this.setCode(event.target.value);
    }

    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant='link' eventKey="0">
                            {this.props.header}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <TabContainer>
                                        <Tabs defaultActiveKey="code" id="code-tabs">
                                            <Tab eventKey="code" title="Code">
                                                <Form.Group controlId="CodePane" className="text-tab">
                                                    <Form.Control as="textarea" rows="10" value={this.state.code} onChange={this.handleCodeChange}/>
                                                </Form.Group>
                                            </Tab>
                                            <Tab eventKey="log" title="Log">
                                                <Form.Group controlId="LogPane" className="text-tab">
                                                    <Form.Control as="textarea" rows="10" value={this.state.log} onChange={this.handleLogChange}/>
                                                </Form.Group>
                                            </Tab>
                                        </Tabs>
                                    </TabContainer>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button onClick={()=>(this.form.generate())}>Generate Code</Button>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                    {
                        (typeof this.props.footer === 'undefined') ? null : (
                            <Card.Footer>
                                {this.props.footer}
                            </Card.Footer>
                          )
                      }
                </Card>
            </Accordion>
            )
    }

}

export default CodePanel;