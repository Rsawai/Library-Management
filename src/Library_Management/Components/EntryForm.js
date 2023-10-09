import React from 'react'
import InputBox from './InputBox'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'

const EntryForm = ({
  handleSubmit,
  enterTitle,
  enterPageCount,
  enterAuthors,
  enterCategories,
  enterSummary,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-2'>
        <label htmlFor='title'>Title:</label>

        <InputBox
          type={'text'}
          name={'title'}
          placeholder={'Enter Title'}
          onChange={enterTitle}
        />
      </div>
      <div className='mb-2'>
        <label htmlFor='pagecount'>Page Count:</label>
        <InputBox
          type={'number'}
          name={'pagecount'}
          placeholder={'Enter Page Count'}
          onChange={enterPageCount}
        />
      </div>
      <div className='mb-2'>
        <label htmlFor='name'>Author:</label>
        <InputBox
          type={'text'}
          name={'Author Name'}
          placeholder={`Enter Authou's Name`}
          onChange={enterAuthors}
        />
      </div>
      <div className='mb-2'>
        <label htmlFor='name'>Category:</label>
        <InputBox
          type={'text'}
          name={'category'}
          placeholder={'Enter Category'}
          onChange={enterCategories}
        />
      </div>

      <div className='mb-2'>
        <label htmlFor='name'>Summary:</label>
        <InputBox
          type={'text'}
          name={'summary'}
          placeholder={'Enter Summary'}
          onChange={enterSummary}
        />
      </div>
      <button className='btn btn-success'>
        <CloudDoneIcon />
      </button>
      <Link to='/booksvilla/home' className='btn btn-primary ms-3'>
        <ArrowBackIcon />
      </Link>
    </form>
  )
}

export default EntryForm
