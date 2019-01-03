import React, { Component } from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <ul>
          {
	          this.props.menus.map(function(item,index){
	          	return <li key={index}>{item.name}</li>
	          })
          }
        </ul>
      </div>
    )
  }
}