import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counter';

class Counter extends Component {
  render = () => (
    <div>
      Counter
      {this.props.counter}
      <button className="btn btn-primary" onClick={this.props.increment}>
        +
      </button>
      <button className="btn btn-primary" onClick={this.props.decrement}>
        -
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);