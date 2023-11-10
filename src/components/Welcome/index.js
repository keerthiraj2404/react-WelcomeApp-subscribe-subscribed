// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {status: true}

  onSubscribe = () => {
    const {status} = this.state
    if (status === true) {
      this.setState(prevState => ({status: !prevState.status}))
    } else {
      this.setState(prevState => ({status: !prevState.status}))
    }
  }

  render() {
    const {status} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy learning</p>
        <button className="button" type="button" onClick={this.onSubscribe}>
          {status ? 'Subscribe' : 'Subscribed'}
        </button>
      </div>
    )
  }
}

export default Welcome
