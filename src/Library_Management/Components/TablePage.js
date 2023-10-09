import React from 'react'
import '../StylingCSS/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { Link } from 'react-router-dom'

const TablePage = ({ handleDelete, data }) => {
  return (
    <table className='table table-striped' style={{ marginTop: 50 }}>
      <thead
        className='table-dark'
        style={{
          justifyContent: 'space-around',
          background: 'white',

          position: 'sticky',

          top: 122 /* Don't forget this, required for the stickiness */,
        }}
      >
        <tr>
          <th>Title</th>
          <th>PageCount</th>
          <th>Author</th>
          <th>Category</th>

          <th></th>
        </tr>
      </thead>

      <tbody>
        {/* map ierates the data from and stores in another array.
                 and then we are displaying the data according to the title */}
        {data.map((store, index) => (
          <tr key={index}>
            <td>{store.title}</td>
            <td>{store.pageCount}</td>
            <td>{store.authors}</td>
            <td>{store.categories}</td>
            <td>
              {/* read button */}

              <Link
                to={`/booksvilla/home/read/${store.id}`}
                className='btn btn-sm btn-info me-2'
              >
                Read
              </Link>

              {/* Edit button */}

              <Link
                to={`/booksvilla/home/edit/${store.id}`}
                className='btn btn-sm btn-terinary me-2'
              >
                <BorderColorIcon />
              </Link>

              {/* Delete Button */}
              <button
                onClick={(e) => handleDelete(store.id)}
                className='btn btn-sm btn-danger me-2'
              >
                <DeleteForeverIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablePage
