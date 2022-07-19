import React, { Component } from 'react'
import Home from './Home'
import Page from './Page'
import Data from './Data.json'
import Login from './Login'
import Navbar from './Navbar'

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
            page:'page',
            id:val,
            pageArr:c,
            image:p,
            restDetail:item1,
            review:r
        })
    }
    checkSearchPage = ()=>{
        this.setState({
            page:'home'
        })
    }
    goToHome =(event)=>{
        this.setState({
            page:'home'
        })
    }
    goToLogin =(event)=>{
        this.setState({
            page:''
        })
    }
  render() {
    return (
      <div>
        {
        this.state.page==='home'|| this.state.page==='page' ? <Navbar home={this.goToHome}
        logout={this.goToLogin}/> : null
        }
        {
            this.state.page==='' ? <Login goToSearchPage={this.checkSearchPage}/> : null
        }
        {
            this.state.page==='home' ? <Home detailPage2={this.detail}/> :null
        }
        {
        this.state.page === 'page' ? <Page pageid={this.state.pageArr}
        img ={this.state.image}
        rest={this.state.restDetail}
        rev={this.state.review}/> : null
        }
      </div>
    )
  }
}

export default Restraunt