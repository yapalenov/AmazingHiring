import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeSort} from '../../actions';

class TableHeader extends Component {

  render() {

    const { title } = this.props.sortType;
    const reverse = this.props.sortType.reverse ? 'reverse' : 'normal';
    const titles  = this.props.initialStructure[0];

    let initHeader = () => {
      return Object.keys(titles).map((item) => {

        let className = (title == item) ? reverse : '';

        return (<th className={className} onClick={(e)=>{this.props.changeSort(e.target.dataset.title)}} key={item} data-title={item}>
                  {item}
                  <div className='arrow-top'></div>
                  <div className='arrow-bottom'></div>
                </th>)
      })
    }

    return (
      <thead>
        <tr onClick={(e)=>{this.props.changeSort(null)}}><th>Сброс</th></tr>
        <tr>
          {initHeader()}
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
