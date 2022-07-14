import React, { Component } from 'react'
import Data from './Data.json'

export class SearchResult extends Component {
    showRest = (val,item)=>{
        this.props.detailPage(val,item)
        // console.log(val)
    }
  render() {
    return (
        <>
        <ul>
            {this.props.userHint.map((item)=>
            <li onClick={ () => { this.showRest(item.id,item) } }> <div className='card'>
            <div className='image_cuisine'>
            <img src={item.image} alt=''/>
            <span>{item.cuisine}</span>
            </div>
            <div className='restrauntName_address'>
                <span className='name' >{item.name}</span>
                <p className='address'>{item.address}</p>
            </div>
          </div></li>)}
        </ul>
      </>

    )
  }
}

export default SearchResult