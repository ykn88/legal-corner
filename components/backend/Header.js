import { Link } from '@chakra-ui/react'
import React from 'react'
import styles from '../../styles/backend/Header.module.scss'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react"

const Header = () => {
    return (
        <div>
            <div className={styles.nav}>
                <h1>Legal <strong>Corner</strong></h1>
              
                <div className={styles.items}>
                    <p>Welcome, <strong>Saqlain</strong></p>
                    {/* <img src="https://pbs.twimg.com/profile_images/1209556062270963712/qmftSQI9_400x400.jpg" alt="missing" /> */}
                    <Menu>
                        <MenuButton
                            px={4}
                            py={2}
                            transition="all 0.2s"
                            borderRadius="md"
                            borderWidth="1px"
                            _hover={{ bg: "gray.100" }}
                            _expanded={{ bg: "red.200" }}
                            _focus={{ outline: 0, boxShadow: "outline" }}
                            bgColor="transparent"
                            border='none'
                            cursor='pointer'
                        >
                            <img src="https://pbs.twimg.com/profile_images/1209556062270963712/qmftSQI9_400x400.jpg" alt="missing" /> 
                        </MenuButton>
                        <MenuList>
                            <MenuItem className={styles.menuItems}><button>Logout</button></MenuItem>
                            <MenuItem className={styles.menuItems}>  <Link href="myservices"><a className={styles.a}> My Services</a></Link></MenuItem>
                        </MenuList>
</Menu>
                </div>

                
                
            </div>
        </div>
    )
}

export default Header
