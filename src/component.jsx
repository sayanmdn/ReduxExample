import React, {Component} from 'react'

class Header extends Component {
    constructor (props){
        super (props)
        this.state = {
            count : 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.displayChange = this.displayChange.bind(this)
    }
    handleChange = () => {
        this.setState({
            count : this.state.count +1
        })
    }
    displayChange = () =>{
        return (this.state.count)
    }
    render() {
       return (
          <div>
             <h1>Header</h1>
             <h2>Number of Count is {this.displayChange()}</h2>
             <button onClick={this.handleChange}>Add Count</button>
          </div>
       );
    }
  }

export default Header;