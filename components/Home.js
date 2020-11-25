import React from 'react'
import styles from '../styles/HomePage.module.scss'
import {useSession, signOut, signIn, getCsrfToken, getSession, signin, signout} from 'next-auth/client'
import { useEffect } from 'react'
import { useState } from 'react'


const Home = () => {
    const [token, setToken] = useState(null)
    useEffect(() => {
      const loadData = async() => {
          setToken(await getSession())
      }
      loadData()
    }, [])

    const logout = async () => {
        await signout()
        setToken(null)
        window.location.reload()
    }

    console.log(token)
    return (
        <div className={styles.mainDiv}>
            
            <div className={styles.rectangle}>
            <div className={styles.formClass}>
            <div className={styles.items}>
            <h1>Private Limited Company <br /> Registration in (City Name)</h1>
            <p>We provide quick and affordable service to register a private limited company through 100% online process. Our services are trusted by thousands of businesses in all major cities of India. Pvt Ltd Company Registration is highly preferred by startups.</p>
            <div className={styles.saq}>
                <div className={styles.saq1}>
                <div className={styles.image}>
                <img src="https://static.thenounproject.com/png/407855-200.png" alt="missing" />
                </div>
                <div className={styles.heads}>
                <h1 className={styles.head}>300+</h1>
                <p className={styles.head1}>Happy Customers</p>
                </div>

                </div>
                <div className={styles.saq1}>
                <div className={styles.image}>
                <img src="https://static.thenounproject.com/png/407855-200.png" alt="missing" />
                </div>
                <div className={styles.heads}>
                <h1 className={styles.head}>300+</h1>
                <p className={styles.head1}>Happy Customers</p>
                </div>

                </div>
                <div className={styles.saq1}>
                <div className={styles.image}>
                <img src="https://static.thenounproject.com/png/407855-200.png" alt="missing" />
                </div>
                <div className={styles.heads}>
                <h1 className={styles.head}>300+</h1>
                <p className={styles.head1}>Happy Customers</p>
                </div>

                </div>
            </div>
            </div>
            
            <div className={styles.form}>
                {!token ? (
                    <>
                        <button onClick = {() => signin('google')}>Signin with google</button>
                        <button onClick = {() => signin('facebook')}>Signin with facebook</button>
                    </>
                ) : (
                    <>
                        <button onClick = {() => logout()}>signOut</button>
                        <input disabled value={token.user.name} type='text'/>
                        <input disabled value={token.user.email} type='text'/>
                        <input type="text" placeholder="Phone Number" />
                        <input type="text" placeholder="Business Name" />
                    </>
                )}

                <div className={styles.formfooter}>
                <div className={styles.formfooter1}>
                    <h3>Rs. 5999/</h3>
                    <p>**All Price Inclusion</p>
                </div>
                <div  className={styles.formfooter2}>
                    <button>
                        Get Started
                    </button>
                </div>
                </div>
            </div>
            </div>
            </div>
            <div className={styles.rightAngle}></div>
        </div>
    )
}

export default Home
