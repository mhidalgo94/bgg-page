import img1 from '../../../assets/svg/backgound-card.svg'


export default function BannerCard({values}) {
    const {number, title, text, image, bgColor, colorText} = values;
  return (
    <div className="card-banner" style={{backgroundColor:`var(${bgColor})`}}>
        <div className='card-grap'>
            <div className='card-number'>
                <h1 className='card-number-text' style={{color:`var(${colorText})`}}>{number}</h1>
            </div>
            <div className='card-content'>
                <h4 className='card-content-title' style={{color:`var(${colorText})`}}>{title}</h4>
                <p className='card-content-text' style={{color:`var(${colorText})`}}>{text}</p>
            </div>
            <div className='card-img-content'>
            </div>
        </div>
        <img className='decor-image-card' loading='lazy' src={image} alt='Detail image card' />
        <img className='background-image-card' loading='lazy' src={img1} alt='Background image bgg' />
    </div>
  )
}
