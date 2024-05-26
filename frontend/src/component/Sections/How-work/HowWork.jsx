import './styles.css';
import img1 from '../../../assets/svg/backgound-card.svg'

export default function HowWork() {
  return (
    <section className='section-mission'>
        <div className='title-section'>
            <h1 className='title-mission'>Together We <br/><span style={{color:"var(--primary-blue)"}}>Make a Difference</span></h1>
            <p>Beaches Go Green, a 501(c)(3) nonprofit, aims to create awareness and education around the waste that we produce and how it impacts our planet. With a focus on single-use plastics and our oceans, we are encouraging people to take small steps to decrease their plastic consumption and overall waste.  We believe that through awareness and education, people will make small changes in their lives that will add up to BIG changes for the planet.</p>
        </div>

        <div className='section-card-banner'> 
            {/* <h1 className='title-mission'>Four R</h1> */}
            <div className="card-banner">
                <div className='card-grap'>
                    <div className='card-number'>
                        <h1 className='card-number-text'>1</h1>
                    </div>
                    <div className='card-content'>
                        <h4 className='card-content-title'>Refuse</h4>
                        <p className='card-content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in ducimus fugiat, quae iusto qui tenetur aliquam iste laborum veritatis voluptatibus incidunt neque iure, eveniet sequi cupiditate quam libero officia!</p>
                    </div>

                    <img src='img1' />
                </div>
            </div>

        </div>

    </section>
  )
}
