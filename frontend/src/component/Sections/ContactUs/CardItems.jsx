import img1 from '../../../assets/images/message-card.png';
import img2 from '../../../assets/images/call.png';
import img3 from '../../../assets/images/gps.png';
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

const card = {
    initial :{
        opacity: 0,
        top: '90px',
        position: 'relative'
    },
    animate:{
        top: '0px',
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
        }
    },
    hover:{
        scale: 1.04, 
        transition:{
            type: "spring",
            duration: 1,
            
        }
    }
}


export default function CardItems() {
  return (
    <div className="card-items">
        <motion.a  className='card-contact' initial={card.initial} whileInView={card.animate}>
            <img className='img-card-contact' src={img2}/>
            <div className='card-detail-contact'>
            <motion.h3  initial={title.initial} whileInView={title.animate}>Give Us a Call</motion.h3>
            <motion.p initial={title.initial} whileInView={title.animate}>Call Want to learn more? Give us a call to speak with our team. </motion.p>
            </div>
        </motion.a>
        <motion.a  className='card-contact' href='mailto:annemarie@beachesgogreen.org'  initial={card.initial} whileInView={card.animate}>
            <img className='img-card-contact' src={img1} alt='e-mail contact'/>
            <div className='card-detail-contact'>
                <motion.h3  initial={title.initial} whileInView={title.animate}>Drop Us  a Line</motion.h3>
                <motion.p initial={title.initial} whileInView={title.animate}>We're here listen, support and collaborate on creating positive change.</motion.p>
            </div>
        </motion.a>
        <motion.a  className='card-contact' target='_blank' href='https://www.google.com/maps/place/320+1st+St+N+STE+701,+Jacksonville+Beach,+FL+32250/@30.2919529,-81.3930311,17z/data=!3m1!4b1!4m6!3m5!1s0x88e4490738cd5c99:0xfa7a16c332565e59!8m2!3d30.2919483!4d-81.3904562!16s%2Fg%2F11hcd_bn83?authuser=0&entry=ttu'
         initial={card.initial} whileInView={card.animate}>
            <img className='img-card-contact' src={img3}/>
            {/* <motion.img className='img-card-contact' src={img3} whileHover={card.hover}/> */}
            <div className='card-detail-contact'>
                <motion.h3  initial={title.initial} whileInView={title.animate}>Find Us</motion.h3>
                <motion.p initial={title.initial} whileInView={title.animate}>Visit us to meet and discuss how we can do together.</motion.p>
            </div>
        </motion.a>
    </div>
  )
}
