// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from '@mui/material/Button'; //this button is itself a component.

function App() {

  let handleClick = () =>{
    console.log("Button was Clicked");
  }

  return (
    <>
      <h2>React Demo</h2>
      {/* <Button/> */}
      <Button variant="contained" onClick={handleClick}>Text</Button>
      <br></br>
      <br></br>
      <Button variant="contained" disabled onClick={handleClick}>Text2</Button>
      <br></br>
      <br></br>
      <Button variant="contained" color="error" onClick={handleClick}>Error</Button>
      <br></br>
      <br></br>
      <Button variant="contained" color="success" onClick={handleClick}>Success</Button>
    </>
  )
}

export default App
