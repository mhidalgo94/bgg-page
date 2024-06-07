import {animate, anticipate, motion} from 'framer-motion';
import {useState} from 'react'
import './styles.css'
import logo from  '../../assets/images/logo-bgg.png'
import NavMenu from './NavMenu'
import Menu from './Menu'




const {initial: navInitial, animate: navAnimate} = {
    initial :{
        top: '-40px',
        opacity: 0,
    },
    animate:{
        top: '0px',
        opacity: 1,
        transition: {
            type: "delay",
            duration: .8
        }
    }
}
    
export default function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () =>{
        setOpenMenu(!openMenu);
    }

  return (
    <>
        <motion.div className='navbar' initial={navInitial} whileInView={navAnimate}>
            <div className='navbar-container'>
                <ul className='container-logotipo'>
                    <li className='navbar-items'>
                        <a className='navbar-link'>
                            <img src={logo} className='navbar-logotipo' alt="Logotipo Beaches Go Green" />
                        </a>
                    </li>
                    <li  className='navbar-items'>
                        <NavMenu />
                    </li>
                    <li className='navbar-items'>
                    <div className='container-btn-contact'>
                        <a href='#Contact' className='btn-contact-us'> Contact Us</a>
                        <div className='container-menu-btn'  onClick={handleOpenMenu}>
                            <div className={`menu-btn ${!openMenu ? '' : 'open'}`} id="menu-btn" >
                                <div className='menu-btn__burger'></div>
                            </div>
                        </div>
                        </div>
                    </li>
                </ul>
            </div>
        </motion.div>
        <Menu openMenu={openMenu} />
    </>

  )
}
