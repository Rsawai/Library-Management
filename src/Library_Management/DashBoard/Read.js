import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import BorderColorIcon from '@mui/icons-material/BorderColor'

const Read = () => {
  const navigate = useNavigate()
  const Api = 'http://localhost:3000/books'

  const [data, setData] = useState([])

  //It is used for fetch data from url
  const { id } = useParams()

  //for fetching the data from url and will render only if id changes.
  useEffect(() => {
    axios
      .get(`${Api}/` + id)
      .then((see) => setData(see.data))
      .catch((error) => console.log(error))
  }, [id])

  const editDetails = (id) => {
    navigate(`/booksvilla/home/edit/${id}`)
  }

  return (
    <div
      className='d-flex w-100 vh-100 justify-content-center align-items-center'
      style={{
        background:
          'linear-gradient(to right, rgba(139, 199, 198, 1), rgba(120, 75, 162, 1))',
      }}
    >
      <div
        className=' w-50, ReadDiv'
        style={{
          background: ' rgba(50, 48, 48, 0.5)',
          borderColor: 'rgb(1, 1, 13)',
          textAlign: 'center',
          fontSize: '1.5em',
          fontWeight: 'lighter',
          color: 'white',
          boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        }}
      >
        <h1 style={{ fontWeight: 'bolder', fontSize: 40, marginTop: '3rem' }}>
          Details Of Book
        </h1>
        <div className='mb-2'>
          <strong>
            <b>Title :</b>&nbsp;&nbsp; {data.title}
          </strong>
        </div>
        <div className='mb-2'>
          <strong>
            <b>Page Count :</b>
            &nbsp;&nbsp; {data.pageCount}
          </strong>
        </div>
        <div className='mb-2'>
          <strong>
            <b>Author : </b>&nbsp;&nbsp;
            {data.authors}
          </strong>
        </div>
        <div className='mb-2'>
          <strong>
            <b>Category :</b> &nbsp;&nbsp;{data.categories}
          </strong>
        </div>
        <div style={{ margin: '2rem' }}>
          <strong>
            <b>Summary : &nbsp;&nbsp;</b>
            {data.summary}
          </strong>
        </div>
        <button onClick={() => editDetails(id)} className='btn btn-dark'>
          <BorderColorIcon />
        </button>
        <button
          onClick={() => navigate('/booksvilla/home')}
          to='/dashboard'
          className='btn btn-primary ms-5'
        >
          <ArrowBackIcon />
        </button>
      </div>
    </div>
  )
}
export default Read
