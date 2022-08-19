import React from 'react'
import { useState } from "react";


export default function Form({ color, hexToRGB }) {
    const [input, setInput] = useState(color);
    const onChangeForm = (event) => {
        const { value } = event.target;
        if (value.length < 7) {
            setInput((prev) => ({ ...prev, hex: value }));
            return;
        }
        const rgbColor = hexToRGB(value);
        setInput(prev => ({
            ...prev,
            hex: value,
            rgb: rgbColor === null ? 'Ошибка' : `rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`
        }))
    }
    return (
        <div className="container" style={{ background: input.rgb }} >
            <input className="input" maxLength='7' onChange={onChangeForm} value={input.hex} />
            <div className="rgbOut" style={{ background: input.rgb }}> {input.rgb}  </div>
        </div>

    )
}