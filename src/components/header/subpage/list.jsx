import React, { Component } from 'react';

class List extends React.Component {
  render() {
  	let lists = ['aa','bb','cc'];
    return ( 
      <div className="List">
        <ul>
          {
	          lists.map(function(item,index){
	          	return <li key={index}>{item}</li>
	          })
          }
        </ul>
      </div>
    )
  }
}

export default List;