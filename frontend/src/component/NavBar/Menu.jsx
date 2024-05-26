import './stylesres.css'
import svg_facebook from '../../assets/svg/facebook.svg'
import svg_linkedin from '../../assets/svg/linkedin.svg'

export default function Menu({openMenu}) {
  return (
    <div className={`menu-res-content ${openMenu ? 'open' : ''}`}>
        <div className="menu-res-list">
            <a href="#" className="menu-res-link">About</a>
            <a href="#" className="menu-res-link">Education</a>
            <a href="#" className="menu-res-link">Eco-Becas</a>
            <a href="#" className="menu-res-link">Get Involved</a>
        </div>
    </div>
  )
}
