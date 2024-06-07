import img1 from '../../../assets/images/contact-img.jpg';
import backgroundSVG from '../../../assets/svg/backgound-card.svg';
import Form from './Form';
import './styles.css';
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
            duration: .8,
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
            duration: .8,
            delay: 0.4

        }
    }
}
// Animation Form Var 
const form = {
  initial :{
      scale: .5,
      opacity: 0
  },
  animate:{  
      scale: 1,
      opacity: 1,
      transition: {
          duration: 1,
          delay: .2,
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




export default function FormContact() {
  return (
    <div className='contactUs-form'>
        <div className="contactUs-form-container">
            <div className="form-wrapper">
                <motion.div className="form-block" initial={form.initial} whileInView={form.animate} >
                    <div className="form-block-text">
                        <motion.h3 initial={title.initial} whileInView={title.animate} >Reach Out to Us</motion.h3>
                        <motion.p initial={title2.initial} whileInView={title2.animate} >Send us messages, ask questions, or share your thoughts. We value your input and look forward to hearing from you!</motion.p>
                    </div>
                    <Form />
                    <img src={backgroundSVG} alt='background-contact'/>
                </motion.div>
                <motion.div className="form-img" initial={form.initial} whileInView={form.animate} >
                    <img src={img1} alt='Image from contact' />
                </motion.div>
            </div>

        </div>
    </div>
  )
}
