import './App.css';
import './ResponsiveCode.css'
import Collections from './Collections';
import Contact from './Contact';
import FutureScope from './FutureScope';
import Services from './Services';
import Shopping from './Shopping';
import Advertisement from './Advertisement';

function Home() {

  return (
    <div>
      <div id='home'>
        <div className="header">
          <h1>🛍️Metro Shopping</h1>
          <div id="navbar">
            <p><a href="#home">HOME</a></p>
            <p><a href="#collections">COLLECTIONS</a></p>
            <p><a href="#contact">CONTACT</a></p>
          </div>
        </div>
        <header>
          <div id="intro-content">
            <h1>Level up your style📈</h1>
            <p>With our stunning Collections👗</p><br />
            <a href="#collections">
              <button id="shop-now-btn">Shop Now</button>
            </a>

          </div>
          <div id="intro-img-div">
            <img src="/images/intro-images/intro-fashion-image.jpg" alt='' />
          </div>

        </header>
        <hr />
        <Services />
        <Collections />
        <Advertisement />
        <Shopping />
        <FutureScope />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
