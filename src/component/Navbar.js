import React, { Component } from 'react'

export class Navbar extends Component {
  homeHandler = (event)=>{
    event.preventDefault();
    this.props.home();
  }
  logoutHandler =(event)=>{
    event.preventDefault();
    this.props.logout();
  }
  render() {
    return (
      <nav className='navbar'>
        <a href='#2' className='appName'>Delicious</a>
        <ul>
            <li>
                <a href='#2' className='home' onClick={this.homeHandler}>Home</a>
            </li>
            <li>
                <a href='#2' className='logout' onClick={this.logoutHandler}>LogOut</a>
            </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar