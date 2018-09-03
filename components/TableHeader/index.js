import React from 'react';
import {Component} from 'react';


class TableHeader extends Component {

  initHeader() {
    return Object.keys(this.props.titles).map((title) => {

      const className = (title == this.props.title) ? this.props.reverse : '';

      return (<th className={className} onClick={(e)=>{this.props.changeSort(e.target.innerText)}} key={title}>
                {title}
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

export default TableHeader;
