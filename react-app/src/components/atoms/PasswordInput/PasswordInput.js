import React, { useState } from 'react';


function PasswordInput({UserPassword}) {
  const [password, setPassword] = useState ('')

  const updateUserPassword = (e)=>{
    setPassword(e.target.value)
  }


  return (
    <div>
      <label htmlFor="password">Password</label>
      <input 
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
