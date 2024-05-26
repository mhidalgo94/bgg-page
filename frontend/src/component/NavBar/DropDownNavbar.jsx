import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './dropdown.css';


export default function DropDownNavbar({values}) {
    const {pages} = values;

    const [openDroptown, setOpenDroptonw] = useState(false);

    const toggleDroptown = ()=> {
        setOpenDroptonw(!openDroptown);
    }

  return (
        <div >
            <div className="nav-menu-links">
                    <h6 className="nav-menu-link" 
                        onClick={toggleDroptown}
                        >   
                        {values.text}
                        {pages.length > 0 && <KeyboardArrowUpIcon sx={{ fontSize: 30 }} className={`nav-menu-icons ${openDroptown ? 'rotate' : ''}`}  /> }

                    </h6>
            </div>
            {pages.length > 0 && 
                <nav className={`dropdown-menu ${openDroptown ? 'show' : ''}`} >
                    <div className='dropdown-items' >
                        {values.pages.map((val, index)=>{
                            return (
                                <div className='dropdown-item' key={index}>
                                    <a href={val.link} className='nav-menu-link' >{val.text}</a>
                                </div>
                            )
                        })}
                    </div>
                        
                </nav>
            }
        </div>
  )
}
