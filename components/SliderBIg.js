import React from 'react'
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import styles from '../styles/SliderTwo.module.scss'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
const Slider = () => {
    return (
        <div>
              
      <div className="App" style={{backgroundColor:'#F3F7FF', paddingTop:'1rem'}}>
      <div className={styles.introMain}>
                <div className={styles.heading}>
                    <h3>MUST READ ARTICLES</h3>
                </div>
                <div className={styles.headings}>
                    <h2>Private Limited Company Registration</h2>   
                    <p><ExternalLinkIcon /></p>
                </div>
            </div>
        <Carousel breakPoints={breakPoints}>
    
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         <Item>
         <div className={styles.card}>
                    <div className={styles.img}>
                        {/* <img src="https://www.coxdigitalsolutions.com/wp-content/uploads/2018/12/online-business-tips-illustration-coxdigitalsolutions.jpg" /> */}
                        <div className={styles.para}>
                        <p>Private Limited Company Registration</p>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <h2>
                        Benefits of Private Limited Company Registration
                        </h2>
                        <p>
                        Before getting started, you should know this is alpha software. Blitz is incomplete. There are rough spots and bugs. APIs may change.
                        </p>
                    </div>
                </div>
         </Item>
         
        </Carousel>

      </div>
        </div>
    )
}

export default Slider
