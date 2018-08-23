import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeSort} from '../../actions';

class TableHeader extends Component {

  initHeader() {
    return Object.keys(this.props.initialStructure[0]).map((prop) => {

      let className = '';
      className = (this.props.sortType.name && prop == this.props.sortType.name)
                  ? (this.props.sortType.reverse ? 'reverse' : 'normal')
                  : ''

      return (<th className={className} onClick={(e)=>{this.props.changeSort(e.target.dataset.type)}} key={prop} data-type={prop}>
                {prop}
                <div className='arrow-top'></div>
                <div className='arrow-bottom'></div>
              </th>)
    })
  }

  render() {
      return (
        <thead>
          <tr onClick={(e)=>{this.props.changeSort(null)}}><th>Сброс</th></tr>
          <tr>
            {this.initHeader()}
          </tr>
        </thead>
      )
  }
}

function mapStateToProps (state) {
  return {
    initialStructure: state.initialStructure,
    sortType: state.sortType
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({changeSort: changeSort}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TableHeader);
