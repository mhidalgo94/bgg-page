import './styles.css';
import {delay, motion} from 'framer-motion';

// All this var is for animation
const title =  {
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
            duration: .5
        }
    }
}

const text =  {
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

const btnDonate = {
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

export default function Header() {
  return (
    <section className='header'>
            <video playsInline autoPlay muted loop id="bgVideo"> 
                <source src="https://videos.pexels.com/video-files/3571264/3571264-hd_1280_720_30fps.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video>
        <div id='overlay'></div>
        <div style={{"paddingTop":"180px"}}>
            <div className='header-content' >
                <motion.h1 initial={title.initial} whileInView= {title.animate} >Join  Beaches Go Green to Protect Oceans and Reduce Plastics.</motion.h1>
                <motion.p initial={text.initial} whileInView= {text.animate}>Beaches Go Green, a 501(c)(3) non-profit, focuses on educating about waste and its planetary impact, particularly targeting single-use plastics and ocean conservation. We encourage small steps to reduce plastic use and waste, believing that collective minor changes can lead to significant environmental improvements.</motion.p>
                <motion.div className='container-btn' initial={btnDonate.initial} whileInView= {btnDonate.animate}>
                    <a href='#' className='btn-donate-header'>
                        Make a Donation
                    </a>
                </motion.div>
            </div>
        </div>
    </section>
  )
}
