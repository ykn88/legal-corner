import React, {useState} from 'react'
import styles from '../styles/NavBar.module.scss'
import styles2 from '../styles/Nav.module.scss'
import {CSSTransition} from 'react-transition-group';
import { ChevronDownIcon, ChevronLeftIcon, HamburgerIcon } from '@chakra-ui/icons';
import {useSession, signOut, signIn, getCsrfToken, getSession} from 'next-auth/client'

const NavBar = () => {

    const [session] = useSession()
    
    return (
        <div>
            {/* computer view */}
            <div className={styles.compNavs}>
            <div className={styles.compNav}>
                <div className={styles.compNav1} >
                <h1>LEGAL <strong>CORNER</strong></h1>
                <p>FREE CONSULTATION <br /> <span>1800-103-252</span> </p>
                </div>
                <div className={styles.compNav2}>
                <div className={styles2.wrapper}>
                    <nav className={styles2.nav}>
                    <div className={styles.item1 }>
                    <ul>
                                     
                    <li className={styles2.dropdown}>
                    <a href='#' className={styles2.hover}>COMPANY</a>
                    <ul className={styles2.menuArea}>
                        <ul>
                            <h4>Our Company</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Graphics Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Web Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>PhotoGraphy</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                    </ul>
                    </li>
                  
                    <li className={styles2.dropdown}>
                    <a href='#' className={styles2.hover}>REGISTRATION</a>
                    <ul className={styles2.menuArea}>
                        <ul>
                            <h4>Our Company</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Graphics Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Web Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>PhotoGraphy</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                    </ul>
                    </li>
                  
                    <li className={styles2.dropdown}>
                    <a href='#' className={styles2.hover}>TAXATION</a>
                    <ul className={styles2.menuArea}>
                        <ul>
                            <h4>Our Company</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Graphics Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Web Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>PhotoGraphy</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                    </ul>
                    </li>
                  
                    <li className={styles2.dropdown}>
                    <a href='#' className={styles2.hover}>COMPLIENCE</a>
                    <ul className={styles2.menuArea}>
                        <ul>
                            <h4>Our Company</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Graphics Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Web Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>PhotoGraphy</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                    </ul>
                    </li>
                  
                    <li className={styles2.dropdown}>
                    <a href='#' className={styles2.hover}>Service</a>
                    <ul className={styles2.menuArea}>
                        <ul>
                            <h4>Our Company</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Graphics Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Web Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>PhotoGraphy</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                    </ul>
                    </li>
                  
                  <li className={styles2.dropdown}>
                    <a href='#' className={styles2.hover}>Service</a>
                    <ul className={styles2.menuArea}>
                        <ul>
                            <h4>Our Company</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Graphics Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>Web Design</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                        <ul>
                            <h4>PhotoGraphy</h4>
                            <li><a href='#'>design 1</a></li>
                            <li><a href='#'>design 2</a></li>
                            <li><a href='#'>design 3</a></li>
                            <li><a href='#'>design 4</a></li>
                        </ul>
                    </ul>
                    </li>
                  
                    </ul>
                    </div>
                    </nav>
                    </div>
                    <div className={styles.item2}>
                    <button>Book a Service</button>
                    </div>
                </div>

            </div>
            <br /><br/>
<br /><br/>
<br /><br/>
 </div>
            {/* mobile view */}
            <div className={styles.mobile}>
            
            <Navbar>
                <h1 className={styles.head}>LEGAL <strong className={styles.headstrong}>CORNER</strong></h1>
                <NavItem icon="&#9776;" style={{fontSize:'2rem'}} >
                    <DropdownMenu />
                </NavItem>
                
            </Navbar>

        <br />
        <br />
            </div>
        </div>
    )
}

function BackIcon(){
    return(
        <p> <ChevronLeftIcon /></p>
    )
}
function CozIcon(){
    return(
        <p></p>
    )
}
function CozIcon2(){
    return(
        <p> <ChevronDownIcon />  </p>
    )
}


function DropdownMenu(){
    const [activeMenu, setActiveMenu] = useState('main')
    // const [menuHeight, setMenuHeight] = useState(null)
    // function calcHeight(el){
    //     const height = el.offsetHeight;
    //     setMenuHeight(height)
    // }
    function DropdownItem(props){
        return(
            <a href="#" className={styles.menuItem} onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu) }> 
            <span className={styles.iconButton}>{props.leftIcon}</span>
            {props.children}
            <span className={styles.iconRight}>{props.rightIcon}</span>
             </a>
        ); 
    }
    return(
        <div className={styles.dropdownMenu} 
        // style={{height:menuHeight}}
        >
        <CSSTransition in={activeMenu==='main'} unmountOnExit timeout={500}
        classNames={styles.menuPrimary} 
        // onEnter={calcHeight} 
        >
        <div className={styles.manu}>
            <DropdownItem>
            <a href="#" style={{backgroundColor:'red', padding:'.5rem 1rem'}}>BOOK A SERVICE</a>
            
            </DropdownItem>
            <DropdownItem leftIcon={<CozIcon />} rightIcon={<CozIcon2 />}
            goToMenu="company"
             >COMPANY</DropdownItem>
            <DropdownItem leftIcon={<CozIcon />} rightIcon={<CozIcon2 />}
            goToMenu="registration"
             >REGISTRATION</DropdownItem>
        </div>
        </CSSTransition>
        <CSSTransition in={activeMenu==='company'} unmountOnExit timeout={500}
        classNames={styles.menuSecondary}>
        <div className={styles.manu}>
        <DropdownItem leftIcon={<BackIcon />}
            goToMenu="main" />
            <DropdownItem >My Settings</DropdownItem>
            <DropdownItem >My Settings1</DropdownItem>
            <DropdownItem >My Settings2</DropdownItem>
            <DropdownItem >My Settings3</DropdownItem>
            <DropdownItem >My Settings4</DropdownItem>
            <DropdownItem >My Settings5</DropdownItem>
        </div>
        </CSSTransition>
        <CSSTransition in={activeMenu==='registration'} unmountOnExit timeout={500}
        classNames={styles.menuSecondary}>
        <div className={styles.manu}>
        <DropdownItem leftIcon={<BackIcon />}
            goToMenu="main" />
            <DropdownItem >Saqlain Nasim</DropdownItem>
            <DropdownItem >Saqlain Nasim1</DropdownItem>
            <DropdownItem >Saqlain Nasim2</DropdownItem>
            <DropdownItem >Saqlain Nasim3</DropdownItem>
            <DropdownItem >Saqlain Nasim4</DropdownItem>
            <DropdownItem >Saqlain Nasim5</DropdownItem>
        </div>
        </CSSTransition>
        </div>
    )
}


function Navbar(props){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navbarNav}> {props.children} </ul>
        </nav>
    );
}
function NavItem(props){
    const [open, setOpen] = useState(false)
    return(
        <li className={styles.navItem}>
           <a href="#" className={styles.iconButton} onClick={()=>setOpen(!open)}>
               {props.icon}
           </a>
           {open && props.children}
        </li>
    );
}

export default NavBar
