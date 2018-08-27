import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TableBody extends Component {

  render() {

    const { title } = this.props.sortType;
    const reverse = this.props.sortType.reverse ? 'reverse' : 'normal';
    const { initialStructure }  = this.props;

    let showUsers = () => {
      let compare = (a, b) => {
        let first = a[title].toLowerCase();
        let second = b[title].toLowerCase();
        if (reverse === "normal") {
          if (first > second) return 1;
          if (first < second) return -1;
        } else {
          if (first < second) return 1;
          if (first > second) return -1;
        }
      }
      let userlist = !title ? initialStructure : initialStructure.slice('').sort(compare);
      return userlist.map((user) => {
        return (<tr key={user.Email}>{Object.keys(user).map((prop) => { return (<td key={prop}>{user[prop]}</td>)})}</tr>)
      })

    }

    return (
        <tbody>
          {showUsers()}
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
