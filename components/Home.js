import React from 'react'
import styles from '../styles/HomePage.module.scss'
import {useSession, signOut, signIn, getCsrfToken, getSession, signin, signout} from 'next-auth/client'
import { useEffect } from 'react'
import { useState } from 'react'
import baseUrl from '../helpers/baseUrl'
import {parseCookies} from 'nookies'
import cookie from 'js-cookie'
import jwt from 'jsonwebtoken'

const Home = ({userData, singleProduct}) => {
    singleProduct = {}
    const [userMail, setUserMail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [token, setToken] = useState(null)
    const [userInfo, setUserInfo] = useState(userData || {})
  
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

    const handleLogin = async (e) => {
        e.preventDefault()
        const res = await fetch(`${baseUrl}/api/login/login`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email: userMail,
                password: userPassword
            })
        })
        const data = await res.json()
        console.log(data.value)
        cookie.set('token1', data.logCookie)
        const value = {
            email: data.value.email,
            userId: data.value.id,
            role: data.value.role,
            name: data.value.name
        }
        console.log(value)
        setUserInfo(value)
    }

    const handleLogOut = () => {
        cookie.remove('token1')
        const value = {
            email: '',
            userId: 0,
            role: ''
        }
        setUserInfo(value)
    }

    return (
        <>
            {singleProduct.length? (

                <div className={styles.mainDiv}>
                    <div className={styles.rectangle}>
                        <div className={styles.formClass}>
                            <div className={styles.items}>
                                <h1>{singleProduct.profile?.headTitle} <br /> Registration in Delhi</h1>
                                <p>{singleProduct.profile?.headDesc}</p>
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
                                {userInfo?.role === '' ? (
                                    <> 
                                        <h4>Login</h4>
                                        <input value={userMail} type = "email" onChange = {(e) => setUserMail(e.target.value)}/>
                                        <input value={userPassword} type = "password" onChange = {(e) => setUserPassword(e.target.value)}/>
                                        <button onClick = {handleLogin}>Login</button>
                                    </>

                                    ) : (
                                    <>
                                        <button onClick = {handleLogOut}>Log Out</button>
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
            ) : (
                <div>
                    Loading...
                </div>
            )}
        </>
    )
}

export default Home
