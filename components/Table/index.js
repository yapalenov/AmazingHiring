import React from 'react';
import {Component} from 'react';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeSort} from '../../actions';

import './index.css';

class Table extends Component {

  initUserList () {
    const compare = (a, b) => {
      const first = a[this.props.title].toLowerCase();
      const second = b[this.props.title].toLowerCase();
      return !this.props.reverse
        ? (first > second ? 1 : -1)
        : (first < second ? 1 : -1)
    }
    return !this.props.title ? this.props.initialStructure : this.props.initialStructure.slice('').sort(compare);
  }

  render() {
    const reverse = this.props.reverse ? 'reverse' : 'normal';

    return (
      <table>
        <TableHeader titles={this.props.initialStructure[0]}
                     title={this.props.title}
                     reverse={reverse}
                     changeSort={this.props.changeSort.bind(this)}/>
        <TableBody userlist={this.initUserList()}/>
      </table>
    );
  }
}

function mapStateToProps (state) {
  return {
    initialStructure: state.initialStructure,
    title: state.sortType.title,
    reverse: state.sortType.reverse
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({changeSort: changeSort}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Table);
