import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './NavBar'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import axios from 'axios'
import HashLoader from 'react-spinners/HashLoader'
import '../StylingCSS/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TablePage from '../Components/TablePage'

const Home = () => {
  const Api = 'http://localhost:3000/books'
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  //for fetching the data from url and adding. setLoading is for loader purpose
  useEffect(() => {
    axios
      .get(Api)
      .then((show) => setData(show.data))
      .catch((err) => console.log(err))

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [])

  //for deleting the required id
  const handleDelete = (id) => {
    const confirm = window.confirm('Would you like to Delete?')
    if (confirm) {
      axios
        .delete(`${Api}/` + id)
        .then((show) => {
          window.location.reload()
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <Nav />

      {loading ? (
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <HashLoader size={30} color={'#4278f5'} loading={loading} />
        </div>
      ) : (
        <div className='d-flex flex-column justify-content-center align-items-center bg-red-light'>
          <div
            className='d-flex flex-column justify-content-center align-items-center '
            style={{ zIndex: 1 }}
          >
            <h2
              className='position-fixed vw-100'
              id='HeadingDiv'
              style={{
                top: 85,
                textAlign: 'center',

                backgroundColor: 'white',
              }}
            >
              Books
              {/* Add button */}
              <Link
                to='/booksvilla/home/add'
                className='btn btn-success'
                style={{ marginLeft: '10%' }}
              >
                <AddCircleIcon />
              </Link>
            </h2>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center w-75 bg-white border  '>
            <TablePage data={data} handleDelete={handleDelete} />
          </div>
        </div>
      )}
    </>
  )
}

export default Home
