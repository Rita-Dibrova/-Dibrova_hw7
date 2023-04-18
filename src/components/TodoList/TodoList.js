import React from 'react';
import { IconDelete } from '../Icon/IconDelete';
import styles from '../TodoList/TodoList.module.css';

export default class TodoList extends React.Component {

  handleDelete(id) {
    this.props.onDelete(id);    
  }

  handleCheck(id) {
    if (typeof this.props.onCheck === 'function') {
      this.props.onCheck(id);
    }
  }

  render() {
    return (
      <ul>
        {this.props.list.map(item => {
          const { id, value } = item;
          return (
            <li key={id} className={styles.li}>
              <input type="checkbox" onChange={this.handleCheck.bind(this, id)}/>
              <p className={styles.content}>{value}</p>
              <button className ={styles.button} onClick={this.handleDelete.bind(this, id)}> <IconDelete/></button>
            </li>
          );
        })}
      </ul>
    );
  }
}