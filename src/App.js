import React from 'react'
import './App.css';
import { useState } from 'react'
import Form from './components/Form.js'

function App() {


  function hexToRGB(hex) {
    hex = '0x' + hex
    let r = (hex >> 16) & 0xFF
    let g = (hex >> 8) & 0xFF
    let b = hex & 0xFF
    return `rgb(${r}, ${g}, ${b})`
  }

  const [form, setForm] = useState({
    input: '',
    rgb: ''
  })
  const updateColor = event => {
    setForm(() => ({
      input: event.trim(),
      rgb: event.length === 7 ? hexToRGB(event) : ''
    }))

  }
  return (
    <div className="container" style={{ background: form.rgb }} >
      <Form onChange={updateColor} value={form.input} rgb={form.rgb} />
    </ div>
  );
}

export default App;
