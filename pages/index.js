import { parseCookies } from 'nookies'
import NavBar from '../components/NavBar'
import baseUrl from '../helpers/baseUrl'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import cookie from 'js-cookie'
import jwt from 'jsonwebtoken'

 
export default function Home({userData}) {
  
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')
  const [userInfo, setUserInfo] = useState(userData)
  console.log(userData)

  const handleLogin = async (e) => {
    e.preventDefault()

    if(email === '' || password === '') {
      alert('Please add all the fields')
    }
    else {
      const value = await fetch(`${baseUrl}/api/login/login`, {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      const data = await value.json()
      if(data.error) {
        alert(data.error)
        console.log(data.error)
      }
      else {
        console.log(data)
        cookie.set('token1', data.logCookie)
        window.location.reload()
      }
    }
  }

  const handleLogout = (e) => {
    e.preventDefault()
    cookie.remove('token1')
    const user = {
      userId: 0,
      email: '',
      role: '',
      name: ''
    }
    setUserInfo(user)
    window.location.reload()
  }
  
  return (
    <div className={styles.container}>
      <h1>Legal Corner</h1>
      {userInfo.email === '' ? (
        <form>
          <div>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <button onClick = {handleLogin}>Login</button>
          </div>
        </form>
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const {token1} = parseCookies(ctx)
  const userData = {
    userId: 0,
    email: '',
    role: '',
    name: ''
  }

  if(token1) {
    const { userId, email, role, name } = jwt.verify(token1, process.env.JWT_SECRET)
    userData.email = email
    userData.userId = userId,
    userData.role = role,
    userData.name = name
  }

  return {
    props: {
      userData
    }
  }
}