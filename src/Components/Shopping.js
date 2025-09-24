import React, { useState } from 'react'
import dayjs from "dayjs";


function Shopping() {
    var [name, setName] = useState('')
    var [phone, setPhone] = useState('')
    var [product, setProduct] = useState('')
    function submitData(e) {
        e.preventDefault()
        if (name === '' || phone === '' || product === '') {
            alert('Enter all the credentials.')
        }
        else {
            showPopup()
        }
        console.log('Name:' + name)
        console.log('Phone number:' + phone)
        console.log('Product name:' + product)
    }
    function logInfo() {
        console.log('Customer ordered date and time information:')
        console.log(dayjs().format("DD-MM-YYYY HH:mm:ss"));
    }
    function showPopup() {
        var overlay_div = document.getElementById('overlay_div')
        var popup_msg = document.getElementById('popup_msg1')
        overlay_div.style.display = "block"
        popup_msg.style.display = "block"
    }
    function closePopup() {
        var overlay_div = document.getElementById('overlay_div')
        var popup_msg = document.getElementById('popup_msg1')
        overlay_div.style.display = "none"
        popup_msg.style.display = "none"
    }
    function clickFunctions() {
        logInfo()
    }
    return (
        <div>
            <div id='shopping-section'>
                <h1>Shopping section - Buy now !!! 🛍️</h1>
                <h3>✒️Kindly enter your details and your desired product name.</h3>
                <h3>📞We'll reach you immediately.</h3>
                <form id='shop-form' onSubmit={submitData}>
                    <label htmlFor='name'>Enter your name :</label><br />
                    <input type='text' autoComplete='name' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                    <label htmlFor='phone'>Enter mobile number :</label><br />
                    <input type='tel' autoComplete='phone' id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br />
                    <label htmlFor='product'>Enter product name :</label><br />
                    <input type='text' autoComplete='product' id='product' name='product' value={product} onChange={(e) => setProduct(e.target.value)} /><br /><br />
                    <button type='submit' onClick={clickFunctions}>SUBMIT DATA</button>
                </form>
                <div id='overlay_div'></div>
                <div id='popup_msg1'>
                    <h3>📦Thanks for ordering !!!</h3>
                    <h3>☎️We will contact you soon!!!</h3>
                    <button id='popup_ok_button' onClick={closePopup}>OK</button>
                </div>
            </div>
        </div>
    )
}

export default Shopping