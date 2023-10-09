import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import '../StylingCSS/LogIn.css'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

// import { Design } from './Input'

const AccountForm = ({
  handleDetails,

  SaveDetails,
  takeName,
  validateName,
  takeEmail,
  validateEmail,
  takePass,
  validatePassword,
}) => {
  const [type, setType] = useState(true)
  const [icon, setIcon] = useState(<VisibilityOffIcon />)
  const handleToggle = () => {
    if (type === false) {
      setIcon(<VisibilityOffIcon />)
      setType(true)
    } else {
      setIcon(<VisibilityIcon />)
      setType(false)
    }
  }
  return (
    <form className='login-form' onSubmit={handleDetails}>
      {/* input for username */}
      <div className='form-control'>
        <input
          type='text'
          placeholder='username'
          name='name'
          minLength='5'
          value={takeName}
          required
          onChange={SaveDetails}
          onBlur={validateName}
          className='inputField'
        />
        <i>
          <PersonIcon />
        </i>
      </div>

      {/* input field for email */}
      <div className='form-control'>
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={takeEmail}
          required
          onChange={SaveDetails}
          onBlur={validateEmail}
          className='inputField'
        />

        <i>
          <EmailIcon />
        </i>
      </div>

      {/* input for password */}
      <div className='form-control'>
        <input
          type={type ? 'password' : 'text'}
          placeholder='Password'
          name='password'
          required
          value={takePass}
          onChange={SaveDetails}
          onBlur={validatePassword}
          className='inputField'
        />

        <i className='visible' onClick={handleToggle}>
          {icon}
        </i>
      </div>
      {
        <NavLink to='/booksvilla/login'>
          <section>Already have an Account? Click here</section>
        </NavLink>
      }
      <Button>Sign Up</Button>
    </form>
  )
}

export default AccountForm
