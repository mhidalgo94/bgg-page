import './styles.css'
import logo from  '../../assets/images/logo-bgg.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgBackground from '../../assets/svg/backgound-card.svg'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-content-wrapper">
            <div className="footer-content">
                <a href="#" className="footer-logo-wrapper">
                    <img src={logo} className='navbar-logotipo' alt="Logotipo Beaches Go Green" />
                </a>
                <div className="footer-main">
                    <div className="footer-menu">
                        <a href="#" className="footer-menu-item">About Us</a>
                        <a href="#" className="footer-menu-item">Education</a>
                        <a href="#" className="footer-menu-item">Eco-Becas</a>
                        <a href="#" className="footer-menu-item">Get Involved</a>
                        <a href="#" className="footer-menu-item">FAQ</a>
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com/BeachesGoGreen" target='_blank'>
                        <FacebookIcon  sx={{ color: "var(--primary-blue-dark)"}}/>
                    </a>
                    <a href="https://www.linkedin.com/company/beachesgogreen/" target='_blank'>
                        <LinkedInIcon sx={{ color: "var(--primary-blue-dark)"}}/>
                    </a>
                    <a href="https://www.linkedin.com/company/beachesgogreen/" target='_blank'>
                        <InstagramIcon sx={{ color: "var(--primary-blue-dark)"}}/>
                    </a>
                </div>
                <img src={SvgBackground} className='bg-footer-svg' alt="Background footer" />
            </div>
            <div className="footer-legal">
                <div className="copy-right">
                    <p>© 2024, All Rights Reserved</p>
                </div>
                <p>Beaches Go Green</p>
            </div>
        </div>
    </div>
  )
}
