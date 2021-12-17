import React from 'react'
import ButtonLarge from '../../atoms/ButtonLarge/ButtonLarge'
import Logo from '../../atoms/Logo/Logo'
import LoginForm from '../../molecules/LoginForm/LoginForm'

import styles from './LoginComponent.module.css'

function LoginComponent() {
  return (
  <div className={styles.LoginComponent_container}>
    <div className={styles.LoginComponent_container__contents}>

      <Logo/>
      <LoginForm/>
      <h2>Don't have an account? 
      <a href='/signup'>Sign Up</a>  
      </h2>
    </div>
      
      
    </div>
  )
}

export default LoginComponent
