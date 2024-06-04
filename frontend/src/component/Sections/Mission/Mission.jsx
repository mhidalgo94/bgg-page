import './styles.css';
import BannerCard from './BannerCard';
import svgRefuse from '../../../assets/svg/refuse.png'
import svgReduce from '../../../assets/svg/reduce.png'
import svgReuse from '../../../assets/svg/reuse.png'
import svgRecycling from '../../../assets/svg/recycling.png'

export default function Mission() {

    const dataCard = [
        {
            number: "01", 
            title: 'Refuse', 
            text: 'REFUSE disposable plastic & single-serving items whenever and wherever possible. As the consumer, the impact of refusing makes a clear statement to the producer that you will not take on the responsibility of excess waste. Choose items that are not packaged in plastic, and carry your own bags, containers, and utensils. Buy in bulk and make our own serving sizes in reusable containers.  Refuse to support brands and businesses that do not support your environmental beliefs!', 
            image: svgRefuse, 
            bgColor: '--accent-light-3',
            colorText:'--accent-dark',

        },
        {
            number: "02", 
            title: 'Reduce', 
            text: 'Make decisions that REDUCE  your waste footprint. Cut down on your consumption of goods overall and especially those that contain excessive plastic packaging and parts. Reducing waste is a conscious choice and anyone can participate on any level.  Use less.  Make due with what you already have whenever possible.', 
            image: svgReduce, 
            bgColor: '--primary-blue-dark',
            colorText: '--grey'

        },
        {
            number: "03", 
            title: 'Reuse', 
            text: 'REUSE durable, non-toxic straws, utensils, to-go containers, bottles, bags, and other everyday items. Choose glass, paper, stainless steel, wood, ceramic and bamboo over plastic & polystrene (styrofoam). By reusing items, you are diverting waste from the landfill and preventing the creation of even more virgin materials.  If you must buy something new, try to buy products made with recycled materials.', 
            image: svgReuse, 
            bgColor: '--light-orange',
            colorText: '--dark-orange'

        },
        {
            number:"04", 
            title: 'Recycling', 
            text: "RECYCLING is a tough one.  It is a VERY small part of a much bigger solution to our waste.  Unfortunately, many of us count recycling as our primary eco-friendly behavior.  We continue to buy products that we should not be buying with the idea that they will be recycled so it's ok!  Not TRUE!  Here are the facts.  Only 9% of all plastic is recycled globally and only 7% in the USA.  Contamination rates are high with recyclables and much of what you THINK is being recycled actually ends up in the landfill. IF your recyclables do make it through the recycle sorting process EMPTY, CLEAN & DRY, then we must rely on the market to purchase these recycled materials.", 
            image: svgRecycling, 
            bgColor: '--primary-blue-dark',
            colorText: '--grey'

        },

    ]

  return (
    <section className='section-mission'>
        <div className='title-section'>
            <h1 className='title-mission'>Our Mission <br/><span style={{color:"var(--primary-blue)", fontSize:'40px'}}>Our work is divided into 4 core objectives</span></h1>
            <p>Beaches Go Green, a 501(c)(3) nonprofit, aims to create awareness and education around the waste that we produce and how it impacts our planet. With a focus on single-use plastics and our oceans, we are encouraging people to take small steps to decrease their plastic consumption and overall waste.  We believe that through awareness and education, people will make small changes in their lives that will add up to BIG changes for the planet.</p>
        </div>

        <div className='section-card-banner'> 
            {/* <h1 className='title-mission'>Four R</h1> */}
            {dataCard.map((values,index)=>{
                return <BannerCard values={values} key={index}/>
            })}
        </div>

    </section>
  )
}
