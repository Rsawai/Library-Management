import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import EntryForm from '../Components/EntryForm'

const Add = () => {
  const navigate = useNavigate()
  const Api = 'http://localhost:3000/books'

  const [values, setValues] = useState({
    id: '',
    title: '',
    pageCount: '',
    authors: '',
    categories: '',
    summary: '',
  })

  const enterTitle = (d) => {
    setValues({ ...values, title: d.target.value })
  }
  const enterPageCount = (d) => {
    setValues({ ...values, pageCount: d.target.value })
  }
  const enterAuthors = (d) => {
    setValues({ ...values, authors: d.target.value })
  }
  const enterCategories = (d) => {
    setValues({ ...values, categories: d.target.value })
  }
  const enterSummary = (d) => {
    setValues({ ...values, summary: d.target.value })
  }

  //for fetching the data from url and adding after submitting.
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post(`${Api}`, values)
      .then((show) => {
        console.log(show)
        navigate('/booksvilla/home')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div
      className='d-flex w-100 vh-100 justify-content-center align-items-center '
      style={{
        background:
          'linear-gradient(to right, rgba(120, 144, 144, 1), rgba(120, 75, 162, 1))',
      }}
    >
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded '>
        <h1>Add a Book</h1>

        <EntryForm
          handleSubmit={handleSubmit}
          enterTitle={enterTitle}
          enterPageCount={enterPageCount}
          enterAuthors={enterAuthors}
          enterCategories={enterCategories}
          enterSummary={enterSummary}
        />
      </div>
    </div>
  )
}
export default Add
