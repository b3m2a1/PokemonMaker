import React from 'react';

function renderIfPossible(component) {
    var render;

    if ( (typeof component === 'object') && component.hasOwnProperty('render') ) {
        render = component.render;
    } else {
        render = component;
    }

    return (
        ( (typeof render) === 'function') ? render() : render
    );
}



class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: <Collapser body={props.body} open={true}/> // we'll put this in state so it can track its collapse status but we'll control the toggle
        }
    }

    render() {
        return (
            <div className="card">
                {
                    ( typeof this.props.header === 'undefined' ) ? null : (
                        <div className="card-header">
                            {renderIfPossible(this.props.header)}
                        </div>
                    )
                }
                <div className="card-body">
                    {
                        ( typeof this.props.title === 'undefined' ) ? null : (
                            <h5 className="card-title">
                                {renderIfPossible(this.props.title)}
                            </h5>
                        )
                    }
                    {this.state.body}
                </div>
                {
                    ( typeof this.props.footer === 'undefined' ) ? null : (
                        <div className="card-footer">
                            {renderIfPossible(this.props.footer)}
                        </div>
                    )
                }
            </div>
        );
    }
}

class TabView extends React.Component {
    // we'll force people to give us a set of 'keys' so we know how stuff should be ordered along with the 'options'
    constructor(props){
        super(props);
        this.state = {
            options : props.options,
            current : ( 'current' in props ) ? props.current : props.keys[0]
        }
    }
    changeView(key){
        this.setState({current: key});

    }

    render() {
        console.log(this.state.options["Code"]);
        console.log(this.state.options["Log"]);
        return (
            <div className="grid">
                <div className="row">
                    <div className="list-group list-group-horizontal">
                        {
                            this.props.keys.map(
                                (key)=>(
                                    <button
                                        className={"list-group-item list-group-item-action" + ( (key === this.state.current) ? " active" : "" )}
                                        key={key}
                                        onClick={()=>this.changeView(key)}
                                    >{key}
                                    </button>
                                )
                            )
                        }
                    </div>
                </div>
                <div className="row">
                    {renderIfPossible(this.state.options[this.state.current])}
                </div>
            </div>
        );
    }
}

class TextPane extends React.Component {
    // for now there isn't a whole lot of reason to have this but maybe in the future...?
  constructor(props) {
    super(props);
    this.state = {
        body: ('body' in props) ? props.body : "...?",
        readonly: ('readonly' in props) ? props.readonly : false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
      this.setState({body: event.target.value});
  }

  render() {
    return (
        <div className="form-group w-100">
            <textarea className="form-control text-pane"
                      defaultValue={this.state.body}
                      onChange={this.handleChange} readOnly={this.state.readonly}/>
        </div>
    );
  }
}

export {
    Panel,
    Collapser,
    TabView,
    TextPane
};
