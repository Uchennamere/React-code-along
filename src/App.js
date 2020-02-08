// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// const name = "Onuegbu Uchenna Agams"

// function App() {
  // return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           <Welcome/>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {name}
//         </a>
//       </header>
//     </div>
  // );
// }

// class Welcome extends Component {
//   render() {
//     return(
//       <p>Uchenna
//         <MyFunc/>
//       </p>
      
    // )
  // }

// }

// const MyFunc = () => <p>HIIII</p>


// export default App;



import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './map.gif';
// We can write a javasccript code in react and parse it using {}
//  const welcome = "Welcome to React";

class App extends Component {
constructor(props){
  super(props);
  console.log('constructor')
}

componentWillMount(){
  console.log('will mount') 
}
componentDidMount(){
  console.log('mounted')
}

  state = {
    toggle: true,
    newText: "This is the new text",
    backgroundColor: "#282c34",
    newLogo: logo
  }

  

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  
  newText =()=> {
    this.setState({
      newText: !this.state.newText
    })
  }
//changecolor function using ternary operat0r, this returns true or false. the ? 
//checks if the condition if true and the : let us toggle btw the two condition
  changeColor = () => {
    this.state.backgroundColor === "#282c34" ?
    this.setState({backgroundColor: 'red' }) :
    this.setState({backgroundColor: "#282c34"})
  }

  changeLogo =()=> {
    this.state.newLogo === logo ?
    this.setState({newLogo:Logo }):
    this.setState({newLogo:logo}) 
  }

  render (){
    return (

      <div className="App" >
        <header className="App-header" style={{backgroundColor: this.state.backgroundColor}}>
          <img src={this.state.newLogo} className="App-logo" alt="logo" />
          {/* -----------------We then render the Welcome component (line 62) -------------*/}
           {/* ----in line 63, TEXT is the prop on Welcome is defined */}
          <Welcome text="Welcome to Using Props"/> 
          {this.state.newText &&
         <h1>THIS IS THE NEW TEXT</h1>
          }
         
          {/*The Welcome variable declared in line 53 is parsed using {}  */}
          {/* <h1 className="App-tittle">{Welcome}</h1> */}
          <p className="App-intro">
          To get started, edit <code>src?app.js</code> and save to reload
        </p>
        {this.state.toggle &&
        <p> This should show and hide</p> 
        }
        <button onClick={this.toggle}>Show / Hide</button>
        <button onClick={this.newText}>New Text</button>
        <button onClick={this.changeColor}> New Color</button>
        <button onClick={this.changeLogo}> New Logo</button>
        </header>
        
      </div>
    );
  } 
}

// Creating our first component: Welcome
class Welcome extends Component {
  render () {
     const {text} = this.props
    return(
      //----------Accessing the TEXT prop that  
      <h1 className="App-tittle">{this.props.text}</h1>
    );
  }
}




export default App;