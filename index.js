import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// reportWebVitals();
class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:''
    };


  
  };

  render(){
    return(
    <form id="main">

      <label>Name:</label><br/>
      <input type="text" />
      <br/>
      <label>Age:</label><br/>
      <input type="number" />
      <br/>
      <label>E-mail:</label><br/>
      <input type="email"  />
      <br/>
      <label>Password:</label><br/>
      <input type="password"  />
      <br/>
      <label>Confirm password:</label><br/>
      <input type="password"  /><br/>

      <button type='submit' >Submit</button>
    </form>
    )
  }
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form/>)