import './styles.css';
import CardItems from './CardItems';
import FormContact from './FormContact';

import {motion} from 'framer-motion';



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

export default function ContactUs() {
  return (
    <section className='section-contactUs'>
        <div className='section-contactUs-title'>
            <motion.h1  initial={title.initial} whileInView={title.animate}>Let's begin <br/> <motion.span style={{color:'var(--primary-blue)'}}  initial={title2.initial} whileInView={title2.animate}>a Dialogue.</motion.span></motion.h1>
        </div>
        <div className="contactUs-cards">
            <div className="contactUS-card">
                <CardItems />
                <FormContact />
            </div>
        </div>
    </section>
  )
}
