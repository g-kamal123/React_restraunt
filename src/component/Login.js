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
        color:'',
        registermsg:'',
        regcolor:'',
        signUpcnfPass:''
    }
    registerHandler = (event)=>{
        event.preventDefault()
        this.setState({
            login:'register'
        })
    }
    registerDataHandler = (event)=>{
        event.preventDefault()
        if(this.state.signUpEmail==='' || this.state.signUpPass==='' || this.state.signUpcnfPass===''){
            var alert = 'Enter all the fields';
            this.setState({
                registermsg:alert,
                regcolor:'red',
                login:'register'
            })
            return
        }
        if(this.state.passwordMatched==='Password Not Matched'){
            return
        }
        var arr = [...this.state.registeredUserArray]
        var inp = {email:this.state.signUpEmail,pass:this.state.signUpPass}
        arr = [...arr,inp]
        this.setState({
            registeredUserArray:arr,
            regcolor:'green',
            registermsg:'registered successfully',
            login:'register'
        })
        this.props.datareg(arr)
    }
    toLogin =(event)=>{
        event.preventDefault();
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
        this.props.array.map((item)=>{
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
            signUpEmail:inp,
            badCredential:''
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
            signUpcnfPass:inp,
            passwordMatched:match,
            color:color
        })
    }
  render() {
    return (
      <div className='login_background'>
        <marquee>**Get Delivery free for *first <b>3</b> orders</marquee>
      <div className='login'>
        <div className="sign">
      <span className="fast-flicker sm">DE</span><span className='sm'>lic</span><span class="flicker sm">iO</span><span className='sm'>us</span>
    </div>
        <div className='login_form'>
        <div className='textLogin'>Login/SignUp</div>
        {
            this.state.login ==='login' ? <>
            <span className='badcredentials'>{this.state.badCredential}</span>
            <form action='#'>
            <p>
                <label htmlFor='email'>Email:</label>
                <input id='email' type='email' onChange={this.loginEmailHandler}/>
            </p>
            <p>
                <label htmlFor='password'>Password:</label>
                <input id='password' type='password' onChange={this.loginPassHandler}/>
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
            this.state.login ==='register' ? <>
            <span className='badcredentials' style={{color:this.state.regcolor}}>{this.state.registermsg}</span>
            <form action='#' onSubmit={this.registerDataHandler}>
            <p>
                <label htmlFor='emailr'>Email:</label>
                <input id='emailr' type='email' onChange={this.signUpEmailHandler}/>
            </p>
            <p>
                <label htmlFor='passwordr'>Password:</label>
                <input id='passwordr' type='password' onChange={this.signUpPassHandler}/>
            </p>
            <p>
                <label htmlFor='passwordcr'>Confirm Password:</label>
                <input id='passwordcr' type='password' value={this.state.signUpcnfPass} onChange={this.cnfPassHandler}/>
                <p style={{color:this.state.color}}>{this.state.passwordMatched}</p>
            </p>
            <button type='submit'>Register</button>
            </form>
            <div>
                <a href='#12' onClick={this.toLogin}>Login</a>
            </div></> : null
        }
        </div>
      </div>
      </div>
    )
  }
}

export default Login