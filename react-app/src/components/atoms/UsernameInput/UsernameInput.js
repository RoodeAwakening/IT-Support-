import React, { useState } from 'react';


function UsernameInput({UserName}) {

  const [username, setUsername] = useState ('')

  const updateUserName = (e)=>{
    setUsername(e.target.value)
  }


  return (
    <div>
      <label htmlFor="username">Username</label>
      <input 
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
