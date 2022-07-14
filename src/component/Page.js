import React, { Component } from 'react'
import Data from './Data.json'
import SearchResult from './SearchResult'

export class Page extends Component {
  render() {
    return (
      <div className='page'>
        <div className='page_image'>
            <img src={this.props.img} alt=''/>
        </div>
        <div className='page_show'>
            <div className='page_rest'>
                <span className='name'>{this.props.rest.name}</span>
                <span className='address'>{this.props.rest.address}</span>
                <span className='cuisine'>Cuisine:{this.props.rest.cuisine}</span>
            </div>
            <table>
             <tbody> 
                <tr><th colSpan = "2">Operational_Hours</th></tr>
                {/* {console.log(this.props.pageid)} */}
                {Object.keys(this.props.pageid).map((item)=>
                <tr><td>{item}</td><td>{this.props.pageid[item]}</td></tr>)}
             </tbody>
            </table>
        </div>
        <div>
        { 
        this.props.rev.map((item)=>{
           return <>
            {/* {console.log(item.name)} */}
            <span>{item.name}</span>
            <span>{item.date}</span>    
            <span>{item.rating}</span>
            <p>{item.comments}</p>   
            </>   
        })     
        }
        <div>hgfggudh</div>
        </div>
      </div>
    )
  }
}

export default Page