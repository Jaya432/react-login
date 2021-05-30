import React, {Component} from 'react'
import Button from '../button'

import './styles.css'
/*import Form from '../Form' */
const listItems = [
  'Gardening',
  'Cooking',
  'DIY',
]

const arr = []

listItems.forEach((item, index) => {
  arr.push(<li key={index}>{item}</li>)
})

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
        username: '',
        email: '',
    }
}

submit = (event) => {
  event.preventDefault()
  console.log('submit button clicked')
  console.log('username is ', this.state.username)
  console.log('email is ', this.state.email)
}


onNameChange = (event) => {
  this.setState({ username: event.target.value })
}

onEmailChange = (event) => {
  this.setState({ email: event.target.value })
}

onclear=()=> {
  if(this.state.username === '' && this.state.email===''){
    document.getElementById('message').render= clearImmediate()
  }
  }

  state = {
      isLoggedIn: false,
  }

  login = () => {
      console.log('this', this)
      this.setState({ isLoggedIn: true })
  }

  render () {
      const { isLoggedIn } = this.state
      return (
        <div className="login-content">
           <div className="form-container">
             <form>
               <input type="text"  name="username" placeholder="username" value={this.state.username} onChange={this.onNameChange}onInput={this.onclear}></input> {<br/>}
               <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.onEmailChange} onInput={this.onclear}></input>
             </form>
             <Button name="Login" login={this.login} onClick={this.submit} />
              {<div className="welcome-container" id="message">{isLoggedIn ? <h1>Welcome {this.state.username} <br/> <br/> Hobbies {arr}</h1> : <h1>Please login</h1>}</div>}
            </div>
              
        </div>
         
      )
  }
}

export default Main