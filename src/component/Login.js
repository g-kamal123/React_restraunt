import React, { Component } from 'react'

export class Login extends Component {
    state = {
        login:'login',
        registeredUserArray:[{email:'kamal@gmail.com' , pass:'1234'}],
        loginEmail:'',
        loginPass:'',
        badCredential:'',
        signUpEmail:'',
        signUpPass:'',
        passwordMatched:'',
        color:''
    }
    registerHandler = (event)=>{
        event.preventDefault()
        this.setState({
            login:'register'
        })
    }
    registerDataHandler = (event)=>{
        this.setState({
            login:'login'
        })
    }
    loginEmailHandler = (event)=>{
        var inp = event.target.value
        this.setState({
            loginEmail:inp,
            badCredential:''
        })
    }
    loginPassHandler = (event)=>{
        var inp = event.target.value
        this.setState({
            loginPass:inp,
            badCredential:''
        })
    }
    loginHandler = (event)=>{
        event.preventDefault()
        var chk
        this.state.registeredUserArray.map((item)=>{
            if(this.state.loginEmail===item.email && this.state.loginPass===item.pass)
            chk = 1
        })
        if(chk==1)
        this.props.goToSearchPage()
        // alert('match')
        else{
        this.setState({
            badCredential:'Bad Credentials'
        })
        }
    }
    signUpEmailHandler =(event)=>{
        var inp = event.target.value
        this.setState({
            signUpEmail:inp
        })
    }
    signUpPassHandler =(event)=>{
        var inp = event.target.value
        this.setState({
            signUpPass:inp
        })
    }
    cnfPassHandler =(event)=>{
        var inp = event.target.value
        if(this.state.signUpPass===inp){
        var match = 'Password Matched'
        var color = 'green'
        }
        else {
            match = 'Password Not Matched'
            color = 'red'
        }
        this.setState({
            signUpEmail:inp,
            passwordMatched:match,
            color:color
        })
    }
  render() {
    return (
      <div className='login_background'>
        <marquee>**Get Delivery free for *first <b>3</b> orders</marquee>
      <div className='login'>
        <div class="sign">
      <span class="fast-flicker">DE</span>lic<span class="flicker">iO</span>us
    </div>
        <div className='login_form'>
        <div className='textLogin'>Login/SignUp</div>
        {
            this.state.login ==='login' ? <>
            <span className='badcredentials'>{this.state.badCredential}</span>
            <form action='#'>
            <p>
                <label htmlFor='email'>Email:</label>
                <input id='email' onChange={this.loginEmailHandler}/>
            </p>
            <p>
                <label htmlFor='password'>Password:</label>
                <input id='password' onChange={this.loginPassHandler}/>
            </p>
            <button onClick={this.loginHandler}>Login</button>
        </form>
        <div>
        <span>New User?</span>
        <a href='#1' onClick={this.registerHandler}>Register Here</a>
        </div>
        </>: null
        }
        {
            this.state.login ==='register' ? <><form action='#'>
            <p>
                <label htmlFor='emailr'>Email:</label>
                <input id='emailr' onChange={this.signUpEmailHandler}/>
            </p>
            <p>
                <label htmlFor='passwordr'>Password:</label>
                <input id='passwordr' onChange={this.signUpPassHandler}/>
            </p>
            <p>
                <label htmlFor='passwordcr'>Confirm Password:</label>
                <input id='passwordcr' onChange={this.cnfPassHandler}/>
                <p style={{color:this.state.color}}>{this.state.passwordMatched}</p>
            </p>
            <button onClick={this.registerDataHandler}>Register</button>
            </form></> : null
        }
        </div>
      </div>
      </div>
    )
  }
}

export default Login