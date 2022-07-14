import React, { Component } from 'react'
import Home from './Home'
import Page from './Page'
import Data from './Data.json'
import Login from './Login'

export class Restraunt extends Component {
    state = {
        id:0,
        page:'',
        pageArr:[],
        image:'',
        restDetail:[],
        review:''
    }
    detail = (val,item1)=>{
        var c
        var p
        var r
        Object.keys(Data).map((item)=>{
            for(let i =0;i<10;i++){
                if((Data[item][i].id)==val){
                    c = Data[item][i].operating_hours
                    p= Data[item][i].photograph
                    r= Data[item][i].reviews
                break;
                }
            }
        })
        // c.map((item,key)=>
        // console.log(item))
        console.log(p)
        this.setState({
            page:1,
            id:val,
            pageArr:c,
            image:p,
            restDetail:item1,
            review:r
        })
    }
    checkSearchPage = ()=>{
        this.setState({
            page:0
        })
    }
  render() {
    return (
      <div>
        {
            this.state.page==='' ? <Login goToSearchPage={this.checkSearchPage}/> : null
        }
        {
            this.state.page===0 ? <Home detailPage2={this.detail}/> :null
        }
        {
        this.state.page === 1 ? <Page pageid={this.state.pageArr}
        img ={this.state.image}
        rest={this.state.restDetail}
        rev={this.state.review}/> : null
        }
      </div>
    )
  }
}

export default Restraunt