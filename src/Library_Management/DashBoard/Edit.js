import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Edit = () => {
  const navigate = useNavigate()
  const Api = 'http://localhost:3000/books'
  const { id } = useParams() //accesses the parameters from current url
  const [values, setValues] = useState({
    title: '',
    pageCount: '',
    authors: '',
    categories: '',
    summary: '',
  })

  //for fetching the data from url will render only if id chages.
  useEffect(() => {
    axios
      .get(`${Api}/` + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err))
  }, [id])

  //for putting the data from url and navingating to home.
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .put(`${Api}/` + id, values)
      .then((res) => {
        console.log(res)
        navigate('/booksvilla/home')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div
      className='d-flex w-100 vh-100 justify-content-center align-items-center'
      style={{
        background:
          'linear-gradient(to left, rgba(120, 160, 144, 1), rgba(120, 75, 162, 1))',
      }}
    >
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Edit</h1>

        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              name='title'
              className='form-control'
              placeholder='Please Enter title'
              required
              value={values.title}
              onChange={(d) => setValues({ ...values, title: d.target.value })}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='pages'>Page Count:</label>
            <input
              type='number'
              name='title'
              className='form-control'
              placeholder='Please Enter Number of pages'
              required
              value={values.pageCount}
              onChange={(d) =>
                setValues({ ...values, pageCount: d.target.value })
              }
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='author'>Author Name:</label>
            <input
              type='text'
              name='author'
              className='form-control'
              placeholder='Please Enter Number of Author'
              required
              value={values.authors}
              onChange={(d) =>
                setValues({ ...values, authors: d.target.value })
              }
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='category'>Category:</label>
            <input
              type='text'
              name='category'
              className='form-control'
              placeholder='Please Enter Number of category'
              required
              value={values.categories}
              onChange={(d) =>
                setValues({ ...values, categories: d.target.value })
              }
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='category'>Summary:</label>
            <input
              type='text'
              name='category'
              className='form-control'
              placeholder='Please Enter Summary'
              required
              value={values.summary}
              onChange={(d) =>
                setValues({ ...values, summary: d.target.value })
              }
            />
          </div>
          <button type='submit' className='btn btn-success'>
            <CloudDoneIcon />
          </button>
          <button
            className='btn btn-primary ms-3'
            onClick={() => navigate('/booksvilla/home')}
          >
            <ArrowBackIcon />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edit
