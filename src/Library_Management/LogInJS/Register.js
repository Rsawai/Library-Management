import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../StylingCSS/LogIn.css'
import Logo from '../StylingCSS/libraryClipArt.avif'
import { useNavigate } from 'react-router-dom'
import {
  ContainerDiv,
  Message,
  PageTitle,
  Separator,
} from '../Components/InputStyling'
import AccountForm from '../Components/AccountForm'

const Register = () => {
  const navigate = useNavigate()

  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [validname, setValidName] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validatepass, setValidatePass] = useState(false) //Password validation purpose

  //function for storing data in local storage
  const handleDetails = (e) => {
    e.preventDefault()
    if (validname && validEmail && validatepass) {
      alert('Account Created Succesfully, Please click ok to Continue...')
      localStorage.setItem('Info', JSON.stringify(details))

      console.log('saved in local')
      navigate('/booksvilla/login')
    } else {
      toast.error('Something is missing, check your inputs', {
        position: 'top-center',
      })
    }
  }

  // for validating name
  const validateName = () => {
    const regEx = /^[a-z][-a-z0-9_]*\$?$/
    //.test method check regular expression is match with given parameter
    if (regEx.test(takeName)) {
      setValidName(true)
    } else if (!regEx.test(takeName)) {
      toast.error('No special Character, start with lowercase')
    } else {
      setValidName(true)
    }
  }

  // regular expression for email validation
  const validateEmail = () => {
    const EmailValue = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    //.test method check regular expression is match with given parameter then return
    if (EmailValue.test(takeEmail)) {
      setValidEmail(true)
      toast.success('valid')
    } else if (!EmailValue.test(takeEmail)) {
      toast.error('please enter valid email-Id')
    }
  }

  //function for validating password as per regex
  const validatePassword = () => {
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&$])(?=.{8,})/

    if (regExp.test(takePass)) {
      setValidatePass(true)
    } else if (!regExp.test(takePass)) {
      toast.error(
        'atleast (1 uppercase and lowercase letter, number and special character is mandatory) and length>=8',
        {
          position: 'top-center',
        }
      )
    } else {
      setValidatePass(true)
    }
  }
  const takeName = details.name
  const takeEmail = details.email
  const takePass = details.password

  //function for saving details from form in details
  function SaveDetails(data) {
    setDetails({ ...details, [data.target.name]: data.target.value }) //insert data with existing details
  }

  return (
    <>
      <div className='mainDiv'>
        <section className='side'>
          <img src={Logo} alt='library' />
        </section>

        <section>
          <ContainerDiv>
            <PageTitle>Register</PageTitle>

            <Separator />

            <Message>
              One who reads, writes, sees, lives in the company of learned, his
              intellect expands as the lotus petals expands in the rays of sun.
            </Message>

            <AccountForm
              handleDetails={handleDetails}
              takeName={takeName}
              SaveDetails={SaveDetails}
              takeEmail={takeEmail}
              validateName={validateName}
              validateEmail={validateEmail}
              takePass={takePass}
              validatePassword={validatePassword}
            />
          </ContainerDiv>
        </section>
      </div>
      <ToastContainer />
    </>
  )
}

export default Register
