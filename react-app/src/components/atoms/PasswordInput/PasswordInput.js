import React, { useState } from 'react';
import styles from './PasswordInput.module.css'


function PasswordInput({UserPassword}) {
  const [password, setPassword] = useState ('')

  const updateUserPassword = (e)=>{
    setPassword(e.target.value)
  }


  return (
    <div className={styles.PasswordInput_container}>
      <label htmlFor="password"></label>
      <input 
      className={styles.PasswordInput_container__input}
      username = {UserPassword}
      type = 'password'
      placeholder='Password'
      value = {password}
      onChange={updateUserPassword}
      />
      
    </div>
  )
}

export default PasswordInput
