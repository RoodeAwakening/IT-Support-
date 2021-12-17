import React from 'react'

import styles from './LoginForm.module.css'

import UsernameInput from '../../atoms/UsernameInput/UsernameInput'
import PasswordInput from '../../atoms/PasswordInput/PasswordInput'
import ButtonLarge from '../../atoms/ButtonLarge/ButtonLarge'

function LoginForm() {
  return (
    <div className={styles.LoginForm_container}>
      <h1>Sign In</h1>
      <UsernameInput/>
      <PasswordInput/>
      <ButtonLarge text={'Sign In'}/>
      
    </div>
  )
}

export default LoginForm
