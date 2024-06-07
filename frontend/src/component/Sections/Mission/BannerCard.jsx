import img1 from '../../../assets/svg/backgound-card.svg';
import {motion} from 'framer-motion';


const card = {
    initial :{
        opacity: 0,
        top: '50px',
    },
    animate:{
        top: '0px',
        opacity: 1,
        transition: {
            duration: 1,
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

export default function BannerCard({values}) {
    const {number, title, text, image, bgColor, colorText} = values;
  return (
    <motion.div className="card-banner" style={{backgroundColor:`var(${bgColor})`}} initial={card.initial} whileInView={card.animate} whileHover={card.hover}>
        <div className='card-grap'>
            <div className='card-number'>
                <h1 className='card-number-text' style={{color:`var(${colorText})`}}>{number}</h1>
            </div>
            <div className='card-content'>
                <h4 className='card-content-title' style={{color:`var(${colorText})`}}>{title}</h4>
                <p className='card-content-text' style={{color:`var(${colorText})`}}>{text}</p>
            </div>
            <div className='card-img-content' >
            </div>
        </div>
        <img className='decor-image-card' loading='lazy' src={image} alt='Detail image card' />
        <img className='background-image-card' loading='lazy' src={img1} alt='Background image bgg' />
    </motion.div>
  )
}
