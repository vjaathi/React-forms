
import React, { useState } from 'react';
import { Basic } from './basicForm/Basic';
import { Advance } from './advance/Advance';
import "./app.css"
// import MyRegister from './myRegis/MyRegister';
// import Register from './registerform/Register';




function App() {

  const [view,setView] = useState("basic")

  return (
    <div>
      <div className="app">
        <nav>
          <h2 onClick={() => setView("basic")} 
          style={{ color : view === "basic" ? "white" : ""}}  
          >Basic</h2>
          <h2 onClick={() => setView('advance')}
          style={{color : view === "advance" ? "white" : ""}}  
          >Advance</h2>
        </nav>
        {view === "basic" ? <Basic /> : <Advance /> }
      </div>
      {/* <MyRegister />
      <Register /> */}
    </div>
  )
}

export default App
