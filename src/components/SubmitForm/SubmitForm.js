import React from 'react';
import { v4 } from 'uuid';
import { IconAdd } from '../Icon/IconAdd';
import styles from '../SubmitForm/SubmitForm.module.css';

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    if(!this.state.value) {
      return;
    }

    const item = {
      ...this.state,
      id: v4()
    }

    this.props.onAddItem(item);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className={styles.name}> Форма 1 </p>
          <div className={styles.form}>
            <input 
              type="text" 
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              placeholder='Enter todo' 
            />

            <button className={styles.button}>
              <IconAdd/>
            </button>
          </div>
      </form>
    )
  }
}

export default SubmitForm;