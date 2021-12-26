import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Container from './components/Container'


const handle=(name)=>{
  alert(name)
}




ReactDOM.render(
  <React.StrictMode>
    <Container/>
  </React.StrictMode>,
  document.getElementById("root")
);



