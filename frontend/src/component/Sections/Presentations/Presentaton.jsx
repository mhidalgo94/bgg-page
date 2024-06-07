import './styles.css';
import img1 from '../../../assets/svg/backgound-card.svg';
import img2 from '../../../assets/images/card-1.jpeg';
import img3 from '../../../assets/images/card-2.jpg';
import img4 from '../../../assets/images/card-4.jpeg';
import img5 from '../../../assets/images/card-5.jpeg';
import img6 from '../../../assets/images/card-6.jpeg';

import {motion, transform} from 'framer-motion';



// Var for animation
const title = {
    initial :{
        top: '40px',
        position: 'relative',
        opacity: 0
    },
    animate:{
        top: '0px',   
        opacity: 1,
        transition: {
            type: "easy",
            duration: .5,
            delay: 0.2

        }
    }
}

const title2 = {
    initial :{
        top: '40px',
        position: 'relative',
        opacity: 0
    },
    animate:{
        top: '0px',   
        opacity: 1,
        transition: {
            type: "easy",
            duration: .5,
            delay: 0.4

        }
    }
}

const card = {
    initial :{
        scale: .5,
        opacity: 0
    },
    animate:{  
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
        }
    },
    hover:{
        scale: 1.04, 
        transition:{
            type: "spring",
            // delay: 0,

        }
    }
}



export default function Presentaton() {
  return (
    <section className='presentations'>
        <section className='section-title'>
            <motion.h1 className='title-presentation' initial={title.initial} whileInView={title.animate} >Small actions,</motion.h1>
            <motion.h2 className='subtitle-presentation' initial={title2.initial} whileInView={title2.animate}> Big impacts.</motion.h2>
        </section>
        <div className='cards'>
            <motion.div className='card-only-img' initial={card.initial} whileInView={card.animate} whileHover={card.hover}>
                <img src={img2} alt="THE WORLD NEEDS YOU TO SHOW UP TODAY. You are POWERFUL, you are VALUABLE, and what you believe CHANGES THE WORLD." />
            </motion.div >
            <motion.div className='card' style={{backgroundColor:"var(--accent-light-3)"}} initial={card.initial} whileHover={card.hover} whileInView={card.animate}>
                <h2 className='card-title' style={{color:'var(--accent-dark)'}} >Inspiring change, <br/>transforming beaches</h2>
                <p className='card-text'>Beaches Go Green, a 501(c)(3) nonprofit, aims to create awareness and spread education about the waste that we produce and how it impacts our planet.</p>
                <img className='card-img' src={img1} alt="Background svg" />
            </motion.div>
            <motion.div className='card-only-img' initial={card.initial} whileHover={card.hover} whileInView={card.animate} >
                <img src={img3} alt="The bitterness of poor quality remains long after the sweetness of low price is forgotten." />
            </motion.div>

            {/* ----- */}
            
            <motion.div className='card'  style={{backgroundColor:"var(--light-purple)"}} initial={card.initial} whileInView={card.animate} whileHover={card.hover}>
                <h2 className='card-title' style={{color:"var(--dark-pruple)"}}>Get Involved <br/> With Us</h2>
                <p className='card-text'>Volunteer time commitments vary and can be as much or as little as you desire. Volunteer opportunities vary by event. Sign up for upcoming volunteer opportunities!</p>
                <img className='card-img' src={img1} alt="Img Presentation 1" />
            </motion.div>

            <motion.div className='card-only-img' initial={card.initial} whileInView={card.animate} whileHover={card.hover}>
                <img src={img4} alt="This planet needs you to give a shit" />
            </motion.div>

            <motion.div className='card' style={{backgroundColor:"var(--light-orange)"}}initial={card.initial} whileInView={card.animate} whileHover={card.hover}>
                <h2 className='card-title' style={{color:'var(--dark-orange)'}} >Come to our events</h2>
                <p className='card-text'>Beaches Go Green, a 501(c)(3) nonprofit, aims to create awareness and spread education about the waste that we produce and how it impacts our planet.</p>
                <img className='card-img' src={img1} alt="Background svg" />

            </motion.div>

            {/* ----- */}
            <motion.div className='card-only-img'initial={card.initial} whileInView={card.animate} whileHover={card.hover}>
                <img src={img5} alt="Do good shit" />
            </motion.div>
            <motion.div className='card' style={{backgroundColor:"var(--light-red)"}}initial={card.initial} whileInView={card.animate} whileHover={card.hover}>
                <h2 className='card-title' style={{color:'var(--dark-red)'}} >Support our mission</h2>
                <p className='card-text'>Your contribution helps support our mission of spreading awareness and education. When you shop at our store, Every purchase funds education and awareness for your local community and beyond!</p>
                <img className='card-img' src={img1} alt="Img Presentation 1" />
            </motion.div>
            <motion.div className='card-only-img'initial={card.initial} whileInView={card.animate} whileHover={card.hover}>
                <img src={img6} alt="Do good shit" />
            </motion.div>
        </div>
    
    </section>
  )
}
