import React, { useState } from 'react'

export default function Textform(props) {
    const handlechange = (e) => {
        setText(e.target.value);
        console.log("changed");
        
    }
    const handleup = () => {
        let newtest = text.toUpperCase();
        setText(newtest);   
    }
    const clear = () =>{
        setText("")
    }
    const lower = ()=>{
        let low = text.toLowerCase();
        setText(low)
    }

   const [text, setText] = useState('enter the text here')
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="6"   value={text} onChange={handlechange}></textarea>

                <button type="button" className="btn btn-primary mx-3 my-2" onClick={lower}>Upper to Lower</button>
                <button type="button" className="btn btn-success mx-3 my-2" onClick={handleup}>Lowert to Upper</button>
                <button type="button" className="btn btn-success mx-3 my-2" onClick={clear}>Clear</button>
            </div>
        </>
    )
}
