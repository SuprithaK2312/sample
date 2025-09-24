import React from 'react'

function Contact() {
    return (
        <div>

            <div id='contact'>
                <br />
                <h1>Metro Shopping</h1><br />
                <h4>Shop Online with India's most trusted destination.</h4><br />
                <div id='contact-features'>
                    <div className='feature'>
                        <img src='/images/features-images/trust-feature.png' alt='handshake' /><br />
                        <h4>Building <br />Trust</h4>
                    </div>
                    <div className='feature'>
                        <img src='/images/features-images/brand-feature.jpg' alt='Brand' /><br />
                        <h4>Authentic<br /> Brands</h4>
                    </div>
                    <div className='feature'>
                        <img src='/images/features-images/payment-feature.jpg' alt='money' /><br />
                        <h4>Secure <br />Payments</h4>
                    </div>
                    <div className='feature'>
                        <img src='/images/features-images/return-feature.jpeg' alt='delivery returns' /><br />
                        <h4>Easy <br />Returns</h4>
                    </div>
                </div><br /><br />
                <div id='quick-links'>
                    <h3>
                        Quick Navigation:< br id='break' />< br id='break' />
                        <a id='link' href="#home">HOME</a>
                        <a id='link' href="#collections">COLLECTIONS</a>
                        <a id='link' href="#contact">CONTACT</a>
                    </h3><br />

                </div>
                <div id='navigation'>
                    <img className='icons' src='/images/icons/whatsapp-icon.png' alt='' />
                    <img className='icons' src='/images/icons/instagram-icon.png' alt='' />
                    <img className='icons' src='/images/icons/gmail-icon.png' alt='' />
                    <img className='icons' src='/images/icons/twitter-icon.png' alt='' />
                    <img className='icons' src='/images/icons/youtube-icon.png' alt='' />
                </div><br />

                <div className="contact-info">
                    <h4><p>📍 Location: Kumbakonam, India</p>
                        <p>📧 Email: info@example123.com</p>
                        <p>📞 Phone: +91 98765 43210</p></h4>
                </div><br /><br />
            </div>

        </div>
    )
}

export default Contact