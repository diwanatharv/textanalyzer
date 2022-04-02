import Navbar from './components/Navbar'
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import { Route,HashRouter} from 'react-router-dom'
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
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
      {/* 
    <Switch>
        <div className="container my-3">
         
        </div>
        <div className="container">
          
        </div>
        </Switch> */}
      <HashRouter>
        <Navbar about="About" mode={mode} togglemode={togglemode} text={text} color={color} />
        <Alert alert={alert} />
       
        <div className="container my-3">
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route  path="/about" exact> <About /></Route>
            <Route path="/" exact><TextForm heading="Enter the text to Analyze" mode={mode} showalert={showalert} /></Route>
        
        </div>
     
      </HashRouter>
    </>
  );
}

export default App;
