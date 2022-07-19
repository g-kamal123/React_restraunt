import React, { Component } from 'react'
import SearchResult from './SearchResult'
import Data from './Data.json'
import HomeSub from './HomeSub'

export class Home extends Component {
    state = {
        enteredText:'',
        resName:[]
    }
    inputHandler = (event)=>{
        var inp = event.target.value
        var nameMatched =[]
        Object.keys(Data).map((item)=>{
            for(let i =0;i<10;i++){
                if((Data[item][i].name).toLowerCase().includes(inp.toLowerCase())){
                    var c ={
                        id:Data[item][i].id,
                        name:Data[item][i].name,
                        image:Data[item][i].photograph,
                        address:Data[item][i].address,
                        cuisine_type:Data[item][i].cuisine_type
                    }
                nameMatched = [...nameMatched,c]
                }
                else
                if((Data[item][i].cuisine_type).toLowerCase().includes(inp)){
                    var c ={
                        id:Data[item][i].id,
                        name:Data[item][i].name,
                        image:Data[item][i].photograph,
                        address:Data[item][i].address,
                        cuisine_type:Data[item][i].cuisine_type
                    }
                nameMatched = [...nameMatched,c]
                }
                else
                if((Data[item][i].neighborhood).toLowerCase().includes(inp)){
                    var c ={
                        id:Data[item][i].id,
                        name:Data[item][i].name,
                        image:Data[item][i].photograph,
                        address:Data[item][i].address,
                        cuisine_type:Data[item][i].cuisine_type
                    }
                nameMatched = [...nameMatched,c]
                }
            }
        })
        // nameMatched.map((item)=>
        // console.log('matched'+item.a))
        if(inp==='')
        this.setState({
            enteredText:inp,
            resName:[]
        })
        else
        this.setState({
            enteredText:inp,
            resName:nameMatched
        })
    }
    detailPage1 = (val,item)=>{
        this.setState({
            resName:[]
        })
        this.props.detailPage2(val,item)
    }
  render() {
    return (
        <div>
      <div className='searchResult'>
        <input className='searchInput' value={this.state.enteredText} onChange={this.inputHandler} placeholder='search restraunt,area,cuisine'/>
        <div className='resultLists'>
            <SearchResult userHint={this.state.resName}
            detailPage={this.detailPage1}/>
        </div>
      </div>
      <div className='print_arr'>
      <HomeSub detailPage={this.detailPage1}/>
      </div>
      </div>
    )
  }
}

export default Home