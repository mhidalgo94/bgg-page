import './styles.css';
import imgBackground from '../../../assets/images/back-impact.jpg';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import RecyclingIcon from '@mui/icons-material/Recycling';
import {motion} from 'framer-motion';

// Var for animation
const text = {
    initial :{
        left: '-400px',
        // position: 'relative',
        opacity: 0
    },
    animate:{
        left: '0px',   
        opacity: 1,
        transition: {
            type: "easy",
            duration: .8,
            delay: 0.4,

        }
    }
}

const motImage = {
    initial :{
        scale: 1.6,
        position: 'relative',
        opacity: 0
    },
    animate:{
        scale: 1,   
        opacity: 1,
        transition: {
            type: "easy",
            duration: .8,
            delay: 0.4,

        }
    }
}


const card = {
    initial :{
        scale: .5,
        opacity: 0
    },
    animate:{  
        top: '0px',
        scale: 1,
        opacity: 1,
        transition: {
            duration: .5,
            delay: 0.5,
            // ease: [0, 0.71, 0.2, 1.01]
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



export default function OurImpact() {
  return (
    <section className='section-our-impact-container'>
    <div className='section-our-impact'>
        <div className='section-container'>
            <motion.div className="our-impact-title" initial={text.initial} whileInView={text.animate}>
                <motion.p className='txt-1' initial={text.initial} whileInView={text.animate} >Our achievements</motion.p>
                <motion.h1 className='impact-title' initial={text.initial} whileInView={text.animate} >Our Impact</motion.h1>
                <motion.p className='impact-txt' initial={text.initial} whileInView={text.animate} >
                Beaches Go Green raises awareness about plastic waste's impact on oceans and the environment. Through education and community engagement, they inspire sustainable practices and reduce single-use plastics to protect natural resources for future generations
                </motion.p>
                {/* <div style={{marginTop:'30px'}}>
                    <DonateBtn />
                </div> */}
            </motion.div>
            <div className='our-impact-right'>
                <div className='img-container'>
                    <motion.img src={imgBackground} alt="Background image Our Impact" initial={motImage.initial} whileInView={motImage.animate}/>
                </div>
                <div className='container-cards-impact'>
                    <motion.div className='card-info' initial={card.initial} whileInView={card.animate}whileHover={card.hover}>
                        <div className='card-icons'>
                            <SmokingRoomsIcon  sx={{ fontSize: 40,color: "var(--dark-orange)" }}/>
                        </div>
                        <div className="card-details">
                            <h4 style={{color:'var(--dark-orange)'}}>158,283 <span style={{color:"var(--dark-orange)"}}>*</span></h4>
                            <p>Cigarette buds collected and recycled with TerraCycle</p>
                        </div>
                    </motion.div>
                    <motion.div className='card-info' initial={card.initial} whileInView={card.animate} whileHover={card.hover}>
                        <div className='card-icons'>
                            <QueryBuilderIcon  sx={{ fontSize: 40,color: "var(--primary-blue)" }}/>
                        </div>
                        <div className="card-details">
                            <h4 style={{color:"var(--primary-blue)"}}>27,482<span style={{color:"var(--primary-blue)"}}>*</span></h4>
                            <p>Volunteer hours, not including operations team volunteer hours</p>
                        </div>
                    </motion.div>
                    <motion.div className='card-info' initial={card.initial} whileInView={card.animate} whileHover={card.hover}>
                        <div className='card-icons'>
                            <RecyclingIcon  sx={{ fontSize: 40,color: "var(--accent)" }}/>
                        </div>
                        <div className="card-details">
                            <h4 style={{color:"var(--accent)"}}>21,601<span style={{color:"var(--accent)"}}>*</span></h4>
                            <p>Pounds of trash collected</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    </div>
    </section>

  )
}
