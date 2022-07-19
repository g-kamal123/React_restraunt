import React, { Component } from 'react'
import Data from './Data.json'
import SearchResult from './SearchResult'

export class Page extends Component {
  render() {
    return (
      <div className='page'>
        <div className='page_image' style={{  
                backgroundImage: "linear-gradient(to top,rgba(255,255,255,0.4),rgba(255,255,255,0)),url(" + `${this.props.img}` + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
              <div className='page_rest'>
                <span className='name'>{this.props.rest.name}</span>
                <span className='address'>{this.props.rest.address}</span>
                <span className='cuisine'>Cuisine:{this.props.rest.cuisine_type}</span>
            </div>
        </div>
        <div className='page_show'>
          <div className='opshours'><span>-/-Operational_Hours-/-</span></div> 
            <table>
             <tbody> 
                {/* {console.log(this.props.pageid)} */}
                {Object.keys(this.props.pageid).map((item)=>
                <tr><td>{item}</td><td>{this.props.pageid[item]}</td></tr>)}
             </tbody>
            </table>
        </div>
        <div className='reviews_parent'>
        { 
        this.props.rev.map((item)=>{
           return <div className='reviews'>
            {/* {console.log(item.name)} */}
            <span className='name'>{item.name}</span>
            <span>{item.date}</span>
            {[...Array(item.rating)].map((e,i)=><span key={i}><i class="fa fa-star" aria-hidden="true" style={{color:'red'}}></i></span>)}
            <p>{item.comments}</p>   
            </div>   
        })     
        }
        </div>
      </div>
    )
  }
}

export default Page