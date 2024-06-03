import img1 from '../../../assets/images/message-card.png'
import img2 from '../../../assets/images/call.png'
import img3 from '../../../assets/images/gps.png'

export default function CardItems() {
  return (
    <div className="card-items">
                    <a  className='card-contact'>
                        <img className='img-card-contact' src={img2}/>
                        <div className='card-detail-contact'>
                            <h3>Give Us a Call</h3>
                            <p>Call Want to learn more? Give us a call to speak with our team. </p>
                        </div>
                    </a>
                    <a  className='card-contact' href='mailto:annemarie@beachesgogreen.org'>
                        <img className='img-card-contact' src={img1} alt='e-mail contact'/>
                        <div className='card-detail-contact'>
                            <h3>Drop Us  a Line</h3>
                            <p>We're here listen, support and collaborate on creating positive change.</p>
                        </div>
                    </a>
                    <a  className='card-contact' target='_blank' href='https://www.google.com/maps/place/320+1st+St+N+STE+701,+Jacksonville+Beach,+FL+32250/@30.2919529,-81.3930311,17z/data=!3m1!4b1!4m6!3m5!1s0x88e4490738cd5c99:0xfa7a16c332565e59!8m2!3d30.2919483!4d-81.3904562!16s%2Fg%2F11hcd_bn83?authuser=0&entry=ttu'>
                        <img className='img-card-contact' src={img3}/>
                        <div className='card-detail-contact'>
                            <h3>Find Us</h3>
                            <p>Visit us to meet and discuss how we can do together.</p>
                        </div>
                    </a>
                </div>
  )
}
