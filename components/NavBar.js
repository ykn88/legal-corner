import React, {useState} from 'react'
import styles from '../styles/NavBar.module.scss'
import styles2 from '../styles/Nav.module.scss'
import {CSSTransition} from 'react-transition-group';
import { ChevronDownIcon, ChevronLeftIcon, HamburgerIcon } from '@chakra-ui/icons';
import {useSession, signOut, signIn, getCsrfToken, getSession} from 'next-auth/client'
import { Link } from '@chakra-ui/react';

// import Link from 'next/link'


const NavBar = ({category}) => {
    // category = []
    console.log(category.name)
    return (
        <div>
            {category.length ? 
                (
                    <>
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
                                                    {category.map(categorys=> (
                                                        <li className={styles2.dropdown} key={categorys?.id}>
                                                            <a href='#' className={styles2.hover}>{categorys.name}</a>
                                                            <ul className={styles2.menuArea} >
                                                                {categorys?.productHead?.map(subcategory=>(
                                                                    <ul key={subcategory?.id} >
                                                                        <h4>{subcategory?.name}</h4>
                                                                        {subcategory?.product.map(products =>(
                                                                        <li key={products?.id}>
                                                                        <Link href={products?.id}>
                                                                        <a >{products?.name}</a>
                                                                        </Link>
                                                                        </li>
                                                                        ))}
                                                                    </ul>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))} 
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
                    </>
                ) 
            : 
                (<div>
                    Loading.....
                </div>)
            }
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
