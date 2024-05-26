import img1 from '../../../assets/svg/backgound-card.svg';
import './styles.css';

import img2 from '../../../assets/images/card-1.jpeg';
import img3 from '../../../assets/images/card-2.jpg';
import img4 from '../../../assets/images/card-4.jpeg';
import img5 from '../../../assets/images/card-5.jpeg';
import img6 from '../../../assets/images/card-6.jpeg';

export default function Presentaton() {
  return (
    <section className='presentations'>
        <section className='section-title'>
             <h1 className='title-presentation' >Changing Nature</h1>
            <h2 className='subtitle-presentation'>Uniting Hearts</h2>
        </section>
        <div className='cards'>
            <div className='card-only-img'>
                <img src={img2} alt="THE WORLD NEEDS YOU TO SHOW UP TODAY. You are POWERFUL, you are VALUABLE, and what you believe CHANGES THE WORLD." />
            </div>
            <div className='card' style={{backgroundColor:"var(--accent-light-3)"}}>
                <h2 className='card-title' style={{color:'var(--accent-dark)'}} >Inspiring change, <br/>transforming beaches</h2>
                <p className='card-text'>Beaches Go Green, a 501(c)(3) nonprofit, aims to create awareness and spread education about the waste that we produce and how it impacts our planet.</p>
                <img className='card-img' src={img1} alt="Background svg" />
            </div>
            <div className='card-only-img'>
                <img src={img3} alt="The bitterness of poor quality remains long after the sweetness of low price is forgotten." />
            </div>

            {/* ----- */}
            
            <div className='card'  style={{backgroundColor:"var(--light-purple)"}}>
                <h3 className='card-title' style={{color:"var(--dark-pruple)"}}>Get Involved <br/> With Us</h3>
                <p className='card-text'>Volunteer time commitments vary and can be as much or as little as you desire. Volunteer opportunities vary by event. Sign up for upcoming volunteer opportunities!</p>
                <img className='card-img' src={img1} alt="Img Presentation 1" />
            </div>

            <div className='card-only-img'>
                <img src={img4} alt="This planet needs you to give a shit" />
            </div>

            <div className='card' style={{backgroundColor:"var(--light-orange)"}}>
                <h2 className='card-title' style={{color:'var(--dark-orange)'}} >Come to our events</h2>
                <p className='card-text'>Beaches Go Green, a 501(c)(3) nonprofit, aims to create awareness and spread education about the waste that we produce and how it impacts our planet.</p>
                <img className='card-img' src={img1} alt="Background svg" />

            </div>

            {/* ----- */}
            <div className='card-only-img'>
                <img src={img5} alt="Do good shit" />
            </div>
            <div className='card' style={{backgroundColor:"var(--light-red)"}}>
                <h2 className='card-title' style={{color:'var(--dark-red)'}} >Support our mission</h2>
                <p className='card-text'>Your contribution helps support our mission of spreading awareness and education. When you shop at our store, Every purchase funds education and awareness for your local community and beyond!</p>
                <img className='card-img' src={img1} alt="Img Presentation 1" />
            </div>
            <div className='card-only-img'>
                <img src={img6} alt="Do good shit" />
            </div>
        </div>
    
    </section>
  )
}
