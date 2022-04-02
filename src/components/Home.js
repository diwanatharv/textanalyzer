import React from 'react'
import Navbar from './Navbar'
import TextForm from './TextForm'
import Alert from './Alert';
import { useState } from 'react';
export default function Home() {
  const [mode, setmode] = useState("light");
  const [text, settext] = useState("dark mode")
  const [color, setcolor] = useState("dark");
  const [alert, setalert] = useState(null)
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode("dark");
      settext("light mode")
      setcolor("light");
      document.body.style.backgroundColor = '#042743';
      showalert("dark mode has been enabled", "success");
    }
    else {
      setmode("light");
      settext("dark mode")
      setcolor("dark");
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enabled", "danger");
    }
  }
  return (
    <>
   <Navbar about="About" mode={mode} togglemode={togglemode} text={text} color={color} />
   <Alert alert={alert} />
   <TextForm heading="Enter the text to Analyze" mode={mode} showalert={showalert} />
    </>
  )
}
