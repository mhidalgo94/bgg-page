import './menu.css'
import DropDownNavbar from './DropDownNavbar'
export default function NavMenu() {

    const navMenu = [
        {
            text: 'about Us',
            link:'#',
            pages: [
                {
                    text: "About Us",
                    link:"#"
                },
                {
                    text: "Mission",
                    link:"#"
                },
                {
                    text: "Our Impact",
                    link:"#"
                },
                {
                    text:'BGG in the news',
                    link:"#"
                }
                
            ],
        },
        {
            text: 'Education',
            link:'#'
        },
        {
            // text: 'Green Ambassador Scholarships',
            text:'Eco-Becas',
            link:'#'
        },
        {
            text: 'Get Involved',
            link:'#'
        },
    ]

  return (
    <ul className='nav-menu'>
        <li className='nav-menu-item'>
            {navMenu.map((values,index)=>{
                if (values.pages){
                    return (
                        <DropDownNavbar values={values} key={index}/>
                    )
                }
                return <a key={index} className='nav-menu-link' href={values.link}>{values.text}</a>
            })}
        </li>
    </ul>
  )
}
