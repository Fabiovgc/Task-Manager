import { useState } from 'react'
import ItemsContainer from './ItemsContainer';
import './App.css'

function App() {

  return ( <div>
            <h1>Task Manager</h1>
            <ItemsContainer taskList={["Correr na Lagoa", "Malhar na Smart Fit"]} />
        </div> );
  
}

export default App
