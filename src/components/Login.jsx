import React from 'react'

const Login = () => {
  return (
    <div className='container'>
        <form>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='pass'/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login