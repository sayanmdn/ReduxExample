import React, { Component } from 'react';
// import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import CounterApp from './component'
import ReduxDemo from './reduxDemo'
import ReduxDemo2 from './ReduxDemo2.js'
import ReduxDemoCombine from './reduxDemoCombine.js'
// import { updateUser } from './actions/user-action'
import Contact from './contact'
import { Route, Link } from 'react-router-dom'
class App extends Component {

  // constructor (props){
  //   super(props)
  //   this.onUpdateUser = this.onUpdateUser.bind(this)
  // }
  // onUpdateUser (){
  //   this.props.onUpdateUser('Sammy')
  // }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <Route exact path='/contact' component={Contact} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          <a href='http://localhost:3000'>
            <code>Link to Home</code>
          </a>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CounterApp />
        </div>
        <br></br>
        <div>
          <ReduxDemo />
        </div>
        <br></br>
        <div>
          <ReduxDemo2 />
        </div>
        <br></br>
        <div>
          <ReduxDemoCombine />
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   products: state.products,
//   user: state.user
// })
// const mapActionsToProps = {
//  onUpdateUser : updateUser
// }
export default App;
// connect(mapStateToProps, mapActionsToProps)