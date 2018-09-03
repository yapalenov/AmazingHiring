import React from 'react';
import {Component} from 'react';

class TableBody extends Component {

  render() {
      return (
          <tbody>
            {this.props.userlist.map((user) => {
              return (<tr key={user.Email}>{Object.values(user).map((value) => {
                return (<td key={value}>{value}</td>)})}</tr>)
            })}
          </tbody>
     );
  }
}

export default TableBody;
