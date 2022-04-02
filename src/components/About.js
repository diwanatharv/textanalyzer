import React,{useState} from 'react'
export default function About() {
    const [mystyle, setmystyle] = useState({
        color:"black",
        backgroundColor:"white",
    })
    const [text, settext] = useState("Enable dark mode")
    const [btnclr, setbtnclr] = useState("dark")
     const togglestyle =()=>{
     if(mystyle.color==='black'){
        setmystyle({
            color:"white",
            backgroundColor:"black"
        })
        settext("enable light mode")
        setbtnclr("danger");
        
     }
     else{
        setmystyle({
            color:"black",
            backgroundColor:"white"
            
        }) 
        settext("Enable dark mode")
        setbtnclr("dark")
     }
    }
  return (
    
 <>

 <div className="accordion" id="accordionExample" style={mystyle}>
 <h2>About Us</h2>
  <div className="accordion-item"style={mystyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
      Textutils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
Textutils is a free text Analyzer and text Converter.it helps the user to  convert the texts into the users desired form .it is free to use and 
browser compatible.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
      Anant Dewangan-Nagri ka maalik
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
      Coming from very Humble background Anant  is a billionare  topper and is Currently Pursuing engineering .He has been mentioned in many reels  and also many stickers have been made .He is a living legend and many people aspire to become like him. Anant has a iPhone worth 1.5lakh.he is famous among his classmates and a super cool guy .He is a active leader .he has helped many students in the hostel.he is very honest and very good at playing sports.and has a luxurious house.
      </div>
    </div>
  </div>

</div>
<div className="container my-5">
  <button type="button" className={`btn btn-${btnclr}`} onClick={togglestyle}>{text}</button>
  </div>

 </>
  )
}
