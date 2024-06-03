import img1 from '../../../assets/images/contact-img.jpg';
import backgroundSVG from '../../../assets/svg/backgound-card.svg';
import Form from './Form';
import './styles.css';


export default function FormContact() {
  return (
    <div className='contactUs-form'>
        <div className="contactUs-form-container">
            <div className="form-wrapper">
                <div className="form-block">
                    <div className="form-block-text">
                        <h3>Reach Out to Us</h3>
                        <p>Send us messages, ask questions, or share your thoughts. We value your input and look forward to hearing from you!</p>
                    </div>
                    <Form />
                    <img src={backgroundSVG} alt='background-contact'/>
                </div>
                <div className="form-img">
                    <img src={img1} alt='Image from contact'/>
                </div>
            </div>

        </div>
    </div>
  )
}
