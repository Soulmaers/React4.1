import React from 'react'
import './App.css';

import Form from './components/Form.js'
import hexToRGB from './components/utils/HexToRGB'
function App() {

  const color = {
    hex: '',
    rgb: '',
    backgroundColor: '#b0acac'
  }

  return (

    <Form color={color} hexToRGB={hexToRGB} />
  )

}

export default App;
