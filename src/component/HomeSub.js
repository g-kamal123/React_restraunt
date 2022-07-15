import React, { Component } from 'react'
import Data from './Data.json'

export class HomeSub extends Component {
    showRest = (val,item)=>{
        this.props.detailPage(val,item)
        console.log(val)
    }
  render() {
    this.style1={  
        backgroundImage: "linear-gradient(to top,rgba(255,255,255,0.4),rgba(255,255,255,0)),url(" + "https://c.ndtvimg.com/2021-01/78btgdc_pizza_625x300_15_January_21.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
      this.data =Data['restaurants'].map((item)=>{
            return <div className='homesubcard' onClick={()=>{this.showRest(item.id,item)}} style={{  
                backgroundImage: "linear-gradient(to top,rgba(255,255,255,0.4),rgba(255,255,255,0)),url(" + `${item.photograph}` + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className='cardname'>
                    <span>{item.name}</span>
                    <span>{item.cuisine_type}</span>
                </div>
              </div>
  })
    return (
        <>
            {this.data}
        </>
    )
  }
}

export default HomeSub