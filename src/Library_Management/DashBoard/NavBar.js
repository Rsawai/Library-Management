import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  const Name = JSON.parse(localStorage.getItem('Info'))

  const handleClick = () => {
    navigate('/booksvilla/login')
    localStorage.setItem('LoginKey', false)
  }

  return (
    <Navbar
      className='navbar navbar-expand-sm sticky-top'
      style={{
        background:
          'linear-gradient(to right, rgba(166, 144, 144, 1), rgba(118, 75, 162, 1))',
      }}
    >
      <Container className='.bg-secondary.bg-gradient'>
        <Navbar.Brand
          style={{ color: 'white', fontWeight: 'bolder', fontSize: '1.5rem' }}
        >
          <span>B🤓🧐ks</span>
          &nbsp;Villa
        </Navbar.Brand>

        <Navbar className='justify-content-middle'>
          <Navbar.Text
            style={{
              color: 'white',
              fontSize: '1.6rem',
              fontFamily: 'Lobster Two',
              fontWeight: 'bold',
            }}
          >
            Signed in as:&nbsp;&nbsp;
            <span
              style={{
                color: 'black',
                fontStyle: 'italic',
                fontSize: '1.7rem',
              }}
            >
              {Name.name}
            </span>
          </Navbar.Text>
        </Navbar>
        <Navbar className='justify-content-end'>
          <Navbar>
            <button onClick={() => handleClick()} className='btn btn-dark'>
              Logout
            </button>
          </Navbar>
        </Navbar>
      </Container>
    </Navbar>
  )
}

export default NavBar
