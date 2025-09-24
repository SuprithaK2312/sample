import React, { useState } from 'react'
import './App.css'
import Kurti from './Products/Kurti'
import Chudidhar from './Products/Chudidhar'
import Anarkali from './Products/Anarkali'
import EthnicSkirts from './Products/EthnicSkirts'
import SearchBar from './SearchBar'
import Products from './Products/Products'

function Collections() {
    var [category, setCategory] = useState('')
    return (
        <div>
            <section id="collections">
                <h1>🛬New Arrivals</h1><br />
                <SearchBar />
                <Products />
                <div id='category-btns'>
                    <button onClick={() => setCategory('chudidhar')}>
                        <div id='category-btn'>
                            <img src='/images/chudidhar-images/chudidhar2.jpg' alt='' /><br /><br />
                            <h2>CHUDIDHAR</h2>
                        </div>
                    </button>
                    <button onClick={() => setCategory('anarkali')}>
                        <div id='category-btn'>
                            <img src='/images/anarkali-images/anarkali8.jpg' alt='' /><br /><br />
                            <h2>ANARKALI</h2>
                        </div>
                    </button>
                    <button onClick={() => setCategory('kurti')}>
                        <div id='category-btn'>
                            <img src='/images/kurti-images/product4.jpg' alt='' /><br /><br />
                            <h2>KURTI</h2>
                        </div>
                    </button>

                    <button onClick={() => setCategory('ethnicSkirts')}>
                        <div id='category-btn'>
                            <img src='/images/ethinic-skirts-images/skirt8.webp' alt='' /><br /><br />
                            <h2>ETHNIC SKIRTS</h2>
                        </div>
                    </button>
                </div>
                {category === 'kurti' && (
                    <div>
                        <Kurti />
                    </div>
                )}
                {category === 'chudidhar' && (
                    <div>
                        <Chudidhar />
                    </div>
                )}
                {category === 'anarkali' && (
                    <div>
                        <Anarkali />
                    </div>
                )}
                {category === 'ethnicSkirts' && (
                    <div>
                        <EthnicSkirts />
                    </div>
                )}
            </section >
            <hr />
        </div >
    )
}

export default Collections