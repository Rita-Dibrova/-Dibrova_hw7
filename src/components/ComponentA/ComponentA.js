import React from 'react';
import { connect } from 'react-redux';
import { decrementAction, incrementAction } from '../../redux/actions';
import ComponentB from '../ComponentB/ComponentB';

class ComponentA extends React.Component {
  handleDecrement() {
    this.props.dispatch(decrementAction);
  }
  handleIncrement() {
    this.props.dispatch(incrementAction);
  }

  render() {
    return(
        <div>
            <h3>Кількість: {this.props.counter}</h3>
            <div>
              <ComponentB handleClick={this.handleDecrement.bind(this)} >
                Decrement
              </ComponentB>
              <br/>
              <ComponentB handleClick={this.handleIncrement.bind(this)}>
                Increment
              </ComponentB>
            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps)(ComponentA);