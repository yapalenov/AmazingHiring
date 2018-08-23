import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TableBody extends Component {

  showUsers () {
    let compare = (a, b) => {
      let first = a[this.props.sortType.name].toLowerCase();
      let second = b[this.props.sortType.name].toLowerCase();
      if (!this.props.sortType.reverse) {
        if (first > second) return 1;
        if (first < second) return -1;
      } else {
        if (first < second) return 1;
        if (first > second) return -1;
      }
    }
    let userlist = !this.props.sortType.name ? this.props.initialStructure : this.props.initialStructure.slice('').sort(compare);
    return userlist.map((user) => {
      return (<tr key={user.Email}>{Object.keys(user).map((prop) => { return (<td key={prop}>{user[prop]}</td>)})}</tr>)
    })

  }
  render() {
      return (
          <tbody>
            {this.showUsers()}
          </tbody>
     );
  }
}

function mapStateToProps (state) {
  return {
    initialStructure: state.initialStructure,
    sortType: state.sortType
  }
}

export default connect(mapStateToProps)(TableBody);
