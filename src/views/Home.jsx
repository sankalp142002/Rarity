import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../css/home.css'
import l1 from "../assets/tradingv.png"
import l2 from "../assets/ps.png"
import l3 from "../assets/react.png"
import l4 from "../assets/pyth.png"
import l5 from "../assets/wordp.png"

function Home() {
  return (
    <div>
      <Nav/>

      <div className='heroSection'>
<div className="heroSectionInfo">
  <h1>Welcome to rarity</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quisquam quam? Labore ea commodi magnam error omnis sed, nobis modi nulla suscipit iusto assumenda?</p>
  <div className='buttons'>
  <button className='button'>
  <span className="text">Get Started</span>
</button>
<button className='button'>
  <span className="text">Learn More</span>
</button>
  </div>


</div>
      </div>

      <div className='homeServices'>
        <h1>Services we provide?</h1>
        <div className='serviceCards'>
        <div className="card">
    <h2>CARD</h2>
</div><div className="card">
    <h2>CARD</h2>
</div><div className="card">
    <h2>CARD</h2>
</div><div className="card">
    <h2>CARD</h2>
</div>
<div className="card">
    <h2>CARD</h2>
</div>
        </div>
      </div>



      <div className='homeAbout'>
        <h2>what we do?</h2>
<div className='homeAboutInfo'>
<p>Content : Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt maiores esse tenetur amet error ex? Non fugiat tempora harum autem nemo expedita iure? Molestias blanditiis similique aliquam tempora iure consequatur, delectus quam dolorem reprehenderit sed et animi sit optio corporis rerum voluptas voluptatibus dolorum provident quod quaerat possimus beatae?</p>
        <div className="line"></div>
        <p>Content : Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt maiores esse tenetur amet error ex? Non fugiat tempora harum autem nemo expedita iure? Molestias blanditiis similique aliquam tempora iure consequatur, delectus quam dolorem reprehenderit sed et animi sit optio corporis rerum voluptas voluptatibus dolorum provident quod quaerat possimus beatae?</p>
        <div className="line"></div>
        <p>Content : Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt maiores esse tenetur amet error ex? Non fugiat tempora harum autem nemo expedita iure? Molestias blanditiis similique aliquam tempora iure consequatur, delectus quam dolorem reprehenderit sed et animi sit optio corporis rerum voluptas voluptatibus dolorum provident quod quaerat possimus beatae?</p>
        
</div>
        <button className='button'>
  <span className="text">Get to Know Us!</span>
</button>

      </div>
      
      
      <div className='homeTechStack'>
        <h2>Technologies we use!</h2>

        <div className="homeTechContainer">
        <div className='homeTechImg'>
          <img src={l1} alt="" />
        </div>
        <div className='homeTechImg'>
        <img src={l2} alt="" />
        </div>
        <div className='homeTechImg'>
        <img src={l3} alt="" />
        </div>
        <div className='homeTechImg'>
        <img src={l4} alt="" />
        </div>
        <div className='homeTechImg'>
        <img src={l5} alt="" />
        </div>

        </div>

      </div>

      <div className='homeFAQ'>
        <h2>Common Questions?</h2>
      </div>


      <Footer />
      
    </div>
  )
}

export default Home
