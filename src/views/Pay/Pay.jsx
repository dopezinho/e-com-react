import React, { Component } from "react";

export default class Pay extends Component {
    // aqui vai a lógica
    state = {
        count: 0,
    };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.state.count}</h2>
        <button 
            onClick={() => {
                this.setState({count: this.state.count + 1})
                }}
                >
                    Aumenta
                </button>
      </div>
    );
  }
}

