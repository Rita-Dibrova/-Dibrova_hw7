import React from "react";
import { v4 } from "uuid";
import { IconAdd } from "../Icon/IconAdd";
import styles from '../SubmitSecondForm/SubmitSecondForm.module.css';

class SubmitSecondForm extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          showTaskWindow: false,
        }
        this.previousState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    handleChange(e) {
        this.setState({
          value: e.target.value
        })
    }
 
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.value) {
            const item = {
                value: this.state.value,
                id: v4(),
            }
            this.props.onAddItem(item);      
            this.setState(
                this.previousState); 
        }
    }

    handleModal() {
        this.setState({
            showTaskWindow: !this.state.showTaskWindow,
            value: ''
        })
    }

  render() {
    return (
        <div>
            <p className={styles.name} > Форма 2 </p>
            {!this.state.showTaskWindow && (
            <button className={styles.button} onClick={this.handleModal}> 
                <IconAdd /> Add task
            </button>)}
            {this.state.showTaskWindow && (
                <div className={styles.form}>
                    <input 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        placeholder="Enter todo"
                        />
                    <button onClick={this.handleSubmit} disabled={!this.state.value}>Готово</button>
                    <button onClick={this.handleModal}> Закрити </button>              
                </div>
            )}
        </div>      
    )
  }
}

export default SubmitSecondForm;