import React from 'react'

function FutureScope() {
  function showPopup(){
    var overlay_div=document.getElementById('overlay_div')
    var popup_msg=document.getElementById('popup_msg')
    overlay_div.style.display="block"
    popup_msg.style.display="block"
  }
  function closePopup(){
    var overlay_div=document.getElementById('overlay_div')
    var popup_msg=document.getElementById('popup_msg')
    overlay_div.style.display="none"
    popup_msg.style.display="none"
  }
  return (
    <div>
        <div id='future-scope'>
            <img id='future-img' src='/images/future-scope.jpg' alt='Developers developing website'/>
            <img id='arrow-img' src='/images/right-arrow.jpg' alt='Direction right'/>
            <button id='future-scope-popup' onClick={showPopup}><h2>Future Scope</h2></button>
            
        </div>
        <div id='overlay_div'></div>
          <div id='popup_msg'>
            <h3>Future Scope :</h3><br/>
            <p>Currently, the customer details and the order information are logged in the console using React states. In the future, this can be extended by connecting to a backend so that the shop owner can receive the customer details in a database or email.</p><br/>
            <button id='popup_ok_button' onClick={closePopup}>OK</button>
          </div>
          <br/>

        
    </div>
  )
}

export default FutureScope