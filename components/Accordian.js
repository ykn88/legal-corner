import React from 'react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import styles from '../styles/Test.module.scss'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react"

const Accordian = ({list}) => {
    return (
        <div><Accordion allowMultiple>
        <AccordionItem>
            {({ isExpanded }) => (
            <>
                <AccordionButton _expanded={{ bg: "#DF2938", color: "white", borderRadius:'8px', border:'none'}}
                className={styles.item}>
                <Box flex="1" textAlign="left" style={{height:"1.3rem", borderRadius:'20px'}}>
                    {list?.question}
                </Box>
                {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                ) : (
                    <AddIcon fontSize="12px" />
                )}
                </AccordionButton>
                <AccordionPanel pb={4}  
                style={{ borderRadius:'5px', padding: ".5rem .5rem",  border:'0px solid black',
                borderTopLeftRadius:"0",
                backgroundColor:'#DF2938', margin:'.21rem .1rem', color:'white', marginTop:'0rem'}}>
                {list?.answers}
                </AccordionPanel>
            </>
            )}
        </AccordionItem>
</Accordion>
            
        </div>
    )
}

export default Accordian
