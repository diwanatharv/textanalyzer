import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, settext] = useState("enter your text");

  const handleupperclick = () => {
    let newtxt = text.toUpperCase();
    settext(newtxt);
    props.showalert("Converted to Upper Case", "success")
  }
  const handlelowerclick = () => {
    let newtxt = text.toLowerCase();
    settext(newtxt);
    props.showalert("Converted to Lower Case", "success")
  }
  const handleclearclick = () => {
    settext("");
    props.showalert("Cleared Text", "success")
  }
  const handledefaulttext = () => {
    if (text === "enter your text") {
      settext("");
    }
  }
  const handleonchange = (event) => {
    settext(event.target.value);
  }
  const handleCopyclick = () => {
    var copyText = document.getElementById("mybox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    props.showalert("Copied to Clipboard", "success")
  }
  const handleremoveclick = () => {
    let newtext = text.replace(/\s+/g, ' ').trim()
    settext(newtext);
    props.showalert("Removed Space", "success")
  }
  return (
    <>

      <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="mybox" rows="10" value={text} onChange={handleonchange} onMouseMove={handledefaulttext} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleupperclick}>Convert To UpperCase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handlelowerclick}>Convert To LowerCase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleclearclick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyclick}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleremoveclick}>Remove Extra Space</button>

      <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Review  </h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}words {text.length}charachters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter something to preview"}</p>
      </div>

    </>
  )
}
//alawys use settext to  change the text not the original text
