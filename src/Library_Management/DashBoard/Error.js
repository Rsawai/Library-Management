import React from 'react'
import ErrorImage from '../DashBoard/error.jpg'

const Error = () => {
  return (
    <div>
      <center>
        <h1>Error</h1>
        <h1>Could Not Find The Page Please Check Your URL</h1>
        <img
          src={ErrorImage}
          alt='OoppsError'
          height={'300px'}
          width={'300px'}
        />
      </center>
    </div>
  )
}

export default Error
