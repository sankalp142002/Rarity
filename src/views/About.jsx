import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../css/about.css'

function About() {
  return (
    <div>
      <Nav/>
<div className="aboutHero">
<iframe className='storySVG' src="https://lottie.host/embed/8ec23846-6b30-428e-a5b3-94720398bce7/s42Dm4E9ek.json"></iframe>
<div className="rarityStory">
  
    <h1>The Rarity Story</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla unde omnis, cum, optio commodi quo sequi quis expedita magni dolores fugit illum ad veritatis in minus sapiente aperiam blanditiis quam exercitationem mollitia corrupti sint consequatur velit. Architecto odio facere officia sint maiores, exercitationem doloremque? Quisquam deserunt minus cum officia.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, a. Asperiores nemo aliquid cumque odio fugit ab consequuntur magni rem similique expedita minus consectetur, tenetur eveniet architecto maiores esse? Inventore quod delectus quidem quibusdam, aliquid voluptate commodi fuga hic, reiciendis eos, tempora voluptatibus provident consequatur doloremque dolorum cum. Expedita, dolorem.
    </p>
  </div>
</div>

<div className="aboutMission">

  <div className='mission'>
  <h1>Our Mission</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, a. Asperiores nemo aliquid cumque odio fugit ab consequuntur magni rem similique expedita minus consectetur, tenetur eveniet architecto maiores esse? Inventore quod delectus quidem quibusdam, aliquid voluptate commodi fuga hic, reiciendis eos, tempora voluptatibus provident consequatur doloremque dolorum cum. Expedita, dolorem.
  </p>
  <button className='button'>
  <span className="text">Contact Us!</span>
</button>
  </div>

  <iframe className='missionSVG' src="https://lottie.host/embed/059000f1-b3f3-4444-8676-67b5307c789f/Ltt6QO96zq.json"></iframe>
  

</div>

<div className="aboutWho">
  <h1>How can we help you Grow?</h1>
  <div className='aboutWhoInfo'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur saepe mollitia animi adipisci nihil exercitationem quae architecto maiores nulla.</p>
    <div className='line'></div>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat placeat! Vitae officia modi facere porro quaerat nulla. Officiis, mollitia.
    </p>
    <div className='line'></div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam accusantium voluptates facere magnam, sed fugiat minima! Iusto, tenetur vitae.</p>
  </div>
</div>
      <Footer />
    </div>
  )
}

export default About
