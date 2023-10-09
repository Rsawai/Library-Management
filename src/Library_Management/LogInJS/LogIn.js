import React, { useState } from 'react'
import Logo from '../StylingCSS/libraryClipArt.avif'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { NavLink, useNavigate } from 'react-router-dom'
import '../StylingCSS/LogIn.css'
import Button from '../Components/Button'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import {
  ContainerDiv,
  Message,
  PageTitle,
  Separator,
} from '../Components/InputStyling'
import InputBox from '../Components/InputBox'

const LogIn = () => {
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

  const navigate = useNavigate()

  const [item, setItem] = useState({
    email: '',
    password: '',
  })
  const Logemail = item.email
  const Logpass = item.password

  //function for saving data in hook
  const SaveItems = (data) => {
    setItem({ ...item, [data.target.name]: data.target.value })
  }

  const SubmitDetails = (d) => {
    d.preventDefault()
    const check = JSON.parse(localStorage.getItem('Info')) //fetches data from register page's key

    //validates email and pass according to local storage
    if (
      Logemail === check.name ||
      (Logemail === check.email && Logpass === check.password)
    ) {
      localStorage.setItem('LoginKey', true)

      navigate('/booksvilla/home')
    } else {
      alert('Please Enter Correct Details')
    }
  }

  return (
    <>
      <div className='mainDiv'>
        <section className='side'>
          <img src={Logo} alt='Library' />
        </section>

        <section className='main'>
          <ContainerDiv>
            <PageTitle>welcome</PageTitle>

            <Separator />

            <Message>
              यः पठति लिखति पश्यति परिपृच्छति पंडितान् उपाश्रयति। तस्य
              दिवाकरकिरणैः नलिनी दलं इव विस्तारिता बुद्धिः॥
            </Message>

            <form className='login-form' onSubmit={SubmitDetails}>
              {/* email input */}
              <div className='form-control'>
                <InputBox
                  type={'text'}
                  name={'email'}
                  value={Logemail}
                  placeholder={'Enter email/username'}
                  onChange={SaveItems}
                  className={'inputField'}
                />
                <i className='icon'>
                  <AccountBoxIcon />
                </i>
              </div>

              {/* password input */}
              <div className='form-control'>
                <InputBox
                  type={type ? 'password' : 'text'}
                  name={'password'}
                  placeholder={'Enter You Password'}
                  value={Logpass}
                  onChange={SaveItems}
                  className={'inputField'}
                />
                <i className='visible' onClick={handleToggle}>
                  {icon}
                </i>
              </div>
              {
                <NavLink to='/'>
                  <section>Want to Create a New Account? Click here</section>
                </NavLink>
              }
              <Button>Login</Button>
            </form>
          </ContainerDiv>
        </section>
      </div>
    </>
  )
}

export default LogIn
