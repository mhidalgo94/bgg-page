import './styles.css';
import CardItems from './CardItems';
import FormContact from './FormContact';
export default function ContactUs() {
  return (
    <section className='section-contactUs'>
        <div className='section-contactUs-title'>
            <h1>Let's begin <br/> <span style={{color:'var(--primary-blue)'}}>a Dialogue.</span></h1>
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
