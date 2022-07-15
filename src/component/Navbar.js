import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <a href='#2' className='appName'>Delicious</a>
        <ul>
            <li>
                <a href='#2' className='home'>Home</a>
            </li>
            <li>
                <a href='#2' className='logout'>LogOut</a>
            </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar