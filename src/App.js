import './App.css'
import Reg from './Library_Management/LogInJS/Register'
import Home from './Library_Management/DashBoard/Home'
import Add from './Library_Management/DashBoard/Add'
import Edit from './Library_Management/DashBoard/Edit'
import Read from './Library_Management/DashBoard/Read'
import Error from './Library_Management/DashBoard/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from './Library_Management/LogInJS/LogIn'
import ProtectedRoute from './Library_Management/ProtectedRoute'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Reg />}></Route>

            <Route path='/booksvilla/login' element={<LogIn />} />
            <Route element={<ProtectedRoute />}>
              <Route path='/booksvilla/home' element={<Home />} />
              <Route path='/booksvilla/home/add' element={<Add />} />
              <Route path='/booksvilla/home/read/:id' element={<Read />} />
              <Route path='/booksvilla/home/edit/:id' element={<Edit />} />
            </Route>
            <Route path='/*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
