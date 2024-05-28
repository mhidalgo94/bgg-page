import './styles.css';
// import DonateBtn from './DonateBtn';
import imgBackground from '../../../assets/images/back-impact.jpg'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import RecyclingIcon from '@mui/icons-material/Recycling';

export default function OurImpact() {
  return (
    <section className='section-our-impact-container'>
    <div className='section-our-impact'>
        <div className='section-container'>
            <div className="our-impact-title">
                <p className='txt-1'>Our achievements</p>
                <h1 className='impact-title'>Our Impact</h1>
                <p className='impact-txt'>
                Beaches Go Green raises awareness about plastic waste's impact on oceans and the environment. Through education and community engagement, they inspire sustainable practices and reduce single-use plastics to protect natural resources for future generations
                </p>
                {/* <div style={{marginTop:'30px'}}>
                    <DonateBtn />
                </div> */}
            </div>
            <div className='our-impact-right'>
                <div className='img-container'>
                    <img src={imgBackground} alt="" />
                </div>
                <div className='container-cards-impact'>
                    <div className='card-info'>
                        <div className='card-icons'>
                            <SmokingRoomsIcon  sx={{ fontSize: 40,color: "var(--dark-orange)" }}/>
                        </div>
                        <div className="card-details">
                            <h4 style={{color:'var(--dark-orange)'}}>158,283 <span style={{color:"var(--dark-orange)"}}>*</span></h4>
                            <p>Cigarette buds collected and recycled with TerraCycle</p>
                        </div>
                    </div>
                    <div className='card-info'>
                        <div className='card-icons'>
                            <QueryBuilderIcon  sx={{ fontSize: 40,color: "var(--primary-blue)" }}/>
                        </div>
                        <div className="card-details">
                            <h4 style={{color:"var(--primary-blue)"}}>27,482<span style={{color:"var(--primary-blue)"}}>*</span></h4>
                            <p>Volunteer hours, not including operations team volunteer hours</p>
                        </div>
                    </div>
                    <div className='card-info'>
                    <div className='card-icons'>
                            <RecyclingIcon  sx={{ fontSize: 40,color: "var(--accent)" }}/>
                        </div>
                        <div className="card-details">
                            <h4 style={{color:"var(--accent)"}}>21,601<span style={{color:"var(--accent)"}}>*</span></h4>
                            <p>Pounds of trash collected</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </section>

  )
}
