import React, { useState } from 'react';
import styles from './UsernameInput.module.css'


function UsernameInput({UserName}) {

  const [username, setUsername] = useState ('')

  const updateUserName = (e)=>{
    setUsername(e.target.value)
  }


  return (
    <div className={styles.UsernameInput_container}>
      <label htmlFor="username"></label>
      <input 
      className={styles.UsernameInput_container__input}
      username = {UserName}
      type = 'text'
      placeholder='username'
      value = {username}
      onChange={updateUserName}
      />
      
    </div>
  )
}

export default UsernameInput
